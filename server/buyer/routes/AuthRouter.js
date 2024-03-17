const { Router } = require("express");
const { LoginController, RegisterController } = require("../controllers");

const AuthRouter = Router();

AuthRouter.post("/login", LoginController);
AuthRouter.post("/register", RegisterController);

module.exports = AuthRouter;
