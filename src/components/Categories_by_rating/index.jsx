import React from "react";

import "./styles.css";

const CategoriesByRating = () => {
  return (
    <div>
      <h2 className="category-title">Filter By Rating</h2>
      <div className="star-container">
        <div>
          {[...Array(5)].map((star) => {
            return <i class="las la-star"></i>;
          })}
        </div>
        <div>
          {[...Array(4)].map((star) => {
            return <i class="las la-star"></i>;
          })}
        </div>
        <div>
          {[...Array(3)].map((star) => {
            return <i class="las la-star"></i>;
          })}
        </div>
        <div>
          {[...Array(2)].map((star) => {
            return <i class="las la-star"></i>;
          })}
        </div>
        <div>
          {[...Array(1)].map((star) => {
            return <i class="las la-star"></i>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesByRating;
