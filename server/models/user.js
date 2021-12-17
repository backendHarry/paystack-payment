const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: String,
  username: { type: String, unique: true },
  password: String,
});

const UserModel = model("users", userSchema);

module.exports = UserModel;
