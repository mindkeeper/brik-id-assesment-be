const asyncErrorHandler = require("../asyncErrorHandler");
const { Product } = require("../../models");
const createProductHandler = asyncErrorHandler(async (req, res, next) => {
  const image = req.image;

  const product = await Product.create({ image, ...req.body });

  return res.status(201).json({ message: "created", data: { product } });
});
module.exports = createProductHandler;
