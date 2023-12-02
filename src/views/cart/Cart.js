import React from "react";
import CartSection from "../../components/cart/CartSection";
import CheckoutSection from "../../components/cart/CheckoutSection";
import "../../components/cart/cart.css";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const cart = useCart();
  return (
    <div className="container-md">
      {cart && cart.count && cart.count > 0 ? (
        <div className="row">
          {/*  cart items */}
          <div className="col-md-8 col-sm-12">
            <CartSection data={cart} />
          </div>
          {/* checkout section*/}
          <div className="col-md-4 col-sm-12">
            <CheckoutSection data={cart} />
          </div>
        </div>
      ) : (
        <div>No items in cart continue shopping</div>
      )}
    </div>
  );
};

export default Cart;
