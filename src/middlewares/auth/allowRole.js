const CustomError = require("../../utils/CustomError");

const admin = (req, res, next) => {
  const { role } = req.userPayload;
  if (role !== "Admin")
    return next(new CustomError("only admin are allowed", 403));
  return next();
};

module.exports = { admin };
