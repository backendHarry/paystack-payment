const productsModel = require("../models/products");

const productsListController = async (req, res, next) => {
  try {
    const products = await productsModel.find();
    res.json({ products: products });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const productCheckout = (req, res, next) => {
  try {
    res.send("testing");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  productsListController,
  productCheckout,
};
