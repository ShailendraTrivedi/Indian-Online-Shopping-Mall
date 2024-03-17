const { AuthModel } = require("../models");
const { getToken } = require("./TokenAuth");

async function CheckAuth(req, res, next) {
  console.log(`🚀 =>`, "CheckAuth");
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }
    const { _id, userName, userEmail } = getToken(token);
    if (!_id || !userName || !userEmail) {
      return res.status(401).json({ error: "Invalid authorization token" });
    }

    const existingUser = await AuthModel.findById(_id);
    if (
      !existingUser ||
      existingUser.userName !== userName ||
      existingUser.userEmail !== userEmail
    ) {
      return res.status(401).json({ error: "Unauthorized access" });
    }
    req.userDetails = { _id, userName, userEmail };
    
    next();
  } catch (error) {
    console.error("CheckAuth Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = CheckAuth;
