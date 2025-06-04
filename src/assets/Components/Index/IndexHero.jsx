import React from "react";
import HeroImg from "../../images/hero-bg.svg";
import Arrow from "../../lottie/arrow.json";

const IndexHero = () => {
  return (
    <>
      {/* Hero Section Start */}
      <div id="hero" className="hero">
        <div className="hero-area relative">
          <img src={HeroImg} alt="hero img" className="hero-img" />
          <div className="container">
            <div className="row hero-row">
              <div className="col-lg-7">
                <div className="hero-content-wrapper">
                  <div className="hero-content">
                    <h1 className="hero-title">Let Us fight for you</h1>
                    <p className="hero-text">
                      Consumer Legal Group is ready to work on your behalf.
                    </p>
                  </div>
                  <div className="hero-arrow">
                    <lottie-player
                      src={Arrow}
                      background="transparent"
                      speed="1"
                      autoplay
                    ></lottie-player>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-form-box">
                  <form className="hero-form">
                    <input type="hidden" name="utm_source" id="utm_source" />
                    <input type="hidden" name="utm_medium" id="utm_medium" />
                    <input
                      type="hidden"
                      name="utm_campaign"
                      id="utm_campaign"
                    />
                    <input type="hidden" name="utm_term" id="utm_term" />
                    <input type="hidden" name="utm_content" id="utm_content" />
                    <input type="hidden" name="gclid" id="gclid" />

                    <div className="row mb-2 mb-lg-3">
                      <div className="col-md-6">
                        <label htmlFor="first_name" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          id="first_name"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="last_name" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          id="last_name"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-2 mb-lg-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="mb-2 mb-lg-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        rows="5"
                        className="form-control"
                        name="message"
                        id="message"
                        placeholder="How much unsecured debt do you have? Do you have any debts in litigation? For example: I have a $20,000 credit card debt from capital one that I received a summons for."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btnPrimary w-100">
                      Get in touch
                    </button>
                    <a href="#" className="btn btnHomeCallNow w-100 mt-2">
                      <i className="fa-solid fa-phone"></i> Or Call Now (000)
                      000-0000
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
    </>
  );
};

export default IndexHero;
