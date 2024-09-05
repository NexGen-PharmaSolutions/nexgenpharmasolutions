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
        {/*--------------------------------------------- Audit Upper Half -----------------------------------------------------------*/}
        <section className="relative flex justify-center items-center lg:px-[220px] lg:h-[800px] h-[200px] z-10">
          <div className="relative w-full mx-auto lg:h-[600px] h-[200px]">
            {/* Background Image with Semicircle and Circles */}
            <img
              src="/auditup.png"
              alt="Semicircle Design"
              className=""
            />

            {/* Invisible Divs for Hover Effect */}
              {/* Hover Divs 1 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-215px] lg:left-[10px]  top-[-80px] left-[5px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[-290px] lg:left-[10px] top-[-120px] left-[3px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 2 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-585px] lg:left-[200px] top-[-232px] left-[77px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[-290px] lg:left-[4px] top-[-120px] left-[3px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 3 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-855px] lg:left-[430px] top-[-340px] left-[165px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[-300px] lg:left-[5px] top-[-120px] left-[-1px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 4 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-965px] lg:left-[655px] top-[-392px] left-[253px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[-250px] lg:left-[20px] top-[-120px] left-[10px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 5 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-970px] lg:left-[860px] top-[-405px] left-[332px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[-260px] lg:left-[10px] top-[-120px] left-[-1px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>
          </div>
        </section>
        {/*--------------------------------------------- Audit Lower Half -----------------------------------------------------------*/}
        <section className="relative flex justify-center items-center lg:px-[190px] lg:h-[600px] h-[325px]">
          <div className="relative w-full mx-auto lg:h-[600px] h-[190px]">
            {/* Background Image with Semicircle and Circles */}
            <img
              src="/auditdown.png"
              alt="Semicircle Design"
              className=""
            />

            {/* Invisible Divs for Hover Effect */}
              {/* Hover Divs 1 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-635px] lg:left-[50px]  top-[-240px] left-[16px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[390px] lg:left-[10px] top-[160px] left-[8px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 2 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-645px] lg:left-[250px] top-[-255px] left-[88px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[390px] lg:left-[-20px] top-[160px] left-[-8px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 3 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-758px] lg:left-[475px] top-[-305px] left-[170px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[390px] lg:left-[15px] top-[160px] left-[5px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 4 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-1025px] lg:left-[702px] top-[-412px] left-[253px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[360px] lg:left-[20px] top-[140px] left-[5px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>

            {/* Hover Divs 5 */}
            <div className="group lg:w-[210px] lg:h-[190px] h-[80px] w-[80px] rounded-full lg:top-[-1393px] lg:left-[885px] top-[-560px] left-[318px] relative">
              <div className="invisible group-hover:visible bg-white p-1 lg:p-2 rounded shadow-md transition-opacity duration-300 ease-in-out relative lg:top-[380px] lg:left-[20px] top-[150px] left-[6px]">
                <p className="lg:text-[12px] text-[6px]">Detail about the first circle.</p>
              </div>
            </div>
          </div>
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
