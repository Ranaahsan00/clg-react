import React from "react";
import Header from "../Components/Header";
import IndexHero from "../Components/Index/IndexHero";
import IndexAbout from "../Components/Index/IndexAbout";
import IndexGetStarted from "../Components/Index/IndexGetStarted";
import IndexTestimonials from "../Components/Index/IndexTestimonials";
import Footer from "../Components/Footer";
// import $ from "jquery";

const Index = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <IndexHero />
      </div>

      <div>
        <IndexAbout />
      </div>

      <div>
        <IndexGetStarted />
      </div>

      <div>
        <IndexTestimonials />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
