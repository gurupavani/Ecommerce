import React from "react";
import CartTotal from "./CartTotal";
import CartList from "./CartList";

const CartSection = ({data}) => {
  return (
    <div className="d-cart-list-section">
      <div className="d-cart-heading">Shopping Cart</div>
      <CartList data={data.data} />
      <CartTotal data={data}/>
    </div>
  );
};

export default CartSection;
