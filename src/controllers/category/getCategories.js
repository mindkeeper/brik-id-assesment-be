const asyncErrorHandler = require("../asyncErrorHandler");
const { Category } = require("../../models");
const getCategoriesHandler = asyncErrorHandler(async (req, res, next) => {
  const categories = await Category.findAll({ attributes: ["id", "name"] });
  return res.status(200).json({ message: "success", data: { categories } });
});
module.exports = getCategoriesHandler;
