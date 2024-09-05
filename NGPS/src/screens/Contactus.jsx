import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-[#E1EAF2]">
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section
          className="relative flex flex-col justify-center items-start h-[300px] md:h-[600px] bg-cover bg-center p-8"
          id="hero"
        ></section>
      </main>
      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Contactus;
