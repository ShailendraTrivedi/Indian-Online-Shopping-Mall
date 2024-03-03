const { Router } = require("express");
const { LoginController, RegisterController } = require("../controllers");

const UserRouter = Router();

UserRouter.post("/login", LoginController);
UserRouter.post("/register", RegisterController);

module.exports = UserRouter;
