import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Carreers/Banner";
import WhyUs from "../Components/Carreers/WhyUs";
import Opportunities from "../Components/Carreers/Opportunities";
import OurDepartment from "../Components/Carreers/OurDepartment";
import OurTeam from "../Components/Carreers/OurTeam";
import EqualOpportunity from "../Components/Carreers/EqualOpportunity";
import YourCareer from "../Components/Carreers/YourCareer";

import Footer from "../Components/Footer";

const Carreers = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner />
      </div>

      <div>
        <WhyUs />
      </div>

      <div>
        <Opportunities />
      </div>

      <div>
        <OurDepartment />
      </div>

      <div>
        <OurTeam />
      </div>

      <div>
        <EqualOpportunity />
      </div>

      <div>
        <YourCareer />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Carreers;
