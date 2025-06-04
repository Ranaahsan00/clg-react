import React from "react";
import SuccessImg from "../../images/client-success-bg.svg";
import SuccessGraph from "../../images/client-success-graph.svg";

const MainSection = () => {
  return (
    <div>
      <div id="success-story" className="success-story">
        <div className="success-story-area">
          <img
            src={SuccessImg}
            alt="client success img"
            className="story-hero-img d-none d-md-block"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-6 ">
                <div className="story-content">
                  <h2 className="story-title">Client Success Stories</h2>
                  <p className="story-text">
                    At CLG, we are proud to share our client success stories,
                    showcasing the impactful work we do in helping individuals
                    navigate their financial challenges.
                    <br /> <br />
                    From negotiating reduced settlements to resolving debts
                    without litigation, our attorneys have consistently achieved
                    results against creditors such as Mariner Finance, Citibank,
                    Capital One, Synchrony Bank, Finwise Bank, 1st Franklin,
                    American Express, Bank of America, Republic Finance, Chase
                    Bank, US Bank, and many more.
                    <br /> <br />
                    Our persistent efforts have also led to collectors ceasing
                    efforts entirely, as seen in multiple accounts with the
                    above creditors and we have successfully invalidated debts
                    such as credit cards, payday loans, utility bills, checking
                    accounts, medical bills, promissory notes, insurance, and
                    private student loans, helping our clients who are burdened
                    by financial constraints.
                    <br /> <br />
                    Whether it’s reducing garnishment payments, halting
                    collection activities, fighting repossessions or achieving
                    favorable settlements, CLG is dedicated to fighting for our
                    clients and providing them with the financial relief they
                    deserve.
                  </p>
                </div>
                <div className="d-md-none d-block">
                  <img
                    src={SuccessGraph}
                    className="story-hero-graph"
                    alt="Success-graph"
                  />
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
