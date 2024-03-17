const { AuthModel } = require("../models");
const {setToken} = require("../middleware/TokenAuth")

async function LoginController(req, res) {
  try {
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      return res.status(400).json({ error: "Missing credentials" });
    }

    const user = await AuthModel.findOne({ userEmail });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    if (user.userPassword !== userPassword) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    
    // Initialize the token
    const token = setToken(user);
    res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 * 7 });

    // If everything is correct, return a success message or user data
    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = LoginController;
