const { Router } = require("express");
const {
  DetailsController, DetailsChangeController,
} = require("../controllers");
const {CheckAuth} = require("../middleware");

const UserRouter = Router();

UserRouter.get("/details", CheckAuth, DetailsController);
UserRouter.post("/change-details", CheckAuth, DetailsChangeController);

module.exports = UserRouter;
