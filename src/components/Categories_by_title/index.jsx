import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./styles.css";

const CategoriesByTitle = ({ setShopList }) => {
  const [categories, setCategories] = useState();
  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const categoryList = async () => {
    const response = await axios.get("http://localhost:4000/categories/");
    setCategories(response.data);
  };

  const filteredCategories = async (id) => {
    setChecked({
      ...checked,
      [id]: !checked[id],
    });
  };

  const fetch = async () => {
    let products = [];
    for (const entry of Object.entries(checked)) {
      if (entry[1]) {
        const response = await axios.get(
          `http://localhost:4000/categories/${entry[0]}`
        );
        products = [...products, ...response.data];
      }
    }

    if (products.length === 0) {
      const response = await axios.get("http://localhost:4000/products");
      products = response.data;
    }

    setShopList([...products]);
  };

  useEffect(() => {
    fetch();
  }, [checked]);

  useEffect(() => {
    categoryList();
  }, []);

  return (
    <div className="categories-by-title">
      <h2 className="category-title">Categories</h2>
      {!categories
        ? "loading"
        : categories.map((category) => (
            <div className="single-filter-checkbox" key={category.id}>
              <input
                value={category.title}
                type={"checkbox"}
                checked={checked[category.id]}
                onChange={() => filteredCategories(category.id)}
              />
              <span>{category.title}</span>
            </div>
          ))}
    </div>
  );
};

export default CategoriesByTitle;
