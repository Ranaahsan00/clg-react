import React from "react";
import Img1 from "../../images/pic4.jpg";
import Img2 from "../../images/pic6.jpg";

const Opportunities = () => {
  return (
    <div>
      <div
        id="explore-opportunities"
        className="explore-opportunities section px-3 px-sm-0"
      >
        <div className="explore-opportunities-area">
          <div className="container">
            <div className="row d-flex text-lg-start text-center justify-content-lg-between left-section pb-lg-5 pb-4">
              <div className="col-lg-6">
                <div className="d-lg-block d-none">
                  <h2 className="m-0">Explore</h2>
                  <h2>Opportunities</h2>
                </div>
                <div className="d-lg-none d-block">
                  <h2>Explore Opportunities</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <p>
                    At Consumer Legal Group, our success starts with you. We’re
                    continuously in search of talented individuals to join our
                    team. We offer a breadth of opportunities within our various
                    departments and experience levels.
                  </p>
                  <p className="mt-3">We hope to hear from you!</p>
                </div>
              </div>
            </div>
            <div className="row mt-lg-4">
              <div className="col-lg-7 pe-lg-3">
                <div className="right-section">
                  <img src={Img1} className="image-explore-section" alt="" />
                </div>
              </div>

              <div className="col-lg-5 ps-lg-3 mt-lg-0 mt-4">
                <div className="right-section">
                  <img src={Img2} className="image-explore-section" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
