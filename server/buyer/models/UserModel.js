const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  recipientMobile: { type: String },
  recipientName: { type: String },
  recipientAddress: { type: String },
  recipientCity: { type: String },
  recipientState: { type: String },
  recipientPostCode: { type: String },
  recipientCountry: { type: String },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
