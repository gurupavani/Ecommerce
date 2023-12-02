import React from "react";

const InfoSection = ({ data, quantity, setQuantity }) => {
  const sfull = <span className="material-icons"> star </span>;
  const shalf = <span className="material-icons-outlined"> star_half </span>;
  const sempty = <span class="material-icons-outlined">star_outline</span>;

  const numfull = (num, val) => num - val >= 0;
  const numhalf = (num, val) => num - val < 0 && num - val >= -0.8;
  const calculateStars = (num) => (
    <>
      {[...Array(5).keys()].map((i) => {
        return numfull(num, i + 1)
          ? sfull
          : numhalf(num, i + 1)
          ? shalf
          : sempty;
      })}
    </>
  );

  return (
    <div className="d-product-info-section">
      <div className="d-product-info-tpr">
        <div className="d-product-info-t">{data.title}</div>
        <div className="d-product-info-p">₹ {data.price}</div>
        <div className="d-product-item-rating d-rating-avg">
          <span className="material-icons"> star </span>
          <span> {data.rating} </span>
        </div>
      </div>
      <div className="d-product-info-details-section">
        <span className="d-product-info-head">product details</span>
        <div className="d-product-info-details">
          {/* <!-- add all properties here --> */}
          <span>{data.description}</span>
        </div>
      </div>
      <div className="d-product-info-delivery-section">
        <span className="d-product-info-head">delivery details</span>
        <div className="d-product-info-quantity">
          <span>Quantity : </span>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>
        <div className="d-product-info-delivery">Delivered by 12th NOV</div>
      </div>
      <div className="d-product-info-reviews-section">
        <span className="d-product-info-head">reviews and ratings</span>
        <div className="d-product-info-r-total">
          <span>Customer Rating : </span>
          {calculateStars(data.rating)}
          <span>( {data.rating} out of 5 )</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InfoSection;
