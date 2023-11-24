import React from "react";
import ProductFilters from "../../components/home/ProductFilters";
import ProductList from "../../components/home/ProductList";
import "../../components/home/products.css";
import { useGetProducts } from "../../hooks/products/useGetProducts";

const Home = () => {
  const [data, getData] = useGetProducts();
  

  
  return (
    <div className="container-md d-ft-list-section">
      {/* <ProductFilters /> */}
      <ProductList data={data} />
    </div>
  );
};

export default Home;
