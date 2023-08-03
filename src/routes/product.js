const routes = require("express").Router();
const verifyToken = require("../middlewares/auth/verifyToken");
const cloudinaryUpload = require("../middlewares/upload/cloudinaryUpload");
const upload = require("../middlewares/upload/multer");
const allowRole = require("../middlewares/auth/allowRole");
const createProductHandler = require("../controllers/product/createProduct");
const productByIdHandler = require("../controllers/product/getById");
const getProductsHandler = require("../controllers/product/getProducts");

routes.post(
  "/new",
  verifyToken,
  allowRole.admin,
  upload.single,
  cloudinaryUpload("products"),
  createProductHandler
);

routes.get("/", getProductsHandler);
routes.get("/:id", productByIdHandler);
module.exports = routes;
