import React from "react";

const ImageSection = ({ data }) => {
  return (
    <div className="d-product-img-cb-section">
      <div className="d-product-img-section">
        <img
          src="https://i.dummyjson.com/data/products/15/thumbnail.jpg"
          alt=""
          className="d-product-img"
        />
      </div>
      <div className="d-product-cb-section">
        <button className="d-product-cb-btn" onclick="getCartPage()">
          <span className="material-icons"> shopping_cart </span>Add to Cart
        </button>
        <button className="d-product-cb-btn">
          <span className="material-icons"> shopping_bag </span>Buy Now
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
