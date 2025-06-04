import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Know-Your-Rights/Banner";
import Content from "../Components/Know-Your-Rights/Content";

import Footer from "../Components/Footer";

const KnowYourRights = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner />
      </div>

      <div>
        <Content />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default KnowYourRights;
