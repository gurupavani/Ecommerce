import React from "react";

const CheckoutSection = () => {
  return (
    <div className="d-cart-checkout-section">
      <div className="d-cart-heading">checkout</div>
      <div className="d-cart-checkout-subtotal">
        <span>Total (2 items) : </span>
        <span>₹ 2540.76</span>
      </div>
      <button className="d-product-cb-btn">
        <span className="material-icons"> shopping_bag </span>buy now
      </button>
    </div>
  );
};

export default CheckoutSection;
