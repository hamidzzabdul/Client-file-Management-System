const File = require("../model/file");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { uploadToCloudinary } = require("../utils/uploadToCloudinary");
const path = require("path");

exports.createFile = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError("please Upload a file", 400));
  }

  if (!req.user) {
    return next(new AppError("User must be logged in", 401));
  }

  const existingFile = await File.findOne({
    name: req.body.name,
    uploadedBy: req.user._id,
  });
  if (existingFile) {
    return next(
      new AppError(
        "File name already exists, please choose a different name",
        400
      )
    );
  }

  // Upload to Cloudinary
  const uploadResult = await uploadToCloudinary(req.file.buffer, "myAppFiles");
  const ext = path
    .extname(req.file.originalname)
    .replace(".", "")
    .toLowerCase();

  const file = await File.create({
    name: req.body.name,
    description: req.body.description,
    url: uploadResult.secure_url, // cloudinary URL
    type: ext,
    size: req.file.size,
    uploadedBy: req.user ? req.user._id : null,
  });

  res.status(201).json({
    message: "success",
    data: {
      file,
    },
  });
});

exports.getAllFiles = catchAsync(async (req, res, next) => {
  const files = await File.find();
  res.status(200).json({
    status: "success",
    data: {
      files,
    },
  });
});

exports.getMyFiles = catchAsync(async (req, res, next) => {
  if (!req.user) return next(new AppError("You need to login", 403));

  const userId = req.user._id;
  const myFiles = await File.find({ uploadedBy: userId }).sort({
    createdAt: -1,
  });
  res.status(200).json({
    status: "success",
    result: myFiles.length,
    data: {
      myFiles,
    },
  });
});

exports.DeleteFile = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const file = await File.findById(id);

  if (!file) return next(new AppError("File Not Found", 404));

  const parts = file.url.split("/");
  const publicIdWithExt = parts[parts.length - 1]; // e.g., invoice1.pdf
  const publicId = publicIdWithExt.split(".")[0];

  await cloudinary.uploader.destroy(`myAppFiles/${publicId}`, {
    resource_type: "raw",
  });

  await File.findByIdAndDelete(id);

  // 5️⃣ Send response
  res.status(200).json({
    status: "success",
    message: "File deleted successfully",
  });
});
