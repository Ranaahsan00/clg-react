import React from "react";
import FooterLogo from "../images/footer-logo.svg";

const Footer = () => {
  return (
    <div>
      <a href="#">
        <button className="floating-btn">
          Speak to a Legal Expert for Free
        </button>
      </a>
      {/* <!-- Footer Section Start --> */}
      <footer id="footer" className="footer">
        <div className="footer-area">
          <div className="container">
            <div className="row footer-middle">
              <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
                <div className="footer-content">
                  <div className="footer-logo">
                    <img src={FooterLogo} alt="logo" />
                  </div>
                  <p className="footer-text">
                    © 2024 Consumer Legal Group P.C. All Rights Reserved.
                  </p>
                  {/* <!-- Removed the footer-menu containing social media icons --> */}
                  {/* <!-- If you want to keep the footer-menu container without social icons, keep the div and ul empty or remove them as needed --> */}
                  <div className="footer-menu">
                    {/* <!-- No social media icons here --> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
                <div className="footer-menu">
                  <h2 className="menu-category">Navigation</h2>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="know-your-rights.html">Know Your Rights</a>
                    </li>
                    <li>
                      <a href="client-success-story.html">
                        Client Success Stories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 mb-5">
                <div className="footer-menu">
                  <h2 className="menu-category">Contact</h2>
                  <ul className="footer-menu-list">
                    <li>
                      <p className="footer-contact">
                        <span>
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        Existing Clients - <a href="#"> (000) 000-0000</a>
                      </p>
                      <p className="footer-contact">
                        <span>
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        New Clients - <a href="#"> (000) 000-0000</a>
                      </p>
                    </li>
                    <li>
                      <p className="footer-contact">
                        <span>
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <a href="mailto:support@consumerlegalgroup.com">
                          support@consumerlegalgroup.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="footer-contact">
                        <span>
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        140 Broadway, New York, NY 10005
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2 mb-5">
                <div className="footer-menu">
                  <h2 className="menu-category">Support</h2>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Cookie Policy</a>
                    </li>
                    <li>
                      <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="career.html">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-allrights">
            <p>Copyright © Ahsan 2024 | All Rights Reserved</p>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </div>
  );
};

export default Footer;
