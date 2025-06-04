import React from "react";
import Img1 from "../../images/pic1.jpg";

const JoinUs = () => {
  return (
    <div>
      <div id="join-us" className="join-us section px-3 px-sm-0">
        <div className="join-us-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="left-show1 h-100">
                  <div className="d-flex text-lg-start text-center justify-content-center align-items-lg-start align-items-center flex-column left-section h-100">
                    <h2>
                      Join us in making a <br /> difference!
                    </h2>
                    <p className="pt-3">
                      At Consumer Legal Group, we navigate complex legal
                      challenges with
                      <br />
                      confidence and clarity. Join our dynamic and
                      mission-driven law firm as we
                      <br />
                      embark on our journey to assist Americans in fighting
                      their debt and seeking to
                      <br />
                      achieve financial freedom.
                    </p>

                    <a href="">
                      <div className="btn-position d-flex align-items-center justify-content-center">
                        View all open positions
                      </div>
                    </a>
                  </div>
                </div>

                <div className="left-show2 h-100">
                  <div className="d-flex text-lg-start text-center justify-content-center align-items-lg-start align-items-center flex-column left-section h-100">
                    <h2>Join us in making a difference!</h2>
                    <p className="pt-3">
                      At Consumer Legal Group, we navigate complex legal
                      challenges with confidence and clarity. Join our dynamic
                      and mission-driven law firm as we embark on our journey to
                      assist Americans in fighting their debt and seeking to
                      achieve financial freedom.
                    </p>

                    <a href="">
                      <div className="btn-position d-flex align-items-center justify-content-center">
                        View all open positions
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 ps-lg-5">
                <div className="right-section d-flex align-items-lg-start justify-content-lg-start align-items-center justify-content-center">
                  <img src={Img1} className="image-join" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
