const dataUriParser = require("datauri/parser");
const cloudinary = require("../../../config/cloudinary");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const asyncErrorHandler = require("../../controllers/asyncErrorHandler");

const cloudinaryUpload = (folderName) =>
  asyncErrorHandler(async (req, res, next) => {
    const { file } = req;
    if (!file) return next();

    const parser = new dataUriParser();
    const buffer = file.buffer;
    const ext = path.extname(file.originalname).toString();
    const datauri = parser.format(ext, buffer);

    const upload = await cloudinary.uploader.upload(datauri.content, {
      public_id: uuidv4(),
      folder: folderName,
    });
    req.image = `https${upload.url.slice(4)}`;
    return next();
  });

module.exports = cloudinaryUpload;
