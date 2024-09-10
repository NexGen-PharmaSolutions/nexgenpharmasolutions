import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Gmp = () => {
  return (
    <div className="min-h-screen bg-[#E1EAF2]">
      {/*----------------------------------------- Header -------------------------------------------------------------------*/}
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section
          className="relative flex flex-col justify-center items-start h-[300px] md:h-[600px] bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/herobg.png')" }}
          id="hero"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#34495E] animate-[pop-out_1s_ease-out_forwards]">
              GMP Audits
            </h1>
            <p className="mt-4 text-lg md:text-xl inter font-normal animate-[pop-out_1s_ease-out_forwards] md:w-[500px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <style jsx>{`
            @keyframes pop-out {
              0% {
                transform: scale(0);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </section>
        {/*--------------------------------------------- GMPD -----------------------------------------------------------*/}
        <section
          id="GMPD"
          className="animate-fade-in"
        >
          <div className="max-w-[1000px] mx-auto p-4">
            <div className="mb-8">
              <p className="font-normal inter text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold outfit text-[#34495E]">
                  Left Title
                </h2>
                <p className="text-sm font-normal inter mt-2">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Sed
                  posuere consectetur est at lobortis.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold outfit text-[#34495E]">
                  Right Title
                </h2>
                <p className="text-sm font-normal inter mt-2">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec id elit non mi porta gravida.
                </p>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            .animate-fade-in {
              animation: fadeIn 1s ease-in;
            }
          `}</style>
        </section>
      </main>
      {/*------------------------------------------------- Footer -------------------------------------------------------------*/}
      <footer className="p-4 lg:mt-[250px] mt-[50px]">
        <Footer />
      </footer>
    </div>
  );
};

export default Gmp;
