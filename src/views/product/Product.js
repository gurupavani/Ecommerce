import React from "react";
import { useGetSingleProduct } from "../../hooks/singleProduct/useGetSingleProduct";
import "../../components/product/s_product.css";
import SingleProduct from "../../components/product/SingleProduct";

const Product = () => {
  const [data, getData] = useGetSingleProduct();
  return <SingleProduct data={data}/>;
};

export default Product;
