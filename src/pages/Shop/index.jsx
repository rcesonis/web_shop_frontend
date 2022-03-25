import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories";

export const Shop = () => {
  const [shopList, setShopList] = useState([]);

  const [filteredShopList, setFilteredShopList] = useState([]);

  return (
    <div className="shop-container">
      <Categories
        setShopList={setShopList}
        setFilteredShopList={setFilteredShopList}
        shopList={shopList}
      />
      <div className="products">
        {!filteredShopList
          ? "loading"
          : filteredShopList.map((listItem) => (
              <div className="cards" key={listItem.id}>
                <Link className="card" to={`/details/${listItem.id}`}>
                  <img alt="img" src={listItem.mainImage} />
                  <div className="title">{listItem.title}</div>
                  <div className="price">Price: {listItem.price}</div>
                  <div className="rating">
                    Customer Rating: {listItem.rating}
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};
