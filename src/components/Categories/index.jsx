import React from "react";
import CategoriesByTitle from "../Categories_by_title";
import CategoriesByPrice from "../Categories_by_price";
import CategoriesByRating from "../Categories_by_rating";

import "./styles.css";

const Categories = (props) => {
  return (
    <div className="categories-container">
      <CategoriesByTitle setShopList={props.setShopList} />
      <CategoriesByPrice
        setFilteredShopList={props.setFilteredShopList}
        shopList={props.shopList}
      />
      <CategoriesByRating setShopList={props.setShopList} />
    </div>
  );
};

export default Categories;
