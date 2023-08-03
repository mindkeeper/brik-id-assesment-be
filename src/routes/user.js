const getUserHandler = require("../controllers/user/getUser");
const verifyToken = require("../middlewares/auth/verifyToken");

const routes = require("express").Router();

routes.get("/", verifyToken, getUserHandler);
module.exports = routes;
