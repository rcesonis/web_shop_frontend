import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo2 from "../../styles/logo2.png";

export const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <img className="logo" src={logo2} />
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <input type="search" id="site-search"></input>
        </div>
        <div className="menu-icons">
          <Link to="/">
            <i className="las la-user"></i>
          </Link>
          <Link to="/">
            <i className="las la-heart"></i>
          </Link>
          <Link to="/">
            <i className="las la-shopping-cart"></i>
          </Link>
        </div>
        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
