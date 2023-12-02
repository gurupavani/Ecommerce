import React, { useState } from "react";
import { useUpdateCart } from "../../context/CartContext";

const CartItem = ({ data }) => {
  const updateCart = useUpdateCart();
  const updateCartItem = (e) => {
    const item = { ...data, quantity: +e.target.value };
    updateCart(item, "update");
  };

  const deleteCartItem = () => updateCart(data, "delete");
  return (
    <div className="d-cart-item">
      <div className="d-cart-item-img-container">
        <img src={data.thumbnail} alt="imagename" className="d-cart-item-img" />
      </div>
      <div className="d-cart-item-details-container">
        <div className="d-cart-item-title" onclick="getProductPage()">
          {data.title}
        </div>
        <span className="d-cart-item-price">₹ {data.price}</span>
        <div className="d-cart-item-qd">
          <span>Quantity : </span>
          <input
            type="number"
            className="d-cart-item-q"
            value={data.quantity}
            onChange={updateCartItem}
          />
          <span className="material-icons" onClick={deleteCartItem}>
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
