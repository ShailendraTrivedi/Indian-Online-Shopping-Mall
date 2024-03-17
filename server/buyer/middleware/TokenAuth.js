const jwt = require("jsonwebtoken");
const { SECRET_JWT_KEY } = require("../constant");

const setToken = (user) => {
  console.log(`🚀 ~ file: TokenAuth.js:5 ~ setToken ~ user:\n =>`, user);
  const payload = {
    _id: user._id,
    userName: user.userName,
    userEmail: user.userEmail,
  };
  const token = jwt.sign(payload, SECRET_JWT_KEY, { expiresIn: "7d" });
  return token;
};

const getToken = (token) => {
  if (!token) return null;
  const decode = jwt.verify(token, SECRET_JWT_KEY);
  return decode;
};

module.exports = {
  setToken,
  getToken,
};
