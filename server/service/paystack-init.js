const axios = require("axios");
require("dotenv").config({ path: "config.env" });

const paystackInitialization = async (email, amount) => {
  const ApiUrl = "https://api.paystack.co/transaction/initialize";
  const data = {
    email,
    amount,
    callback_url: "http://127.0.0.1:3000/transaction/success",
  };
  const headers = {
    "content-type": "application/json",
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  };
  const response = await axios.post(ApiUrl, data, { headers: headers });
  return response;
};

const paystackVerify = async (ref) => {
  const ApiUrl = `https://api.paystack.co/transaction/verify/${ref}`;
  const headers = {
    "content-type": "Application/json",
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  };
  const response = await axios.get(ApiUrl, { headers: headers });
  return response;
};

module.exports = {
  paystackInitialization,
  paystackVerify,
};
