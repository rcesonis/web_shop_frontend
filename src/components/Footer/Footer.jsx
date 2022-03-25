import "./Footer.scss";
import React from "react";
import logo2 from "../../styles/logo2.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img className="logo-footer" src={logo2} />
      </div>
      <div>
        <p>Copyright 2022</p>
      </div>
      <div>
        <i className="lab la-facebook social-icon"></i>
        <i className="lab la-instagram social-icon"></i>
        <i className="lab la-instagram social-icon"></i>
      </div>
    </div>
  );
};
