const { Router } = require("express");
const UserRouter = require("./UserRouter");

const Routers = Router();

Routers.use("/user", UserRouter)

module.exports = Routers;
