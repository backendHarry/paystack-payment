import React, { useState, useEffect } from "react";
import Header from "./components/header";
import HeroImgs from "./components/heroImgs";
import ProductDetail from "./components/productDetail";
import CustomModal from "./components/modal";
import axios from "axios";

function App() {
  // Product info
  // Assuming we have just one product just one product to sell
  const [product, setProduct] = useState({
    name: "",
    price: Number(""),
    images: [],
    // where that is the default image
  });
  useEffect(() => {
    axios.get("/api/v1/products/products").then((result) => {
      let { product } = result.data;
      setProduct(product);
    });
  }, []);

  // NAVBAR FUNCTIONALITY
  const [openNav, setOpenNav] = useState(false); //NavBar
  const navBarOpenFunc = (e) => {
    setOpenNav(!openNav);
  };

  // MODAL FUNCTIONALITY
  const [modalOpen, setModalOpen] = useState(false);
  const setModalOpenFunc = (e) => {
    setModalOpen(!modalOpen);
  };

  // CART FUNCTIONALITY
  const [itemCount, setItemCount] = useState(1);

  const increaseCount = () => {
    setItemCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    if (itemCount > 1) {
      setItemCount((prev) => prev - 1);
    } else {
      setItemCount(1);
    }
  };

  // IN CART FUNCTIONALITY Array
  const [contents, setContents] = useState([]);

  // ADD TO CART FUNCTIONALITY
  const [cartItemDetails, setCartItemDetails] = useState({
    img: null, //'normally null here will be a default icon'
    title: null,
    price: null,
    count: null,
    countPrice: null,
  });
  const addToCartFunc = () => {
    let details = cartItemDetails;
    details["title"] = product.name;
    details["price"] = product.price;
    details["count"] = itemCount;
    details["img"] = product.images[0];
    details["countPrice"] = itemCount * product.price;
    setCartItemDetails(details); //Only for an item in cart

    // UPDATE CART LIST
    let listContents = [...contents];
    listContents.unshift(cartItemDetails);
    setContents(listContents);

    details = {
      img: null,
      title: null,
      price: null,
      count: null,
      countPrice: null,
    };
    // This will update the individual items back after adding them to cart
    setCartItemDetails(details); //UPDATE THE STATE BACK FOR INDEPENDENT CART ITEMS
  };

  return (
    <>
      <div style={{ postion: "relative" }}>
        <div
          style={
            openNav
              ? {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: "2",
                  transition: "0.00001s linear z-index",
                }
              : { backgroundColor: "rgb(255, 255, 255)", zIndex: "-5" }
          }
        ></div>
        <Header
          openNav={openNav}
          navBarOpenFunc={navBarOpenFunc}
          setModalOpenFunc={setModalOpenFunc}
          contents={contents}
        />
        <CustomModal modalOpen={modalOpen} contents={contents} />
        <div className="product-section">
          {product.images && <HeroImgs images={product.images} />}
          <ProductDetail
            increaseCount={increaseCount}
            itemCount={itemCount}
            decreaseCount={decreaseCount}
            name={product.name}
            price={product.price}
            addToCartFunc={addToCartFunc}
          />
        </div>
      </div>
    </>
  );
}

export default App;
