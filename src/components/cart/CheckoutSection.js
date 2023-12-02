import React from "react";

const CheckoutSection = ({ data }) => {
  return (
    <div className="d-cart-checkout-section">
      <div className="d-cart-heading">checkout</div>
      <div className="d-cart-checkout-subtotal">
        <span>Total ({data.count} items) : </span>
        <span>₹ {data.total}</span>
      </div>
      <button className="d-product-cb-btn">
        <span className="material-icons"> shopping_bag </span>buy now
      </button>
    </div>
  );
};

export default CheckoutSection;
