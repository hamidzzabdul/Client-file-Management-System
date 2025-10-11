const cloudinary = require("../utils/cloudinary");
const streamifier = require("streamifier");

exports.uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: folder || "uploads",
        resource_type: "auto", // handles images, pdfs, videos etc.
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};
