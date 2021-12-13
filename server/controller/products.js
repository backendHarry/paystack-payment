const productsModel = require("../models/products");

const productsListController = async (req, res, next) => {
  try {
    const product = await productsModel.findOne();
    res.json({ product: product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const productCheckout = (req, res, next) => {
  try {
    const email = req.user.email ? req.user.email : "NO EMAIL YET";
    res.send(`You are now at Flutter wave page. your email is ${email}`);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  productsListController,
  productCheckout,
};
