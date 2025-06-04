import React from "react";
import BannerImg from "../../images/banner.svg";

const Banner = () => {
  return (
    <div>
      <div id="banner" className="banner">
        <div className="banner-area">
          <img src={BannerImg} alt="banner img" className="banner-img" />
          <div className="container">
            <div className="row">
              <div className="banner-content">
                <h3 className="banner-title">Contact Us</h3>
                <p className="banner-text">
                  Feel free to get in touch with us for any inquiries or
                  support. We're here to help and look forward to assisting you
                  with any questions or concerns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
