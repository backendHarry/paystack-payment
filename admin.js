const productsModel = require("./server/models/products");

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

const createProducts = async (productDetails) => {
  try {
    await productsModel.create(productDetails);
  } catch (err) {}
};

createProducts(productDetails);
