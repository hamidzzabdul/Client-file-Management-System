// const multer = require("multer");
// const path = require("path");
// const AppError = require("./appError");

// // Set storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // make sure this folder exists
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// // File filter for allowed types
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "application/pdf",
//     "application/msword",
//     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     "application/vnd.ms-excel",
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//   ];

//   if (!allowedTypes.includes(file.mimetype)) {
//     return cb(new AppError("Only PDF, Word, and Excel files are allowed", 400));
//   }
//   cb(null, true);
// };

// // Limits: 10MB max
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 10 * 1024 * 1024 },
// });

// module.exports = upload;

const multer = require("multer");

const storage = multer.memoryStorage(); // keep file in memory
const upload = multer({ storage });

module.exports = upload;
