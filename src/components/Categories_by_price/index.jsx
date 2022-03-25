import React from "react";
import { useEffect, useState } from "react";

import "./styles.css";

const CategoriesByPrice = ({ setFilteredShopList, shopList }) => {
  const [checked, setChecked] = useState(false);

  const onChecked = () => {
    setChecked(!checked);
  };

  const filterProducts = () => {
    return shopList.filter(
      (product) => !checked || (product.price > 0 && product.price <= 150)
    );
  };

  useEffect(() => {
    setFilteredShopList(filterProducts());
  }, [shopList, checked]);

  return (
    <div className="categories-by-price single-filter-checkbox">
      <label>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={() => onChecked()}
        />
        <span>€0.00 - €150.00</span>
      </label>
    </div>
  );
};

export default CategoriesByPrice;
