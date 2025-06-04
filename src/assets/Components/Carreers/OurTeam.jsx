import React from "react";

const OurTeam = () => {
  return (
    <div>
      <div id="our-team" className="our-team section px-3 px-sm-0">
        <div className="our-team-area">
          <div className="container">
            <div className="col-md-6 mx-auto">
              <div className="d-flex text-center justify-content-center align-items-center flex-column left-section h-100">
                <h2>Our Team</h2>
                <p>
                  Since our founding in 2022, Consumer Legal Group has grown
                  significantly to a team of more than 125 employees.
                </p>
              </div>
            </div>
            <div className="right-section mt-5">
              <h3 className="text-center">Executive Team</h3>
              <div className="row mt-4 justify-content-center">
                <div className="col-lg-3 col-md-6 mb-sm-5 mb-4">
                  <div className="text-center">
                    {/* <!-- Leadership photo removed --> */}
                    <h4 className="mt-3">Jack Gross, Esq.</h4>
                    <p>Co-Managing Attorney</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-sm-5 mb-4">
                  <div className="text-center">
                    {/* <!-- Leadership photo removed --> */}
                    <h4 className="mt-3">Jason Rebhun. Esq.</h4>
                    <p>Co-Managing Attorney</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-sm-5 mb-4">
                  <div className="text-center">
                    {/* <!-- Leadership photo removed --> */}
                    <h4 className="mt-3">Daniel Warshaw</h4>
                    <p>Chief Operating Officer</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-sm-5 mb-4">
                  <div className="text-center">
                    {/* <!-- Leadership photo removed --> */}
                    <h4 className="mt-3">Zulma Lyman</h4>
                    <p>Chief Human Resources Officer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section mt-sm-5">
              <h3 className="text-center">Senior Leadership Team</h3>
              <div className="row mt-4 justify-content-center">
                <div className="col-lg-3 col-md-6 mb-sm-0 mb-4">
                  <div className="text-center">
                    {/* <!-- Leadership photo removed --> */}
                    <h4 className="mt-3">Ashleigh Barrett</h4>
                    <p>Director, Client Services</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-sm-0 mb-4">
                  <div className="text-center">
                    {/* <!-- Leadership photo removed --> */}
                    <h4 className="mt-3">Sonakshi Faujdar</h4>
                    <p>Director, Client Services</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-sm-0 mb-4">
                  <div className="text-center">
                    {/* <!-- Leadership photo removed --> */}
                    <h4 className="mt-3">Benjamin Ozur</h4>
                    <p>Attorney</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
