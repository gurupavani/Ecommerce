import React from "react";
import "./main.css";

const Navigation = ({ children }) => {
  return (
    <div className="main">
      {/* <!-- header start --> */}
      <div className="main-header">
        {/* <!-- show left logo, right cart,profile --> */}
        {/* <!-- logo --> */}
        <div className="main-top-header">
          <div className="main-logo" onclick="getHomePage()">
            {/* <!-- <img
                src="/assets/logos/main-logo-f.png"
                alt="Deal"
                className="main-logo-image"
              /> --> */}
            <span className="main-logo-title">Deal</span>
          </div>
          <div className="main-nav">
            {/* <!-- search bar for large screens --> */}
            <div className="lg-search main-search">
              <input placeholder="search" />
            </div>
            {/* <!-- icons for navigation --> */}
            <div className="main-menu">
              <div className="main-menu-item">
                <span className="material-icons"> shopping_cart </span>
              </div>
              {/* <!-- main-menu-selected --> */}
              <div className="main-menu-item">
                <span className="material-icons"> account_circle </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- category menu --> */}
        <div className="category-lg-menu">
          <div className="category-lg-menu-item">skincare</div>
          <div className="category-lg-menu-item">women</div>
          <div className="category-lg-menu-item">men</div>
          <div className="category-lg-menu-item">furniture</div>
          <div className="category-lg-menu-item">groceries</div>
          <div className="category-lg-menu-item">shoes</div>
          <div className="category-lg-menu-item">jewellery</div>
        </div>
        {/* <!-- search bar for small screens --> */}

        <div className="sm-search main-search">
          <input placeholder="search" />
        </div>
      </div>
      {/* <!-- header end --> */}

      {/* <!-- main start --> */}
      <div className="main-body">{children}</div>
      {/* <!-- main end --> */}

      {/* <!-- footer start --> */}
      <div className="main-footer">
        {/* <!-- name and other imortant links --> */}
        <span>Important Links</span>
        <div className="main-footer-links">
          <span>Home</span>
          <span>Cart</span>
          <span>Profile</span>
        </div>
      </div>
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Navigation;
