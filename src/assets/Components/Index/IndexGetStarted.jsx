import React from "react";
import GetStarted from "../../images/get-started.png";
import Step from "../../lottie/step.json";

const IndexGetStarted = () => {
  return (
    <div>
      {/* <!-- Get Started Section Start --> */}
      <div id="get-started" className="get-started section overflow-x-hidden">
        <div className="get-started-area">
          <div className="container">
            <div className="section-top-title-box text-black">
              <h2 className="section-title">Get Started</h2>
              <p className="section-text">You can do it in 3 simple steps.</p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="get-started-img">
                  <img
                    src={GetStarted}
                    className="img-fluid"
                    alt="get started"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="get-started-animation">
                  <lottie-player
                    src={Step}
                    background="transparent"
                    speed="1"
                    autoplay
                  ></lottie-player>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Get Started Section End --> */}
    </div>
  );
};

export default IndexGetStarted;
