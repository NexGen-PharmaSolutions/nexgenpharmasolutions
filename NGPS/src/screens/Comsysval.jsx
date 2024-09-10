import React, { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Comsysval = () => {
  const fadeInRef = useRef(null);
  const wbsFadeInRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeInElement = fadeInRef.current;
    const wbsFadeInElement = wbsFadeInRef.current;

    if (fadeInElement) {
      observer.observe(fadeInElement);
    }
    if (wbsFadeInElement) {
      observer.observe(wbsFadeInElement);
    }

    return () => {
      if (fadeInElement) {
        observer.unobserve(fadeInElement);
      }
      if (wbsFadeInElement) {
        observer.unobserve(wbsFadeInElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E1EAF2]">
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
              Computer System Validations
            </h1>
            <p className="mt-4 text-lg md:text-xl text-black inter font-normal animate-[pop-out_1s_ease-out_forwards] md:w-[500px] ">
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
        {/*------------------------------------------ WSWBS ------------------------------------------*/}
        <section id="WSWBS" className="py-16 px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold outfit text-[#34495E] text-center mb-8">
            We are specialized in validating below systems
            <div className="md:w-[320px] w-[140px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>
          <h3 className="text-lg md:text-xl inter font-medium text-left mb-4">
            Our Key Systems
          </h3>
          <div
            ref={fadeInRef}
            className="opacity-0 transition-opacity duration-700 ease-in-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/*------------------------------------------ Left div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Important Point 1</li>
                  <li>Important Point 2</li>
                  <li>Important Point 3</li>
                  <li>Important Point 4</li>
                </ul>
              </div>
              {/*------------------------------------------ Mid Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Important Point 1</li>
                  <li>Important Point 2</li>
                  <li>Important Point 3</li>
                  <li>Important Point 4</li>
                </ul>
              </div>
              {/*------------------------------------------ Right Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Important Point 1</li>
                  <li>Important Point 2</li>
                  <li>Important Point 3</li>
                  <li>Important Point 4</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*------------------------------------------ WBS Section ------------------------------------------*/}
        <section
          id="WBS"
          ref={wbsFadeInRef}
          className="py-16 px-4 md:px-8 opacity-0 transition-opacity duration-700 ease-in-out"
        >
          <h2 className="text-2xl md:text-4xl font-bold outfit text-[#34495E] text-center mb-8">
          What we bring to customer
            <div className="md:w-[300px] w-[160px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>
          {/*------------------------------------------ Cost Saving & Time Optimization ------------------------------------------*/}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/c&tsave.png"
                alt="c&tsve"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
              Cost Saving & Time Optimization
              </h4>
              <p className="text-sm md:text-base text-center font-medium montserrat">
                Description for card 1.
              </p>
            </div>
            {/*------------------------------------------ Committed To Compliance ------------------------------------------*/}
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/comtcom.png"
                alt="comtcom"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
              Committed To Compliance
              </h4>
              <p className="text-sm md:text-base text-center font-medium montserrat">
                Description for card 2.
              </p>
            </div>
            {/*------------------------------------------ Confidence ------------------------------------------*/}
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/confidence.png"
                alt="confidence"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
              Confidence
              </h4>
              <p className="text-sm md:text-base text-center font-medium montserrat">
                Description for card 3.
              </p>
            </div>
            {/*------------------------------------------ Hybrid Execution Models ------------------------------------------*/}
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/hybrid.png"
                alt="Hybrid Execution Models"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
              Hybrid Execution Models
              </h4>
              <p className="text-sm md:text-base text-center font-medium montserrat">
                Description for card 3.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-4">
        <Footer />
      </footer>
      <style jsx>{`
        .fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Comsysval;
