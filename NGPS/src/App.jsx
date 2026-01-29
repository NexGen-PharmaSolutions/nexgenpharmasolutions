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
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsConditions from "./screens/TermsConditions";
import Disclaimer from "./screens/Disclaimer";
import CookieNotice from "./screens/CookieNotice";
import Events from "./screens/Events";
import NexGenManagementSystem from "./screens/NexGenManagementSystem";
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
              "name": "NexGen Pharma Solutions Private Limited",
              "alternateName": "NexGen Pharma Solutions Pvt. Ltd.",
              "url": "https://nexgenpharmasolutions.com",
              "logo": "https://nexgenpharmasolutions.com/logo.png",
              "description": "Premier pharmaceutical consulting firm specializing in GMP audits, quality systems, regulatory affairs, validation, and corporate training.",
              "contactPoint": {
                "@type": "ContactPoint",
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
            <Route path="/events" element={<Events />} />
            <Route path="/products/nexgen-management-system" element={<NexGenManagementSystem />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookie-notice" element={<CookieNotice />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
