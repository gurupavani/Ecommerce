import React, { useState } from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

const SingleProduct = ({ data }) => {
  const [quantity,setQuantity]=useState(1)
  return (
    <div className="main-body d-product-body container-md">
      {data && (
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <ImageSection data={data} quantity={quantity}/>
          </div>
          <div className="col-md-7 col-sm-12">
            <InfoSection data={data} quantity={quantity} setQuantity={setQuantity}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
