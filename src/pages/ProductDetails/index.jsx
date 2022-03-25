import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "./styles.scss";
import { Footer } from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [product, setProduct] = useState();
  const route_parameters = useParams();

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:4000/products/${route_parameters.id}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-detail-container">
      <div className="product-container">
        <div className="product-photo-container">
          <div className="large-photo">
            {!product ? (
              "loading"
            ) : (
              <img className="" src={product.mainImage} alt="" />
            )}
          </div>
        </div>
        <div className="product-details-container">
          <div className="product-title">
            {!product ? "loading" : <h3>{product.title}</h3>}
          </div>
          <div className="add-rewiev-container">
            <div className="star-icons">
              {!product
                ? "loading"
                : [...Array(Math.round(product.rating))].map((star) => {
                    return <i class="las la-star"></i>;
                  })}
            </div>
            <div className="review-count">
              <p>(22)</p>
            </div>

            <button className="add-review-button">Add review</button>
          </div>
          <div className="price-container">
            {!product ? "loading" : <p>{product.price}$</p>}
          </div>
          <div className="product-description-container">
            {!product ? "loading" : <p>{product.description}$</p>}
          </div>
          <div className="add-to-cart-container">
            <button className="add-to-cart-button">
              <i className="las la-shopping-cart"></i>Add to cart
            </button>
            <button className="add-to-favorite-button">
              <i className="las la-heart"></i>Favorite
            </button>
          </div>
          <div className="product-detail-categories-container">
            <p>
              Categories:
              <span>
                {!product ? "loading" : <p>{product?.category?.title}</p>}
              </span>
            </p>
          </div>
          <div className="product-share-container">
            <p>
              Share:
              <i className="lab la-facebook social-icon"></i>
              <i className="lab la-instagram social-icon"></i>
              <i className="lab la-instagram social-icon"></i>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
