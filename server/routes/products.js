const express = require("express");
const productRouter = express.Router();

// Middleware
const isLoggedInMiddleware = require("../middleware/auth");

const {
  productsListController,
  productCheckout,
  verifyPayment,
} = require("../controller/products");

productRouter.get("/products", productsListController);
productRouter.post("/checkout", isLoggedInMiddleware, productCheckout);
productRouter.post("/verify-payment", verifyPayment);

module.exports = productRouter;
