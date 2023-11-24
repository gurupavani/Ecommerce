import React from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

const SingleProduct = ({ data }) => {
  return (
    <div className="main-body d-product-body container-md">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <ImageSection />
        </div>
        <div className="col-md-7 col-sm-12">
          <InfoSection />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
