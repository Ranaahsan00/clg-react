import React from "react";
import Header from "../Components/Header";
import MainSection from "../Components/Client-Success-Stories/MainSection";
import BlogSection from "../Components/Client-Success-Stories/BlogSection";
import Footer from "../Components/Footer";

const ClientSuccessStories = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <MainSection />
      </div>

      <div>
        <BlogSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientSuccessStories;
