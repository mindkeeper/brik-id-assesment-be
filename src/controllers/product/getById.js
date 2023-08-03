const asyncErrorHandler = require("../asyncErrorHandler");
const { Product, Category } = require("../../models");
const CustomError = require("../../utils/CustomError");
const productByIdHandler = asyncErrorHandler(async (req, res, next) => {
  const id = req.params.id;

  const product = await Product.findByPk(id, {
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["name"],
      },
    ],
  });
  const categoryName = product.category.name;
  delete product.dataValues.category;
  const response = {
    ...product.dataValues,
    category_name: categoryName,
  };
  if (!product) return next(new CustomError("product not found", 404));
  return res
    .status(200)
    .json({ message: "success", data: { product: response } });
});
module.exports = productByIdHandler;
