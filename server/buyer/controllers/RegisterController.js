const { SECRET_JWT_KEY } = require("../constant");
const jwt = require("jsonwebtoken");
const { AuthModel, UserModel } = require("../models");
const { setToken } = require("../middleware/TokenAuth");

async function RegisterController(req, res) {
  console.log(`🚀 =>`, "RegisterController");
  try {
    const { userName, userEmail, userPassword } = req.body;
    if (!userName || !userEmail || !userPassword) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await AuthModel.findOne({ userEmail });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = new AuthModel({
      userName,
      userEmail,
      userPassword,
    });
    const newUserDetails = new UserModel({ _id: newUser._id });

    await newUser.save();
    await newUserDetails.save();

    // Initialize the token
    const token = setToken(newUser);
    res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 * 7 });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
    console.log(`🚀 ~ file: RegisterController.js:42 ~ RegisterController ~ newUserDetails:\n =>`, newUserDetails);
}

module.exports = RegisterController;
