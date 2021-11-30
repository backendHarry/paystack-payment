const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
});

const UserModel = model("users", userSchema);

module.exports = UserModel;
