const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  userName: { type: String, required: [true, "Name Not Found !!!"] },
  userEmail: { type: String, required: [true, "Email Not Found !!!"] },
  userPassword: { type: String, required: [true, "Password Required !!!"] },
});

const AuthModel = mongoose.model("auth", AuthSchema);
module.exports = AuthModel;
