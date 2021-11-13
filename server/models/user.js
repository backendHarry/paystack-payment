const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  products: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

const user = model("users", userSchema);

module.exports = user;
