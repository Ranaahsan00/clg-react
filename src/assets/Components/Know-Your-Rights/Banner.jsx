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
                <h3 className="banner-title">Know Your Rights</h3>
                <p className="banner-text">
                  Empowering you with debt resolution insights
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
