const express = require("express");

const isAuth = require("../middleware/auth");
const {
  prodController,
  createProduct,
  buyProduct,
  itemsInCart,
} = require("../controller/products");

const productRoutes = express.Router();

// GET
productRoutes.get("/products", isAuth, prodController);
productRoutes.get("/buy-products/:id", isAuth, buyProduct);
productRoutes.get("/cart-items/", isAuth, itemsInCart);

// POST
productRoutes.post("/create-products", createProduct);

module.exports = productRoutes;
