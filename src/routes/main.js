const routes = require("express").Router();
const authRoutes = require("./auth");
const productRoutes = require("./product");
const userRoutes = require("./user");
const categoryRoutes = require("./category");

const prefix = "/api";

routes.use(`${prefix}/auth`, authRoutes);
routes.use(`${prefix}/product`, productRoutes);
routes.use(`${prefix}/user`, userRoutes);
routes.use(`${prefix}/category`, categoryRoutes);

routes.get("/", (_, res) => res.status(200).json({ message: "welcome" }));

module.exports = routes;
