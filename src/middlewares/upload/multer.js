const multer = require("multer");
const CustomError = require("../../utils/CustomError");
const options = {
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const errorMessage = "Only jpg, png, jpeg, and webp are allowed";
    if (!allowedTypes.includes(file.mimetype))
      return cb(new Error(errorMessage), false);
    cb(null, true);
  },
  limits: 2 * 1024 * 1024,
};

const uploadSingle = multer(options).single("image");
const single = (req, res, next) => {
  uploadSingle(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      const message = "File too large, image must be 2MB or lower";
      return next(new CustomError(message, 400));
    }
    if (err) return next(err);
    return next();
  });
};

module.exports = { single };
