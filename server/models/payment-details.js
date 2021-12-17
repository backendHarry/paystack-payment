const { Schema, model } = require("mongoose");

// console.log(reference, amount, paid_at, channel, currency, ip_address);

const paymentDetails = new Schema({
  reference: String,
  amount: Number,
  paid_at: Date,
  channel: String,
  currency: String,
  ip_address: String,
});

const paymentDetailsModel = model("paymentDetails", paymentDetails);

module.exports = paymentDetailsModel;
