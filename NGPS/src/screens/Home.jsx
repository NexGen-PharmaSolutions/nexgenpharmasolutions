import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Home = () => {
  const servicesRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-pop-out");
          } else {
            entry.target.classList.remove("animate-pop-out");
          }
        });
      },
      { threshold: 0.1 }
    );
    const cardContainer = servicesRef.current.querySelector(".card-container");
    if (cardContainer) observer.observe(cardContainer);
    return () => {
      if (cardContainer) observer.unobserve(cardContainer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E1EAF2]">
      {/*----------------------------------------- Header -------------------------------------------------------------------*/}
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*-------------------------------------------- Hero Section -------------------------------------------------------------*/}
        <section
          id="hero"
          className="relative h-[300px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('/herobg.png')` }} // Background image
        >
          <style jsx>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            @keyframes slideInRight {
              0% {
                transform: translateX(100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }

            .animate-fade-in {
              animation: fadeIn 1s ease-in;
            }

            .animate-slide-in-right {
              animation: slideInRight 1s ease-out;
            }
          `}</style>
          <div className="text-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="animate-fade-in mx-auto w-[150px] md:w-[200px] h-auto"
            />
            <img
              src="/compname.png"
              alt="Company Name"
              className="animate-slide-in-right mt-4 mx-auto w-[200px] md:w-[300px] h-auto"
            />
          </div>
        </section>
        {/*--------------------------------------- Our Services Section ----------------------------------------------------------*/}
        <section id="our-services" className="py-12" ref={servicesRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-semibold outfit text-[#34495E]">
              Our Services
            </h2>
            <div className="w-[150px] h-1 mx-auto my-4 bg-[#34495E]"></div>
            <div className="card-container flex flex-col md:flex-row justify-between items-center mt-8 space-y-8 md:space-y-0 md:space-x-6 animate-pop-out">
              <style>
                {`
                 @keyframes popOut {
                   0% {
                     transform: scale(0.5);
                     opacity: 0;
                   }
                   100% {
                     transform: scale(1);
                     opacity: 1;
                   }
                 }
           
                 .animate-pop-out {
                   animation: popOut 0.9s ease-out forwards;
                 }
               `}
              </style>
              {/*-------------------------------------------------- GMP AUDITS ----------------------------------------------*/}
              <div className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/4">
                <img
                  src="/gmpaudits.png"
                  alt="gmp audits"
                  className="w-full h-[230px] object-cover rounded-t-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#34495E] outfit">
                  GMP Audits
                </h3>
                <p className="text-gray-700 mb-4 montserrat">
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                </p>
                <Link to="/gmpaudits">
                  <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 outfit">
                    View More
                  </button>
                </Link>
              </div>

              {/*---------------------------------------- Quality Consulting ----------------------------------------------------*/}
              <div className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/4">
                <img
                  src="/qualityconsult.png"
                  alt="quality consulting"
                  className="w-full h-[230px] object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#34495E] outfit">
                  Quality Consulting
                </h3>
                <p className="text-gray-700 mb-4 montserrat">
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                </p>
                <Link to="/qualityconsulting">
                  <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 outfit">
                    View More
                  </button>
                </Link>
              </div>
              {/*------------------------------------- Computer System Validation -----------------------------------------------*/}
              <div className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/4">
                <img
                  src="/computersysval.png"
                  alt="computer system validations"
                  className="w-full h-[230px] object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#34495E] outfit">
                  Computer System Validation
                </h3>
                <p className="text-gray-700 mb-4 montserrat">
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                </p>
                <Link to="/computersystemvalidations">
                  <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 outfit">
                    View More
                  </button>
                </Link>
              </div>
              {/*------------------------------------- Training -----------------------------------------------*/}
              <div className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/4">
                <img
                  src="/training.png"
                  alt="Training"
                  className="w-full h-[230px] object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#34495E] outfit">
                  Training
                </h3>
                <p className="text-gray-700 mb-4 montserrat">
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                  Description for service one. Description for service one.
                </p>
                <Link to="/training">
                <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 outfit">
                  View More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*------------------------------------------------- Footer -------------------------------------------------------------*/}
      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
