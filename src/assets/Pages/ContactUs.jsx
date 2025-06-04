import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Contact-Us/Banner";
import MainSection from "../Components/Contact-Us/MainSection";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner />
      </div>

      <div>
        <MainSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
