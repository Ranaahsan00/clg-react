import React from "react";
import BannerImg from "../../images/banner.svg";

const Banner = () => {
  return (
    <div>
      <div id="banner" className="banner">
        <div className="banner-area career">
          <img src={BannerImg} alt="banner img" className="banner-img" />
          <div className="container">
            <div className="row">
              <div className="banner-content">
                <h3 className="banner-title">Careers</h3>
                <p className="banner-text d-lg-block d-none">
                  <a href="/">Home</a>{" "}
                  <i className="fa-solid fa-angle-right mx-2"></i>
                  Careers
                </p>
                <p className="banner-text d-lg-none d-block">
                  <a href="/">Home</a> <i className="mx-2">/</i> Careers
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
