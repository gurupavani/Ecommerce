import React from "react";

const InfoSection = ({ data }) => {
  return (
    <div className="d-product-info-section">
      <div className="d-product-info-tpr">
        <div className="d-product-info-t">Eau De Perfume Spray</div>
        <div className="d-product-info-p">₹ 800</div>
        <div className="d-product-item-rating d-rating-avg">
          <span className="material-icons"> star </span>
          <span> 4.44 </span>
        </div>
      </div>
      <div className="d-product-info-details-section">
        <span className="d-product-info-head">product details</span>
        <div className="d-product-info-details">
          {/* <!-- add all properties here --> */}
          <span>
            Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High
            Quality.Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen
            High Quality.Genuine Al-Rehab spray perfume from UAE/Saudi
            Arabia/Yemen High Quality
          </span>
        </div>
      </div>
      <div className="d-product-info-delivery-section">
        <span className="d-product-info-head">delivery details</span>
        <div className="d-product-info-quantity">
          <span>Quantity : </span>
          <input type="number" value="1" />
        </div>
        <div className="d-product-info-delivery">Delivered by 12th NOV</div>
      </div>
      <div className="d-product-info-reviews-section">
        <span className="d-product-info-head">reviews and ratings</span>
        <div className="d-product-info-r-total">
          <span>Customer Rating : </span>
          <span className="material-icons"> star </span>
          <span className="material-icons"> star </span>
          <span className="material-icons"> star </span>
          <span className="material-icons"> star </span>
          <span className="material-icons-outlined"> star_half </span>
          <span>( 4.4 out of 5 )</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InfoSection;
