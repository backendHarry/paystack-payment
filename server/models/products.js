const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, unique: true },
  price: Number,
  images: [String],
});

const productModel = model("products", productSchema);

module.exports = productModel;
