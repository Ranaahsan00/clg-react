import React from "react";
import Img1 from "../../images/pic7.jpg";

const EqualOpportunity = () => {
  return (
    <div>
      <div
        id="equal-opportunity"
        className="equal-opportunity section px-3 px-sm-0"
      >
        <div className="equal-opportunity-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pe-lg-5 order-lg-1 order-2">
                <div className="right-section d-flex align-items-center justify-content-center h-100 order-lg-1 order-2">
                  <img src={Img1} className="work-image" alt="" />
                </div>
              </div>

              <div className="col-lg-6 order-lg-2 order-1 mb-5 mb-lg-0">
                <div className="d-flex text-lg-start text-center justify-content-center align-items-lg-start align-items-center flex-column left-section h-100 order-lg-2 order-1">
                  <h2>
                    Consumer Legal Group is an Equal Opportunity Employer.
                  </h2>
                  <p>
                    We’re committed to creating a diverse and inclusive
                    workplace. All qualified applicants will receive
                    consideration for employment without regard to race, color,
                    religion, gender, sexual orientation, national origin,
                    disability, or veteran status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EqualOpportunity;
