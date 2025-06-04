import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/assets/Pages/Index";
import KnowYourRights from "../src/assets/Pages/KnowYourRights";
import ClientSuccessStories from "../src/assets/Pages/ClientSuccessStories";
import Carreers from "../src/assets/Pages/Carreers";
import Contact from "../src/assets/Pages/ContactUs";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/know-your-rights" element={<KnowYourRights />} />
        <Route
          path="/client-success-stories"
          element={<ClientSuccessStories />}
        />
        <Route path="/careers" element={<Carreers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
