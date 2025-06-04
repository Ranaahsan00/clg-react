import React from "react";
import Img1 from "../../images/pic5.jpg";

const OurDepartment = () => {
  return (
    <div>
      <div
        id="our-departments"
        className="our-departments section px-3 px-sm-0"
      >
        <div className="our-departments-area">
          <div className="container">
            <div className="row pb-lg-4">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="d-flex justify-content-center align-items-start flex-column left-section h-100">
                  <h2>Our Departments</h2>
                  <ul className="ps-4" style={{ listStyleType: "disc" }}>
                    <li>Legal</li>
                    <li>Client Services</li>
                    <li>Human Resources</li>
                    <li>Marketing</li>
                    <li>Accounting</li>
                    <li>Information Technology</li>
                  </ul>
                  <p className="mt-3">
                    We believe that taking care of our team helps them take care
                    of our clients. Our comprehensive benefits include:
                  </p>
                </div>
              </div>

              <div className="col-lg-6 ps-lg-5">
                <div className="right-section d-flex align-items-lg-start justify-content-lg-start align-items-center justify-content-center">
                  <img
                    src={Img1}
                    className="image-department"
                    alt="Department"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              {/* Health Benefits */}
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <h3>Health Benefits</h3>
                    <ul className="ps-4" style={{ listStyleType: "disc" }}>
                      <li>Medical (EPO, PPO, FSA)</li>
                      <li>Dental</li>
                      <li>Vision</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Wellness */}
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <h3>Financial Wellness</h3>
                    <ul className="ps-4" style={{ listStyleType: "disc" }}>
                      <li>Competitive salaries</li>
                      <li>401k</li>
                      <li>Life Insurance</li>
                      <li>Short-term and long-term disability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Personal Wellness */}
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <h3>Personal Wellness</h3>
                    <ul className="ps-4" style={{ listStyleType: "disc" }}>
                      <li>Vacation, Sick Days, and Floating holidays</li>
                      <li>Paid Company Holidays</li>
                      <li>
                        Employee Assistance Program with access to free
                        confidential counseling
                      </li>
                      {/* <li>Floating holidays</li> */}
                    </ul>
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

export default OurDepartment;
