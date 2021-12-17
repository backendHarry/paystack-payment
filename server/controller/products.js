const productsModel = require("../models/products");
const paymentDetails = require("../models/payment-details");
const paystack = require("../service/paystack-init.js");

const productsListController = async (req, res, next) => {
  try {
    const product = await productsModel.findOne();
    res.json({ product: product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const productCheckout = async (req, res, next) => {
  try {
    const email = req.session.email;
    let totalPrice = 0;
    let productData = req.body;
    productData.forEach((item) => {
      totalPrice += item.countPrice;
    });
    req.session.products = productData;
    const amount = totalPrice * 100;
    const { data } = await paystack.paystackInitialization(email, amount);
    // GET THE CHECKOUT URL FROM PAYSTACK
    const redirectUrl = data.data.authorization_url;
    res.json(redirectUrl);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const verifyPayment = async (req, res, next) => {
  try {
    const { ref } = req.body;
    const result = await paystack.paystackVerify(ref);
    const { data } = result;
    const { reference, amount, paid_at, channel, currency, ip_address } =
      data.data;
    await paymentDetails.create({
      reference,
      amount,
      paid_at,
      channel,
      currency,
      ip_address,
    });
    res.json({ status: data.status, message: data.message });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  productsListController,
  productCheckout,
  verifyPayment,
};
