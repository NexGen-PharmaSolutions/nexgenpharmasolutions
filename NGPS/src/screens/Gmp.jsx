import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Gmp = () => {

  const imgsectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
    const imgsectionElement = imgsectionRef.current;
    if (imgsectionElement) {
      observer.observe(imgsectionElement);
    }
    return () => {
      if (imgsectionElement) {
        observer.unobserve(imgsectionElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E1EAF2]">
      <Helmet>
        <title>GMP Audits - NexGen Pharma Solutions</title>
        <meta name="description" content="NexGen Pharma Solutions provides comprehensive GMP audits to ensure regulatory compliance in the pharmaceutical industry." />
        <meta name="keywords" content="GMP Audits, Pharma Compliance, Regulatory Compliance, Pharmaceutical Audits" />
      </Helmet>
      {/*----------------------------------------- Header -------------------------------------------------------------------*/}
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section
          className="relative flex flex-col justify-center items-center h-[300px] md:h-[600px] bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/gmpaudits.png')" }}
          id="hero"
        >
          <div className="max-w-4xl backdrop-blur-md">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#c7753f] animate-[pop-out_1s_ease-out_forwards]">
              GMP Audits
            </h1>
            <p className=" mt-4 text-[10px] md:text-[16px] inter font-medium animate-[pop-out_1s_ease-out_forwards] md:w-[500px] text-justify">
              NexGen Pharma Solutions conducts thorough GMP audits globally,
              ensuring compliance and quality. Our detailed reports are widely
              recognized and accepted.
            </p>
          </div>
          <style >{`
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
        <section id="GMPD" className="animate-fade-in">
          <div className="max-w-auto mx-auto lg:px-14 md:px-8 px-6 pt-4">
            <div className="mb-8">
              <p className="font-normal inter md:text-[16px] text-[12px] text-justify"><b>
                We conduct high-standard GMP audits for various suppliers
                worldwide, adhering to regulatory standards such as EU GMP, ICH
                Q7, 21 CFR 210/211, and ISO, as requested by our clients. We
                also offer tailor-made audits customized to specific client
                requirements, focusing on particular areas, standards, products,
                systems, criticalities, or for-cause audits.</b>
              </p>
            </div>
            <div className="mb-8">
              <p className="font-normal inter md:text-[16px] text-[12px] text-justify">
                Our audit reports are detailed and of top quality, gaining
                global acceptance from regulators, Qualified Persons (QPs), and
                subject matter experts. We audit a wide range of suppliers,
                including but not limited to:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Left Side (60%) */}
              <div className="md:col-span-3 lg:pl-20">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium text-[10px] md:text-[14px] lg:text-[16px] ">
                  <li>API / API intermediates; sterile/non-sterile</li>
                  <li>Formulated medicinal products; sterile/non-sterile</li>
                  <li>
                    Biological, fermentation-based APIs and formulation products
                  </li>
                  <li>
                    Excipients / Key Starting Materials (KSMs)/ raw materials/
                    cosmetics
                  </li>
                  <li>Contract testing Laboratories</li>
                  <li>Different services providers</li>
                  <li>Distributors; GDP</li>
                  <li>Packaging materials</li>
                  <li>Components used in the pharmaceutical industries</li>
                  <li>
                    Processing sites (i.e. micronization, sterilization,
                    radiation etc.)
                  </li>
                </ul>
              </div>

              {/* Right Side (40%) */}
              <div className="md:col-span-2 lg:pr-8">
                <img
                  src="/gmpinfo.jpg"
                  alt="Photo"
                  className="w-full md:h-[390px] h-[200px] object-cover rounded-2xl"
                />
              </div>
            </div>
            <img ref={imgsectionRef} className="fade-in-up object-cover lg:pt-10 lg:px-10 md:pt-8 pt-8" src="gmpauditsdia.png" alt="gmpauditsdiagram" />
            <style>
            {`
              /* Initial state for the section */
.fade-in-up {
  opacity: 0;
  transform: translateY(90px); /* Start below its final position */
  transition: opacity 1s ease-out, transform 1s ease-out; /* Animation duration */
}

/* Fade in and slide up when in view */
.fade-in-up.show {
  opacity: 1;
  transform: translateY(0); /* Move to its final position */
}

            `}
          </style>
          </div>
          <style >{`
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
      <footer className="p-4 lg:mt-[20px] mt-[20px]">
        <Footer />
      </footer>
    </div>
  );
};

export default Gmp;
