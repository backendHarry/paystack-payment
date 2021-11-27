import React from "react";
import iconMenu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import closeNav from "../images/icon-close.svg";
import profilePicture from "../images/image-avatar.png";
import "../css/header.css"; //css

const Header = ({ navBarOpenFunc, openNav, setModalOpenFunc, contents }) => {
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="nav-mobile-btn">
          <img src={iconMenu} alt="iconMenu" onClick={navBarOpenFunc} />
        </div>
        <div className="logo">
          <img src={logo} alt="iconMenu" />
        </div>
        <div
          className="nav"
          style={
            openNav
              ? {
                  left: "0rem",
                  backgroundColor: "rgb(255, 255, 255)",
                }
              : { left: "-25rem" }
          }
        >
          <img src={closeNav} alt="close" onClick={navBarOpenFunc} />
          <ul>
            <li>
              <button>Collections</button>
            </li>
            <li>
              <button>Men</button>
            </li>
            <li>
              <button>Women</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-and-cart">
        <div className="cart">
          <span className="cart-icon">
            <h3 className="items-count">{contents.length}</h3>
            <img src={cart} alt="cart" onClick={setModalOpenFunc} />
          </span>
        </div>
        <div className="profile-picture">
          <img src={profilePicture} alt="profile-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
