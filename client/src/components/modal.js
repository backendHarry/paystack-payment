import React, { useState } from "react";
import deleteIcon from "../images/icon-delete.svg";
import "../css/modal.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CustomModal = ({ modalOpen, contents }) => {
  const history = useHistory();
  const submitCheckoutData = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/products/checkout", contents)
      .then((response) => {
        const { data } = response;
        if (data.redirect) {
          history.push(data.redirectUrl);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {modalOpen ? (
        <div className="modal">
          <div className="modal-title">
            <h1>Cart</h1>
          </div>
          <div className="modal-content">
            {contents.length !== 0 ? (
              contents.map((item, id) => (
                <div className="item" key={id}>
                  <img src={item.img} alt="img" />
                  <div className="amount-and-product-name">
                    <h3>{item.title}</h3>
                    <h4>
                      ${item.price} x {`${item.count} `}
                      <span className="total-amount">
                        ${item.price * item.count}
                      </span>
                    </h4>
                  </div>
                  <img
                    src={deleteIcon}
                    alt="delete-icon"
                    className="delete-icon"
                  />
                </div>
              ))
            ) : (
              <h2 className="no-item-in-cart">Your Cart is empty</h2>
            )}
          </div>
          {contents.length === 0 ? (
            ""
          ) : (
            <button onClick={submitCheckoutData}>checkout</button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomModal;
