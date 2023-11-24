import React from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const ProductList = ({ data }) => {
  return (
    <div className="d-products-list row">
      {data.map((item, i) => (
        <div className="col-md-3 col-sm-6 d-product-container" key={i}>
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
            <ProductItem data={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
