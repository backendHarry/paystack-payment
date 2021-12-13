const express = require("express");
const productRouter = express.Router();

// Middleware
const isLoggedInMiddleware = require("../middleware/auth");

const {
  productsListController,
  productCheckout,
} = require("../controller/products");

productRouter.get("/products", productsListController);
productRouter.post("/checkout", isLoggedInMiddleware, productCheckout);

module.exports = productRouter;
