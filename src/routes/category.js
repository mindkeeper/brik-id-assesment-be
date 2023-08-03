const getCategoriesHandler = require("../controllers/category/getCategories");

const routes = require("express").Router();

routes.get("/all", getCategoriesHandler);
module.exports = routes;
