import React from "react";
import CartSection from "../../components/cart/CartSection";
import CheckoutSection from "../../components/cart/CheckoutSection";
import "../../components/cart/cart.css";

const Cart = () => {
  return (
    <div className="container-md">
      <div className="row">
        {/*  cart items */}
        <div className="col-md-8 col-sm-12">
          <CartSection />
        </div>
        {/* checkout section*/}
        <div className="col-md-4 col-sm-12">
          <CheckoutSection />
        </div>
      </div>
    </div>
  );
};

export default Cart;
