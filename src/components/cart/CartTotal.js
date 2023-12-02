import React from "react";

const CartTotal = ({ data }) => {
  return (
    <div className="d-cart-subtotal">
      <span>Total </span>
      <span>({data.count} items) : </span>
      <span>₹ {data.total}</span>
    </div>
  );
};

export default CartTotal;
