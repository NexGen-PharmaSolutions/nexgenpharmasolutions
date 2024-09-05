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

function App() {
  return (
    <>
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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
