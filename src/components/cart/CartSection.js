import React from "react";
import CartTotal from "./CartTotal";
import CartList from "./CartList";

const CartSection = () => {
  return (
    <div className="d-cart-list-section">
      <div className="d-cart-heading">Shopping Cart</div>
      <CartList data={[1, 2, 3, 4, 5]} />
      <CartTotal />
    </div>
  );
};

export default CartSection;
