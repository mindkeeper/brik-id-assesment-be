const loginHandler = require("../controllers/auth/login");
const registerHandler = require("../controllers/auth/register");

const routes = require("express").Router();

routes.post("/register", registerHandler);
routes.post("/login", loginHandler);

module.exports = routes;
