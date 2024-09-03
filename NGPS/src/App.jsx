import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import Aboutus from "./screens/Aboutus";

function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App
