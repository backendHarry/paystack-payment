const productsModel = require("./server/models/products");
const Users = require("./server/models/user");
const bcrypt = require("bcrypt");

let productDetails = {
  name: "fall limited edition sneakers",
  price: 125.0,
  images: [
    "imagesFolder/image-product-1.jpg",
    "imagesFolder/image-product-2.jpg",
    "imagesFolder/image-product-3.jpg",
    "imagesFolder/image-product-4.jpg",
  ],
};

let userInfo = {
  username: "fakeAdmin",
  password: "admin123",
};

const createInfo = async (userInfo, productDetails) => {
  try {
    userInfo.password = await bcrypt.hash(userInfo.password, 10);
    await Users.create(userInfo);
    await productsModel.create(productDetails);
  } catch (err) {}
};

createInfo(userInfo, productDetails);
