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
            <div className="card-container mt-8 animate-pop-out">
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
              <div className="flex justify-center flex-wrap">
                {/* First Row: 3 Cards Centered */}
                <div className="flex flex-wrap justify-center w-full gap-6">
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
                    <p className="text-gray-700 mb-4 montserrat text-sm">
                      NexGen Pharma Solutions has been the most credible pattern
                      for GMP Audit Service. We have a team of highly
                      experienced GMP Auditors with comprehensive experience in
                      conducting GMP audit services across the globe. Our GMP
                      auditors are highly qualified and have undertaken numerous
                      audits of API, Intermediates, Key Starting Materials,
                      Packaging Material Facilities and Finished dosage plants.
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
                    <p className="text-gray-700 mb-4 montserrat text-sm">
                      NexGen Pharma Solutions offers expert GMP consulting to
                      ensure compliance with global quality standards. Our
                      experienced team provides tailored advice on GMP
                      regulations for pharmaceuticals, covering APIs,
                      intermediates, packaging, and finished products. We help
                      identify compliance gaps, implement corrective actions,
                      and support successful regulatory audits and inspections
                      globally.
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
                    <p className="text-gray-700 mb-4 montserrat text-sm">
                      NexGen Pharma Solutions offers GMP-compliant computer
                      system validation services to ensure your systems meet
                      regulatory standards. Our expert team ensures data
                      integrity, system reliability, and compliance with
                      industry guidelines for seamless audits. We provide
                      comprehensive validation plans, risk assessments, and
                      continuous support to maintain your systems optimal
                      performance and compliance.
                    </p>
                    <Link to="/computersystemvalidations">
                      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 outfit">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-wrap mt-8">
                {/* Second Row: 2 Cards Centered */}
                <div className="flex flex-wrap justify-center w-full gap-6">
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
                    <p className="text-gray-700 mb-4 montserrat text-sm">
                      NexGen Pharma Solutions offers comprehensive GMP training
                      tailored to your team's needs. Our expert-led sessions
                      cover key areas of Good Manufacturing Practices, ensuring
                      staff understand regulatory requirements, quality
                      standards, and best practices. We help enhance operational
                      efficiency, maintain compliance, and prepare for
                      successful audits, fostering a culture of quality in your
                      organization.
                    </p>
                    <Link to="/training">
                      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 outfit">
                        View More
                      </button>
                    </Link>
                  </div>
                  {/*------------------------------------- Regulatory Affairs -----------------------------------------------*/}
                  <div className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/4">
                    <img
                      src="/training.png"
                      alt="Regulatory Affairs"
                      className="w-full h-[230px] object-cover rounded-t-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#34495E] outfit">
                      Regulatory Affairs
                    </h3>
                    <p className="text-gray-700 mb-4 montserrat text-sm">
                      At NexGen Pharma Solutions, we excel in preparing and
                      submitting Drug Master Files (DMFs) for regulatory
                      approval. Our services include meticulous documentation,
                      technical writing, compliance with cGMP, and handling
                      submissions and inquiries. We ensure confidentiality and
                      manage all DMF types, ensuring your pharmaceutical
                      products meet the highest regulatory standards and
                      facilitate smooth approval processes.
                    </p>
                    <Link to="/regulatoryaffairs">
                      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 outfit">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
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
