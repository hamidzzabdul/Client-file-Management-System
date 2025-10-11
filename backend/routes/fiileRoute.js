const express = require("express");

const fileController = require("../controllers/fileController");
const authController = require("../controllers/authController");
const upload = require("../utils/multerConfig"); // where you exported multer

const router = express.Router();

// for admin
router.get(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  fileController.getAllFiles
);

// getting files for user

router.get("/my-files", authController.protect, fileController.getMyFiles);

router.post(
  "/create-file",
  authController.protect,
  upload.single("file"),
  fileController.createFile
);

router.delete("/:id", authController.protect, fileController.DeleteFile);

module.exports = router;
