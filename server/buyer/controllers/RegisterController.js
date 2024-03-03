const {UserModel} = require("../models");

async function RegisterController(req, res) {
  try {
    const { userName, userEmail, userPassword } = req.body;

    // Check if any required fields are missing
    if (!userName || !userEmail || !userPassword) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if the user already exists in the database
    const existingUser = await UserModel.findOne({ userEmail });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create a new user object
    const newUser = new UserModel({
      userName,
      userEmail,
      userPassword,
    });

    // Save the new user to the database
    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = RegisterController;
