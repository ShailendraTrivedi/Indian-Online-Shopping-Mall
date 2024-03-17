const { UserModel } = require("../models");

async function HandleUserDetails(req, res) {
  try {
    const { _id } = req.userDetails;

    if (!_id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const user = await UserModel.findById(_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = HandleUserDetails;
