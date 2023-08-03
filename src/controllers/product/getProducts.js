const asyncErrorHandler = require("../asyncErrorHandler");
const { Product, Sequelize } = require("../../models");
const CustomError = require("../../utils/CustomError");
const getPagination = require("../../utils/getPagination");
const getProductsHandler = asyncErrorHandler(async (req, res, next) => {
  const { name, category_id, sort, page = 1, limit = 6 } = req.query;
  const { Op } = Sequelize;
  const offset = (parseInt(page) - 1) * parseInt(limit);

  let sortBy = null;
  if (sort === "oldest") sortBy = [["createdAt", "ASC"]];
  if (sort === "newest") sortBy = [["createdAt", "DESC"]];
  if (sort === "cheapest") sortBy = [["price", "ASC"]];
  if (sort === "priciest") sortBy = [["price", "DESC"]];
  const conditions = {
    ...(!name ? {} : { name: { [Op.iLike]: `%${name.toLowerCase()}%` } }),
    ...(!category_id ? {} : { category_id: category_id }),
  };

  const { count, rows: products } = await Product.findAndCountAll({
    where: conditions,
    ...(!sortBy ? {} : { order: sortBy }),
    offset,
    limit: parseInt(limit),
  });
  const pagination = getPagination(count, page, limit);
  if (!products) return next(new CustomError("product not found", 404));
  return res.status(200).json({
    message: "success",
    data: {
      products,
      pagination,
    },
  });
});
module.exports = getProductsHandler;
