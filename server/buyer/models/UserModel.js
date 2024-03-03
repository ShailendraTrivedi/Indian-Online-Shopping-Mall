const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: { type: String, required: [true, "Name Not Found !!!"] },
  userEmail: { type: String, required: [true, "Email Not Found !!!"] },
  userPassword: { type: String, required: [true, "Password Required !!!"] },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
