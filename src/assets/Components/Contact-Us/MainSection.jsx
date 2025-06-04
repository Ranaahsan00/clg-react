import React from "react";

const MainSection = () => {
  return (
    <div>
      <div id="contact" className="contact section">
        <div className="contact-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5">
                <form
                  method="POST"
                  encType="multipart/form-data"
                  className="contact-form"
                >
                  <input type="hidden" name="utm_source" />
                  <input type="hidden" name="utm_medium" />
                  <input type="hidden" name="utm_campaign" />
                  <input type="hidden" name="utm_term" />
                  <input type="hidden" name="utm_content" />
                  <input type="hidden" name="gclid" id="gclid" />

                  <div className="mb-2 mb-lg-4">
                    <div className="row">
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
                  </div>

                  <div className="mb-2 mb-lg-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="mb-2 mb-lg-4">
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

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      className="form-control"
                      name="message"
                      id="message"
                      placeholder="How much unsecured debt do you have? Do you have any debts in litigation? For example: I have a $20,000 credit card debt from capital one that I received a summons for"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    value="send"
                    className="btn btnPrimary w-100"
                  >
                    Submit
                  </button>

                  <a
                    href="tel:2129180095"
                    className="btn btnCallNow w-100 mt-3"
                  >
                    <i className="fa-solid fa-phone"></i> Call Now (212)
                    918-0095
                  </a>
                </form>
              </div>

              <div className="col-lg-6">
                <div className="map-area">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9917865151054!2d-74.01138222401813!3d40.70809983981269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18338ac807%3A0x5a5f2c4c56f39a0!2s140%20Broadway%2C%20New%20York%2C%20NY%2010005%2C%20USA!5e0!3m2!1sen!2sus!4v1706725981115!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                  ></iframe>
                </div>

                <div className="contact-info-box">
                  <div className="single-box">
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <div className="details">
                      <h6>Phone Number</h6>
                      <p>
                        Existing Clients:{" "}
                        <a href="tel:2129201247" className="contact-link">
                          (212) 920-1247
                        </a>
                      </p>
                      <p>
                        New Clients:{" "}
                        <a href="tel:2129180095" className="contact-link">
                          (212) 918-0095
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="single-box">
                    <span>
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                    <div className="details">
                      <h6>Email Address</h6>
                      <p>
                        <a
                          href="mailto:support@consumerlegalgroup.com"
                          className="contact-link"
                        >
                          support@consumerlegalgroup.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="single-box">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <div className="details">
                      <h6>Post Box</h6>
                      <p>PO Box 5013 Millville, NJ 08332</p>
                    </div>
                  </div>

                  <div className="single-box">
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <div className="details">
                      <h6>Location</h6>
                      <p>140 Broadway, New York, NY 10005</p>
                    </div>
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

export default MainSection;
