import React, { useRef } from "react";
import Slider from "react-slick";
import Tip from "../../images/tip.svg";
import BlankPic from "../../images/blank-profile-picture.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./IndexTestimonials.css"; // Make sure this is included

const IndexTestimonials = () => {
  const sliderRef = useRef();
  // const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (current, next) => setActiveIndex(next),

    customPaging: () => <div></div>,
  };

  return (
    <div className="testimonial">
      <div className="testimonial-area">
        <div className="container">
          <div className="section-top-title-box">
            <h2 className="section-title">Meet Our Key People</h2>
            <p className="section-text">
              Discover the dedicated team behind our success.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Custom navigation buttons */}
              <button
                className="custom-prev"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                className="custom-next"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              <Slider ref={sliderRef} {...settings}>
                {/* Slide 1 */}
                <div className="testimonial-slide">
                  <div className="single-testimonial">
                    {/* <img className="tip-icon" src={Tip} alt="tip" /> */}
                    <div className="testimonial-author">
                      <h4 className="author-name">Jack Gross, Esq.</h4>
                      <p className="author-post">Co-Managing Attorney</p>
                    </div>
                    <p>
                      As Co-Managing Attorney of CLG, Mr. Gross shepherds the
                      growth, development and direction of the firm; oversees,
                      supervises and guides the firm’s attorneys and paralegals;
                      oversees the direction, litigation strategy and tactics
                      for the firm’s entire client roster and caseload; and
                      defends those cases at the discovery and trial stages
                      throughout New York and New Jersey.
                      <br />
                      <br />
                      Mr. Gross has been at the helm of CLG for close to two
                      years and has over 35 years of litigation experience for
                      such diverse clients as American Express, Upjohn,
                      Chrysler, General Electric, Gerber and the NYCHA.
                    </p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="testimonial-slide">
                  <div className="single-testimonial">
                    {/* <img className="tip-icon" src={Tip} alt="tip" /> */}
                    <div className="testimonial-author">
                      <h4 className="author-name">Jason Rebhun, Esq.</h4>
                      <p className="author-post">Co-Managing Attorney</p>
                    </div>
                    <p>
                      As Co-Managing Attorney of CLG, Mr. Rebhun is responsible
                      for representing clients of all sizes and enforce/defend
                      their rights as needed, whether through negotiations,
                      settlements or navigating through the courts, if required.
                      He is an experienced, confident, and prepared trial
                      attorney who is not afraid to try any case to verdict.
                      <br />
                      <br />
                      Mr. Rebhun has over 14 years of litigation experience and
                      focuses on consumer debt, commercial and real estate
                      disputes.
                    </p>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="testimonial-slide">
                  <div className="single-testimonial">
                    {/* <img className="tip-icon" src={Tip} alt="tip" /> */}
                    <div className="testimonial-author">
                      <h4 className="author-name">Daniel Warshaw</h4>
                      <p className="author-post">Chief Operating Officer</p>
                    </div>
                    <p>
                      As the Chief Operating Officer of CLG, Mr. Warshaw is
                      responsible for leading all non-legal related operations
                      at the firm. This includes oversight of Client Services,
                      Human Resources, IT, Staffing, Financial Planning,
                      Business Development, and Client Experience.
                      <br />
                      <br />
                      He joined CLG in 2023 with 20 years of experience in the
                      Investment Banking Industry, working for firms such as
                      Wells Fargo, Wachovia, American Property Financing, and
                      Bear Stearns. Mr. Warshaw earned a B.A from Dickinson
                      College, and currently resides in CT with his wife and his
                      two children.
                    </p>
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="testimonial-slide">
                  <div className="single-testimonial">
                    {/* <img className="tip-icon" src={Tip} alt="tip" /> */}
                    <div className="testimonial-author">
                      <h4 className="author-name">Zulma Lyman</h4>
                      <p className="author-post">
                        Chief Human Resources Officer
                      </p>
                    </div>
                    <p>
                      As the Chief Human Resources Officer of CLG, Ms. Lyman is
                      responsible for leading the day-to-day operations and
                      strategic directions across the various HR disciplines.
                      She is also actively engaged in and dedicated to fostering
                      the culture of the firm.
                      <br />
                      <br />
                      She joined CLG in 2024 with over 28 years of experience in
                      the investment banking, commercial real estate and
                      insurance industries, working for firms such as UBS, BNY
                      Mellon, Brookfield and others.
                      <br />
                      <br />
                      Ms. Lyman earned a B.S. at St. John's University.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTestimonials;
