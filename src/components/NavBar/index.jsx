import React, { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo2 from "../../styles/logo2.png";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo2} />
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="hamburger nav-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          className={`${
            showMenu ? "show-container links-container" : "links-container"
          }`}
        >
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/">
                <i className="las la-user"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="las la-heart"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="las la-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
