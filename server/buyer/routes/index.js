const { Router } = require("express");
const UserRouter = require("./UserRouter");
const AuthRouter = require("./AuthRouter");

const Routers = Router();

  Routers.use("/auth", AuthRouter)
  Routers.use("/user", UserRouter)

module.exports = Routers;
