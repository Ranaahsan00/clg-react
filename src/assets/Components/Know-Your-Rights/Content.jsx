import React from "react";
import Img1 from "../../images/fcba-fdcpa-rights.jpg";
import Img2 from "../../images/your-rights-02.png";
import Img3 from "../../images/creditor-harassment.jpg";
import Img4 from "../../images/legal-debt-relief-clg.jpg";

const Content = () => {
  return (
    <div>
      <div id="your-rights" className="your-rights section">
        <div className="your-rights-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="single-rights-blog">
                  <a href="fcba-and-fdcpa.html" className="blog-image">
                    <img src={Img1} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="rights-blog-content">
                  <p className="meta-date">5 min read</p>
                  <a href="#" className="blog-title">
                    What is the FCBA and FDCPA?
                  </a>
                  <p className="blog-subtext">
                    Learn how the FCBA and FDCPA protect you from billing errors
                    and abusive debt collection, giving you the power to dispute
                    charges and defend your rights.
                  </p>
                  <a href="#" className="btn btnPrimary-outline">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-rights-blog">
                  <a href="#" className="blog-image">
                    <img src={Img2} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="rights-blog-content">
                  <p className="meta-date">7 min read</p>
                  <a href="#" className="blog-title">
                    Collector Penalties
                  </a>
                  <p className="blog-subtext">
                    Explore how consumer protection laws penalize abusive debt
                    collectors and help you recover damages for harassment,
                    deception, and privacy violations.{" "}
                  </p>
                  <a href="#" className="btn btnPrimary-outline">
                    Read More
                  </a>
                </div>
              </div>

              <div className="col-lg-6 mt-5">
                <div className="single-rights-blog">
                  <a href="#" className="blog-image">
                    <img src={Img3} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="rights-blog-content">
                  <p className="meta-date">7 min read</p>
                  <a href="#" className="blog-title">
                    Recognizing and Responding to Abusive Practices
                  </a>
                  <p className="blog-subtext">
                    From constant calls to false threats, this guide breaks down
                    the most common forms of creditor harassment and shows you
                    exactly how to protect yourself under the FDCPA.
                  </p>
                  <a href="#" className="btn btnPrimary-outline">
                    Read More
                  </a>
                </div>
              </div>

              <div className="col-lg-6 mt-5">
                <div className="single-rights-blog">
                  <a href="#" className="blog-image">
                    <img src={Img4} className="img-fluid" alt="blog image" />
                  </a>
                </div>
                <div className="rights-blog-content">
                  <p className="meta-date">4 min read</p>
                  <a href="#" className="blog-title">
                    How Consumer Legal Group Provides Legal Support for
                    Individuals Facing Debt Challenges
                  </a>
                  <p className="blog-subtext">
                    Learn how Consumer Legal Group empowers individuals in debt
                    with legal representation, debt invalidation strategies, and
                    protection from creditor harassment.
                  </p>
                  <a href="#" className="btn btnPrimary-outline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
