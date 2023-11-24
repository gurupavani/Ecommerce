import React from "react";
import { Navigate } from "react-router-dom";

const ProductItem = ({ data }) => {

  return (
    <div className="d-product-item" >
      <div className="d-product-item-img-container">
        <img
          src={data.thumbnail}
          alt=""
          className="d-product-item-img"
        />
      </div>
      <div className="d-product-item-info-container">
        <div className="d-product-item-title">{data.title}</div>
        <p className="d-product-item-description">
          {data.description}
        </p>
        <div className="d-product-item-pr-container">
          <span className="d-product-item-price">₹ {data.price}</span>
          <div className="d-product-item-rating d-rating-good">
            <span className="material-icons"> star </span>
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
