import React from "react";

const ProfileSection = () => {
  return (
    <div className="d-profile-section">
      <div className="d-profile-heading">Profile</div>
      <div className="d-profile-img-container">
        <img
          src="https://i.dummyjson.com/data/products/7/thumbnail.jpg"
          alt="avatar"
          className="d-profile-img"
        />
      </div>
      <div className="d-profile-info-container">
        <div className="d-profile-info-item">
          <span>Name:</span>
          <input value="John smirk" />
        </div>
        <div className="d-profile-info-item">
          <span>Email:</span>
          <input value="johnsmirk@gmail.com" />
        </div>
        <div className="d-profile-info-item">
          <span>Phone Number:</span>
          <input type="number" value="8765679067" />
        </div>
        <div className="d-profile-info-item">
          <span>Password:</span>
          <input type="password" value="123456" />
        </div>
      </div>
      <div>
        <button className="d-product-cb-btn">Save</button>
      </div>
    </div>
  );
};

export default ProfileSection;
