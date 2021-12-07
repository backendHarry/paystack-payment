const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true },
  password: String,
});

const UserModel = model("users", userSchema);

module.exports = UserModel;
