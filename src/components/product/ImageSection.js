import React from "react";
import { useUpdateCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const ImageSection = ({ data, quantity }) => {
  const updateCart = useUpdateCart();
  const navigate = useNavigate();

  const addCartItem = () => {
    const item = { ...data, quantity };
    updateCart(item, "add");
    navigate("/cart");
  };

  return (
    <div className="d-product-img-cb-section">
      <div className="d-product-img-section">
        <img src={data.thumbnail} alt={data.title} className="d-product-img" />
      </div>
      <div className="d-product-cb-section">
        <button className="d-product-cb-btn" onClick={addCartItem}>
          <span className="material-icons"> shopping_cart </span>Add to Cart
        </button>
        <button className="d-product-cb-btn" onClick={addCartItem}>
          <span className="material-icons"> shopping_bag </span>Buy Now
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
