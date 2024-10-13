import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Aboutus from "./screens/Aboutus";
import Gmp from "./screens/Gmp";
import QualCon from "./screens/QualCon";
import ScrollToTop from "./components/ScrollToTop";
import Comsysval from "./screens/Comsysval";
import Training from "./screens/Training";
import Contactus from "./screens/Contactus";
import Regaff from "./screens/Regaff";
import { Helmet } from "react-helmet"; // Helmet helps manage the document head

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NexGen Pharma Solutions",
              "url": "https://nexgenpharmasolutions.com",
              "logo": "https://nexgenpharmasolutions.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 70691 79666",
                "email": "inquiry@nexgenpharmasolutions.com",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>
      <Router>
        <ScrollToTop />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/gmpaudits" element={<Gmp />} />
            <Route path="/qualityconsulting" element={<QualCon />} />
            <Route path="/computersystemvalidations" element={<Comsysval />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/regulatoryaffairs" element={<Regaff />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
