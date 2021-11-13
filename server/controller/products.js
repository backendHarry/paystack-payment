const prodModel = require("../models/product");
const user = require("../models/user");

const prodController = async (req, res, next) => {
  try {
    const products = await prodModel.find();
    res.json({ products });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    let data = req.body;
    const id = req.user.id;
    data = { ...data, user: id };
    const product = await prodModel.create(data);
    const updatedUser = await user.findByIdAndUpdate(id, {
      $set: { products: product },
    });
    res.json({ message: "product created successfully", product: product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const buyProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;
    const product = await prodModel.findById(productId);
    if (product) {
      if (product.user !== userId) {
        let cart = req.session.cart || [];
        cart.push(productId);
        res.json({ message: "product added to cart successfully" });
      } else {
        res
          .status(400)
          .json({ message: "Hello!!, you created this project!!" });
      }
    } else {
      res.status(400).json({ message: "sorry no product selected" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const itemsInCart = async (req, res, next) => {
  try {
    const items = req.session.cart;
    res.json({ items });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
// Next will be to redirect users to make payment, probably change the itemsInCart function to a confirmCart logic, before the redirect
module.exports = {
  prodController,
  createProduct,
  buyProduct,
  itemsInCart,
};
