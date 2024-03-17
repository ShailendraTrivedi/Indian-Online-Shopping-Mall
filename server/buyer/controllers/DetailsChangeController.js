const UserModel = require("../models/UserModel");

async function DetailsChangeController(req, res) {
  console.log(`🚀 =>`, "DetailsChangeController");
  try {
    const { _id } = req.userDetails;
    const newValues = req.body;

    const user = await UserModel.findById(_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(_id, newValues, {
      new: true,
    });

    return res.json(updatedUser);
  } catch (error) {
    console.error("DetailsChangeController Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = DetailsChangeController;
