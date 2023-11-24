import React from "react";
import CartItem from "./CartItem";

const CartList = ({ data }) => {
  return (
    <div className="d-cart-list">
      {data.map((item, i) => (
        <CartItem data={item} key={i} />
      ))}
    </div>
  );
};

export default CartList;
