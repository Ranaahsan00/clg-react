import React from "react";
import AboutImg from "../../images/circle.png";

const IndexAbout = () => {
  return (
    <div>
      {/* <!-- ABOUT SECTION --> */}
      <div id="about-sec" className="set-main-about-sec overflow-x-hidden">
        <div className="get-started-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mt-5">
                <div>
                  <img
                    src={AboutImg}
                    className="img-fluid rounded-4"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-5">
                <div className="text-start">
                  <div className="section-top-title-box text-black">
                    <h2 className="section-title">About Us</h2>
                    <p className="">
                      At Consumer Legal Group, we are dedicated to helping
                      individuals achieve financial stability by addressing
                      their consumer debt challenges with expertise and
                      compassion. Founded with a clear mission, our goal is to
                      provide tailored and affordable legal solutions that
                      empower our clients to take control of their financial
                      future.
                    </p>{" "}
                    <br />
                    <p className="m-0">
                      We specialize in consumer debt relief and resolution,
                      through debt validation and legal representation for
                      individuals facing financial hardship.
                    </p>
                    <br />
                    <p className="m-0">
                      Our skilled legal team works diligently to negotiate and
                      settle with creditors, resolve disputes, and create
                      personalized strategies to help you regain financial
                      freedom. From sending Credit Bureau Dispute Letters to
                      advocating in court, our approach is comprehensive and
                      client-focused and we aim to make navigating complex legal
                      and financial matters as seamless as possible for our
                      clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END ABOUT SECTION --> */}
    </div>
  );
};

export default IndexAbout;
