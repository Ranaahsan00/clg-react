import React from "react";
import Img1 from "../../images/blog-1.png";
import Img2 from "../../images/blog-2.png";
import Img3 from "../../images/blog-3.png";
import Img4 from "../../images/blog-4.png";
import Img5 from "../../images/blog-5.png";
import Img6 from "../../images/blog-6.png";
import Img7 from "../../images/blog-7.png";
import Img8 from "../../images/blog-08.jpg";
import Img9 from "../../images/blog-9.png";
import Img10 from "../../images/blog-10.png";

const BlogSection = () => {
  return (
    <div>
      {/* <!-- Blog Section Start --> */}
      <div id="blog" className="blog section">
        <div className="blog-area">
          <div className="container">
            <div className="row">
              {/* <!-- Success Story 01 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img1} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Mariner Finance - Litigation
                  </a>
                  <p className="blog-summery">
                    Client Achieves Financial Relief After Facing Aggressive
                    Creditor Tactics and Legal Battles with CLG’s Expert
                    Representation
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 02 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img2} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Citibank - TCPA Claim
                  </a>
                  <p className="blog-summery">
                    CLG enrolled a client with Covid-related debt, identified
                    creditor violations under TCPA, and negotiated a settlement
                    reducing the debt to 35%, payable over 36 months.
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 03 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img3} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    US Bank - Arbitration
                  </a>
                  <p className="blog-summery">
                    After enrolling with CLG due to unaffordable US Bank debt,
                    our client received immediate representation, leading to a
                    favorable settlement of 50% of the outstanding amount,
                    payable over 18 months.
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 04 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img4} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Finwise Bank - Settlement
                  </a>
                  <p className="blog-summery">
                    Client Achieves Financial Relief After Facing Aggressive
                    Creditor Tactics and Legal Battles with CLG’s Expert
                    Representation
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 05 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img5} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Synchrony Bank - Garnishment
                  </a>
                  <p className="blog-summery">
                    Transferred to CLG in 2023, our client faced a wage
                    garnishment for a Synchrony Bank debt, but CLG successfully
                    negotiated a court-modified payment of $100 per month to
                    ease her financial strain.
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 06 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img6} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Citibank - Debt Invalidation
                  </a>
                  <p className="blog-summery">
                    Transferred to CLG post-bankruptcy, our client achieved
                    relief from two collection accounts, including a $16,022
                    debt, through CLG’s persistent validation efforts,
                    ultimately closing both accounts without payment.
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 07 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img7} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Capital One - Debt Invalidation
                  </a>
                  <p className="blog-summery">
                    After transferring to CLG, our client’s $10,344 debt with
                    Capital One was successfully resolved following CLG’s
                    persistent dispute efforts, resulting in the collector
                    ceasing all collection actions.
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 08 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img8} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    {" "}
                    Citibank - Debt Invalidation
                  </a>
                  <p className="blog-summery">
                    Enrolled in October 2023, our client’s $12,782 debt was
                    resolved as CLG’s dispute efforts led to the cessation of
                    all collection attempts, providing her with needed relief.
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 09 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img9} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Synchrony Bank - Debt Invalidation
                  </a>
                  <p className="blog-summery">
                    After enrolling with CLG in September 2023, our client’s
                    Synchrony Bank debt was resolved when collection efforts
                    ceased following CLG’s persistent dispute actions.
                  </p>
                </div>
              </div>
              {/* <!-- Success Story 10 --> */}
              <div className="col-md-6 col-xl-4 mb-4">
                <div className="single-blog">
                  <a href="" className="blog-image">
                    <img src={Img10} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="" className="blog-title">
                    Citibank - Debt Invalidation
                  </a>
                  <p className="blog-summery">
                    Enrolling with CLG in November 2023, our client’s $7,501
                    Citibank debt was resolved after dispute actions led to the
                    cessation of all collection efforts by February 2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Section End --> */}
    </div>
  );
};

export default BlogSection;
