const { User } = require("../../models");
const CustomError = require("../../utils/CustomError");
const asyncErrorHandler = require("../asyncErrorHandler");

const getUserHandler = asyncErrorHandler(async (req, res, next) => {
  const userId = req.userPayload.id;
  const user = await User.findByPk(userId, {
    attributes: {
      exclude: ["deletedAt", "createdAt", "updatedAt", "password"],
    },
  });
  if (!user) {
    const error = new CustomError("user not found", 404);
    return next(error);
  }
  return res.status(200).json({ message: "success", data: { user } });
});
module.exports = getUserHandler;
