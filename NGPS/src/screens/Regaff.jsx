import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Regaff = () => {
  const PRSfadeInRef = useRef(null);
  const NGPSPfadeInRef = useRef(null);
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

    const PRSfadeInElement = PRSfadeInRef.current;
    const NGPSPfadeInElement = NGPSPfadeInRef.current;

    if (PRSfadeInElement) {
      observer.observe(PRSfadeInElement);
    }
    if (NGPSPfadeInElement) {
      observer.observe(NGPSPfadeInElement);
    }
    return () => {
      if (PRSfadeInElement) {
        observer.unobserve(PRSfadeInElement);
      }
      if (NGPSPfadeInElement) {
        observer.unobserve(NGPSPfadeInElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E1EAF2]">
      <Helmet>
        <title>Regulatory Affairs - NexGen Pharma Solutions</title>
        <meta name="description" content="NexGen Pharma Solutions offers regulatory affairs consulting to help pharmaceutical companies navigate complex regulations." />
        <meta name="keywords" content="Regulatory Affairs, Pharma Regulations, Regulatory Consulting, Pharmaceutical Consulting" />
      </Helmet>
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section
          className="relative flex flex-col justify-center items-center h-[300px] md:h-[600px] bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/regbg.png')" }}
          id="hero"
        >
          <div className="max-w-4xl backdrop-blur-2xl ">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#c7753f] animate-[pop-out_1s_ease-out_forwards] text-center">
              Regulatory Affairs
            </h1>
            <p className="mt-4 text-[10px] md:text-xl text-black inter font-medium animate-[pop-out_1s_ease-out_forwards] md:w-[600px] text-justify ">
              We specialize in the meticulous preparation and submission of
              regulatory documents, ensuring your products meet global
              compliance standards. Our regulatory affairs team stays up-to-date
              with the latest regulations, facilitating smooth approval
              processes and helping you navigate the complex landscape of
              pharmaceutical regulations.
            </p>
          </div>
          <style>
            {`
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
          `}
          </style>
        </section>
        {/*------------------------------------------ NGPSP Info ------------------------------------------*/}
        <section id="NGPSPIN" className="md:py-16 py-8 px-4 md:px-8">
          <h3 className="text-[14px] md:text-lg inter font-semibold text-left mb-4">
            At NexGen Pharma Solutions, we simplify pharmaceutical regulatory
            processes with:
          </h3>
          <div
            ref={NGPSPfadeInRef}
            className="opacity-0 transition-opacity duration-1000 ease-in-out"
          >
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              {/*------------------------------------------ Expert Regulatory Guidance ------------------------------------------*/}
              <div className="p-4 rounded-2xl shadow-2xl flex-1">
                <img
                  src="/expertguidance.png"
                  alt="c&tsve"
                  className="h-20 w-20 mx-auto mb-4"
                />
                <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
                  Expert Regulatory Guidance
                </h4>
                <p className="text-[12px] md:text-[14px] font-medium montserrat text-justify">
                  We navigate complex global regulations to ensure your
                  submissions are precise, compliant, and timely.
                </p>
              </div>
              {/*------------------------------------------ Strategic Risk Management ------------------------------------------*/}
              <div className="p-4 rounded-2xl shadow-2xl flex-1">
                <img
                  src="/riskmanagement.png"
                  alt="comtcom"
                  className="h-20 w-20 mx-auto mb-4"
                />
                <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
                  Strategic Risk Management
                </h4>
                <p className="text-[12px] md:text-[14px] font-medium montserrat text-justify">
                  From product development to post-market monitoring, we provide
                  seamless support at every stage of the regulatory journey.
                </p>
              </div>
              {/*------------------------------------------ Comprehensive Lifecycle Support ------------------------------------------*/}
              <div className="p-4 rounded-2xl shadow-2xl flex-1">
                <img
                  src="/lifecycle.png"
                  alt="confidence"
                  className="h-20 w-20 mx-auto mb-4"
                />
                <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
                  Comprehensive Lifecycle Support
                </h4>
                <p className="text-[12px] md:text-[14px] font-medium montserrat text-justify">
                  Our meticulous processes guarantee accuracy, reliability, and
                  consistency, preserving data integrity and delivering
                  dependable results for our clients.
                </p>
              </div>
            </div>
          </div>
          <style>
            {`
            .fade-in {
              opacity: 1 !important;
            }
          `}
          </style>
        </section>
        {/*------------------------------------------ PRS Info ------------------------------------------*/}
        <section id="PRSIN" className="md:py-16 py-8 px-4 md:px-8">
          <h3 className="text-[14px] md:text-lg inter font-semibold mb-4 text-justify">
            We provide complete support for Pharma Regulatory services with our
            expert Pharma Regulatory Affairs consulting services for global
            markets, particularly in the EU and US.
          </h3>
          <p className="text-[12px] md:text-[14px] montserrat font-medium mb-6 text-justify">
            NexGen Pharma Solutions has a highly experienced team of experts who
            have a complete understanding of the complete requirements of Pharma
            Regulatory affairs throughout the drug life cycle. Our experts have
            experience in directly corresponding with Pharma regulatory
            authorities for various segments.
          </p>
          <div
            ref={PRSfadeInRef}
            className="opacity-0 transition-opacity duration-1000 ease-in-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/*------------------------------------------ Left div ------------------------------------------*/}
              <div className="p-4 rounded-2xl shadow-2xl">
                <h1 className="text-sm md:text-[16px] outfit font-medium text-left mb-4">
                  <b>Regulatory Services Pre-Submission Services</b>
                </h1>
                <ul className="list-disc list-inside space-y-4 montserrat font-medium md:text-[12px] text-[11px] ">
                  <li>
                    Registration and self-identification i.e. D-U-N-S number,
                    FEI number request
                  </li>
                  <li>
                    Compilation and Investigational New Drug - IND Application
                  </li>
                  <li>Compilation and New Drug Application - (NDA)</li>
                  <li>
                    Compilation and Abbreviated New Drug Application (ANDA)
                  </li>
                  <li>
                    Compilation and Investigational Medicinal Product Dossier
                    (IMPD)
                  </li>
                  <li>
                    Marketing Authorization Application (MAA) to Europe via
                    appropriate procedure
                  </li>
                  <li>MAAs for Biosimilar product</li>
                  <li>Certification of suitability for EU</li>
                </ul>
              </div>
              {/*------------------------------------------ Mid Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl shadow-2xl">
                <h1 className="text-sm md:text-[16px] outfit font-medium text-left mb-4">
                  <b>Regulatory Affairs During Submission Services</b>
                </h1>
                <ul className="list-disc list-inside space-y-4 montserrat font-medium md:text-[12px] text-[11px]">
                  <li>
                    Expert help in addressing Regulatory queries and concern
                    like RTR, Further information request
                  </li>
                  <li>Control correspondence with Regulatory agency</li>
                  <li>
                    Preparation of response/Justification/clarification
                    documents for regulatory queries are.
                  </li>
                  <li>Dossiers for emerging countries (RoW market)</li>
                </ul>
              </div>
              {/*------------------------------------------ Right Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl shadow-2xl">
                <h1 className="text-sm md:text-[16px] outfit font-medium text-left mb-4">
                  <b>Regulatory Affairs Post Submission</b>
                </h1>
                <ul className="list-disc list-inside space-y-4 montserrat font-medium md:text-[12px] text-[11px]">
                  <li>Post approval updates</li>
                  <li>Renewal of Dossier</li>
                  <li>Annual Report for post MAA</li>
                  <li>
                    Registered Dossier Extension to other regulated or emerging
                    markets
                  </li>
                  <li>Dossier preparation to resubmission</li>
                  <li>
                    Review of Rejection of Application and designing
                    justification report
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <style>
            {`
            .fade-in {
              opacity: 1 !important;
            }
          `}
          </style>
        </section>
      </main>
      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Regaff;
