const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: "users" , required: true},
});

const productModel = model("products", productSchema);

module.exports = productModel;
