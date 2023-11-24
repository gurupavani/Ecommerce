import React from "react";

const CartTotal = ({ data }) => {
  return (
    <div className="d-cart-subtotal">
      <span>Total </span>
      <span>(2 items) : </span>
      <span>₹ 2540.76</span>
    </div>
  );
};

export default CartTotal;
