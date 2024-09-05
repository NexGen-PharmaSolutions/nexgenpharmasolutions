import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const QualCon = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-popUp");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fadeDiv");
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
        element.classList.add("fade-in");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-div");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
          element.classList.add("fade-in");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              Quality Consulting
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
        {/*---------------------------------------- Compliance Upgradation & Certification ---------------------------------------------------------*/}
        <section id="CUC" className="p-8">
          <style>
            {`
            @keyframes popUp {
              0% {
                transform: scale(0.5);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            .animate-popUp {
              animation: popUp 0.6s ease-out forwards;
            }
          `}
          </style>
          <h2 className="md:text-3xl text-2xl font-semibold outfit text-[#34495E] text-center mb-8">
            Compliance Upgradation & Certification
            <div className="md:w-[400px] w-[220px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>
          <div
            ref={sectionRef}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl px-6"
          >
            {/*----------------------------------------------------- We Inspect ---------------------------------------------*/}
            <div className="card p-6 rounded-2xl shadow-2xl shadow-gray-600 text-center">
              <div className="flex justify-center items-center">
                <img
                  src="/weinspect.png"
                  alt="We Inspect"
                  className="w-[100px] h-[100px] object-fit rounded-t-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold outfit text-[#34495E] mb-2">
                We Inspect
              </h3>
              <p className="montserrat font-medium">
                Description for the first value card.Description for the first
                value card.Description for the first value card.Description for
                the first value card.Description for the first value
                card.Description for the first value card.
              </p>
            </div>
            {/*----------------------------------------------------- We Collaborate ---------------------------------------------*/}
            <div className="card p-6 rounded-2xl shadow-2xl shadow-gray-600 text-center">
              <div className="flex justify-center items-center">
                <img
                  src="/wecollaborate.png"
                  alt="We Collaborate"
                  className="w-[100px] h-[100px] object-fit rounded-t-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold outfit text-[#34495E] mb-2">
                We Collaborate
              </h3>
              <p className="montserrat font-medium">
                Description for the first value card.Description for the first
                value card.Description for the first value card.Description for
                the first value card.Description for the first value
                card.Description for the first value card.
              </p>
            </div>
            {/*----------------------------------------------------- We ensure Readiness ---------------------------------------------*/}
            <div className="card p-6 rounded-2xl shadow-2xl shadow-gray-600 text-center">
              <div className="flex justify-center items-center">
                <img
                  src="/ensureready.png"
                  alt="We Ensure Readiness"
                  className="w-[100px] h-[100px] object-fit rounded-t-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold outfit text-[#34495E] mb-2">
                We Ensure Readiness
              </h3>
              <p className="montserrat font-medium">
                Description for the first value card.Description for the first
                value card.Description for the first value card.Description for
                the first value card.Description for the first value
                card.Description for the first value card.
              </p>
            </div>
          </div>
        </section>
        {/*----------------------------------------- GCP Services -----------------------------------------*/}
        <section id="GCPS" className="p-6">
          {/*----------------------------------------- Top Div with Image and Title -----------------------------------------*/}
          <div className="flex justify-center items-center mb-8 mt-3">
            <img
              src="/gcps.png"
              alt="GCP SERVICE"
              className="w-16 h-16 object-cover mr-4"
            />
            <h1 className="text-2xl md:text-3xl font-semibold outfit text-[#34495E]">
              GCP SERVICE{" "}
              <div className="md:w-[120px] w-[100px] h-1 mx-auto my-4 bg-[#34495E]"></div>
            </h1>
          </div>
          {/* Fade-in Div */}
          <div
            id="fadeDiv"
            className="opacity-0 transition-opacity duration-1000 ease-in-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Left Side (60%) */}
              <div className="md:col-span-3 md:pl-20">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Important Point 1</li>
                  <li>Important Point 2</li>
                  <li>Important Point 3</li>
                  <li>Important Point 4</li>
                </ul>
              </div>

              {/* Right Side (40%) */}
              <div className="md:col-span-2">
                <img
                  src="/1.png"
                  alt="Photo"
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <style jsx>{`
            #fadeDiv.fade-in {
              opacity: 1;
            }
          `}</style>
        </section>
        {/*----------------------------------------- Why Choose NGPS -----------------------------------------*/}
        <section id="WCNGPS" className="p-6 md:px-[100px]">
          {/* Title */}
          <div className="mb-8 ">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold outfit text-[#34495E]">
              Why Choose NexGen Pharma Solutions
            </h2>
            <div className="md:w-[570px] w-[260px] h-1 md:ml-[30px] ml-5 my-4 bg-[#34495E]"></div>
          </div>

          {/*----------------------------------------- Fade-in Divs -----------------------------------------*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-div opacity-0 transition-opacity duration-1000 ease-in-out">
            {/*----------------------------------------- Left Div -----------------------------------------*/}
            <div>
              <p className="text-base lg:text-lg montserrat font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum pharetra felis, non fermentum magna.
              </p>
            </div>

            {/*----------------------------------------- One Stop Solution -----------------------------------------*/}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-1/3">
                  <img
                    src="/ossolution.png"
                    alt="One Stop Solution"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                    One Stop Solution
                  </h3>
                  <p className="text-sm montserrat font-medium">
                    This is the description for the first middle content.
                  </p>
                </div>
              </div>
              {/*----------------------------------------- Solution Oriented and Transparent -----------------------------------------*/}
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    src="/soat.png"
                    alt="Solution Oriented and Transparent"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                    Solution Oriented and Transparent
                  </h3>
                  <p className="text-sm montserrat font-medium">
                    This is the description for the second middle content.
                  </p>
                </div>
              </div>
            </div>

            {/*----------------------------------------- Trunkey sloutions -----------------------------------------*/}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-1/3">
                  <img
                    src="/trusol.png"
                    alt="Trunkey sloutions"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                    Trunkey sloutions
                  </h3>
                  <p className="text-sm montserrat font-medium">
                    This is the description for the first right content.
                  </p>
                </div>
              </div>
              {/*----------------------------------------- Global at Heart, Local in Spirit -----------------------------------------*/}
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    src="/ghls.png"
                    alt="Global at Heart, Local in Spirit"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] [16px]">
                    Global at Heart, Local in Spirit
                  </h3>
                  <p className="text-sm montserrat font-medium">
                    This is the description for the second right content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .fade-in-div.fade-in {
              opacity: 1;
            }
          `}</style>
        </section>
      </main>
      {/*------------------------------------------------- Footer -------------------------------------------------------------*/}
      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default QualCon;
