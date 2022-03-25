import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-links">
        <h1>WORK IN PROGRESS</h1>
        <p>This page doesn't exist!</p>
        <p>
          Please navigate to our{" "}
          <Link
            to={{
              pathname: "/shop",
            }}
          >
            SHOP PAGE
          </Link>
        </p>
      </div>
    </div>
  );
};
