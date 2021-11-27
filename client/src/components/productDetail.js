import React, { useState } from "react";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";
import iconCart from "../images/icon-cart.svg";

const ProductDetail = ({
  itemCount,
  increaseCount,
  decreaseCount,
  name,
  price,
  addToCartFunc,
}) => {
  return (
    <div className="product">
      <div className="product-details">
        <h1 className="product-title">Sneaker company</h1>
        <h1 className="product-descr-title">{name}</h1>
        <p className="product-descr">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="pricing-and-discount">
        <div className="price-discount">
          <h1>${price}</h1>
          <h4>50%</h4>
        </div>
        <div className="old-price">
          <h3>$250.00</h3>
        </div>
      </div>
      <div className="cart-count-add-to-cart">
        <div className="cart-count">
          <div className="minus" onClick={decreaseCount}>
            <img src={iconMinus} alt="icon-minus" />
          </div>
          <div className="count">
            <h1>{itemCount}</h1>
          </div>
          <div className="plus" onClick={increaseCount}>
            <img src={iconPlus} alt="icon-plus" />
          </div>
        </div>
        <div className="add-to-cart">
          <button onClick={addToCartFunc}>
            <img src={iconCart} alt="cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
