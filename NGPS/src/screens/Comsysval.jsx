import  { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Computer System Validation - NexGen Pharma Solutions</title>
        <meta name="description" content="Our experts at NexGen Pharma Solutions offer reliable computer system validation services to meet industry regulations." />
        <meta name="keywords" content="Computer System Validation, CSV, Pharma Compliance, Validation Services" />
      </Helmet>
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section
          className="relative flex flex-col justify-center items-center h-[300px] md:h-[600px] bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/csv3.jpg')" }}
          id="hero"
        >
          <div className="max-w-4xl backdrop-blur-2xl">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#c7753f] animate-[pop-out_1s_ease-out_forwards]">
              Computer System Validations
            </h1>
            <p className="mt-4 text-[10px] md:text-[16px] text-black text-justify inter font-medium animate-[pop-out_1s_ease-out_forwards] md:w-[800px]">
              At NexGen Pharma Solutions, we ensure that your computerized
              systems used in GxP processes, from production to quality control,
              meet necessary qualifications and are fully validated. By
              employing a risk-based approach guided by the GAMP 5 &rsquo;V-Model,&rsquo; we
              safeguard product quality, data accuracy, and patient safety
              through comprehensive planning, setup, verification, and
              reporting.
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
        {/*------------------------------------------ WSWBS ------------------------------------------*/}
        <section id="WSWBS" className="py-16 px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold outfit text-[#34495E] text-center mb-8">
            We are specialized in validating below systems
            <div className="md:w-[320px] w-[140px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>
          <h3 className="text-[14px] md:text-xl inter font-medium text-left mb-4">
            NexGen Pharma Solutions offers complete end-end solutions for
            validation as per USFDA 21 CFR Part 11 and EU Annex 11. The systems
            consist of:
          </h3>
          <div
            ref={fadeInRef}
            className="opacity-0 transition-opacity duration-700 ease-in-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  lg:text-[16px] md:text-[14px] text-[12px]">
              {/*------------------------------------------ Left div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium ">
                  <li>Local Control System (SCADA, PLC)</li>
                  <li>Plant Control System (SCADA, PLC)</li>
                  <li>Data Integrity Risk Assessment</li>
                  <li>Computer System Validation</li>
                  <li>
                    Building Management System, Environment management system
                  </li>
                </ul>
              </div>
              {/*------------------------------------------ Mid Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Manufacturing Equipment</li>
                  <li>CAPA System</li>
                  <li>Automated Packaging & Labeling Equipment</li>
                  <li>Track & Trace system</li>
                  <li>Sterilization System</li>
                  <li>Laboratory Systems (LIMS: Stand-alone & networked)</li>
                </ul>
              </div>
              {/*------------------------------------------ Right Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Management Systems (ERP, SAP)</li>
                  <li>Document Management System</li>
                  <li>Warehouse Management System</li>
                  <li>E-BMR System</li>
                  <li>Sterilization System</li>
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
          {/*------------------------------------------ Efficiency and Cost Reduction ------------------------------------------*/}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/c&tsave.png"
                alt="c&tsve"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
                Efficiency and Cost Reduction
              </h4>
              <p className="text-[12px] md:text-[14px] font-medium montserrat text-justify">
                By adopting effective CSV and CSA practices, we ensure timely
                compliance and significant reductions in operational costs.
              </p>
            </div>
            {/*------------------------------------------ Dedicated to Compliance ------------------------------------------*/}
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/comtcom.png"
                alt="comtcom"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
                Dedicated to Compliance
              </h4>
              <p className="text-[12px] md:text-[14px] font-medium montserrat text-justify">
                We rigorously adhere to 21 CFR Part 11 and Annex 11 standards,
                providing clear evidence and comprehensive audit trails.
              </p>
            </div>
            {/*------------------------------------------ Assurance ------------------------------------------*/}
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/confidence.png"
                alt="confidence"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
                Assurance
              </h4>
              <p className="text-[12px] md:text-[14px] font-medium montserrat text-justify">
                Our meticulous processes guarantee accuracy, reliability, and
                consistency, preserving data integrity and delivering dependable
                results for our clients.
              </p>
            </div>
            {/*------------------------------------------ Flexible Execution Models ------------------------------------------*/}
            <div className="p-4 rounded-2xl shadow-2xl flex-1">
              <img
                src="/hybrid.png"
                alt="Flexible Execution Models"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-bold outfit text-[#34495E] text-center mb-2">
                Flexible Execution Models
              </h4>
              <p className="text-[12px] md:text-[14px] font-medium montserrat text-justify">
                We offer adaptable delivery models utilizing Onsite, Remote, and
                Offshore resources to meet your specific needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-4">
        <Footer />
      </footer>
      <style >{`
        .fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Comsysval;
