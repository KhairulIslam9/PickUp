const config = require("config");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const outputFolder = "src/assets";

const upload = multer({
  dest: "src/uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const uploadFiles = upload.array("images", 10); // limit to 10 images

const uploadImages = (req, res, next) => {
  uploadFiles(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_UNEXPECTED_FILE") {
        return res.send("Too many files to upload.");
      }
    } else if (err) {
      return res.send(err);
    }

    next();
  });
};

const resizeImages = async (req, res, next) => {
  if (!req.files) return next();
  console.log(req.body.images);
  req.body.images = [];
  await Promise.all(
    req.files.map(async (file) => {
      const filename = file.originalname.replace(/\..+$/, "");
      const newFilename = `${filename}-${Date.now()}`;

      console.log(file);
      await sharp(file.path)
        .resize(2000)
        .toFormat("jpeg")
        .jpeg({ quality: 50 })
        .toFile(path.resolve(outputFolder, `${newFilename}_full.jpg`));

      await sharp(file.path)
        .resize(100)
        .jpeg({ quality: 30 })
        .toFile(path.resolve(outputFolder, `${newFilename}_thumb.jpg`));

      req.body.images.push(newFilename);
    })
  );

  next();
};

const getResult = async (req, res) => {
  const baseUrl = config.get("assetsBaseUrl");
  const images = req.body.images.map((image) => ({
    url: `${baseUrl}${image}_full.jpg`,
    thumbnailUrl: `${baseUrl}${image}_thumb.jpg`,
  }));

  return res.send(images);
};

module.exports = {
  uploadImages: uploadImages,
  resizeImages: resizeImages,
  getResult: getResult,
};
