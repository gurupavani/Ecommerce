import React from "react";

const CartItem = ({data}) => {
  return (
    <div className="d-cart-item">
      <div className="d-cart-item-img-container">
        <img
          src="https://i.dummyjson.com/data/products/4/thumbnail.jpg"
          alt="imagename"
          className="d-cart-item-img"
        />
      </div>
      <div className="d-cart-item-details-container">
        <div className="d-cart-item-title" onclick="getProductPage()">
          RATAN Women’s Georgette Flared Freesize Sharara Palazzo Pant with
          Lining (Beige) -Free Size
        </div>
        <span className="d-cart-item-price">₹ 800</span>
        <div className="d-cart-item-qd">
          <span>Quantity : </span>
          <input type="number" className="d-cart-item-q" value="1" />
          <span className="material-icons"> delete </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
