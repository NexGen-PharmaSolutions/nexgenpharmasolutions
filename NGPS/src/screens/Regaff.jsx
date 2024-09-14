import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Regaff = () => {
  const fadeInRef = useRef(null);
  const PRSfadeInRef = useRef(null);
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
    const PRSfadeInElement = PRSfadeInRef.current;
    if (fadeInElement) {
      observer.observe(fadeInElement);
    }
    if (PRSfadeInElement) {
      observer.observe(PRSfadeInElement);
    }
    return () => {
      if (fadeInElement) {
        observer.unobserve(fadeInElement);
      }
      if (PRSfadeInElement) {
        observer.unobserve(PRSfadeInElement);
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
          className="relative flex flex-col justify-center items-center h-[300px] md:h-[600px] bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/regbg.png')" }}
          id="hero"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#34495E] animate-[pop-out_1s_ease-out_forwards]">
              Regulatory Affairs
            </h1>
            <p className="mt-4 text-[14px] md:text-xl text-black inter font-medium animate-[pop-out_1s_ease-out_forwards] md:w-[500px] ">
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
        {/*------------------------------------------ RA Info ------------------------------------------*/}
        <section id="RAIN" className="md:py-16 py-8 px-4 md:px-8">
          <h3 className="text-[12px] md:text-lg inter font-semibold text-left mb-4">
            Information is Strength, and Technology is Rapidly Advancing. To
            Stay Ahead in the Competitive Landscape, particularly as a
            Pharmaceutical Professional, it's Essential to Stay Up-to-Date on
            the Latest Developments, Cutting-Edge Innovations, and Global
            Regulatory Changes. At NexGen Pharma Solutions, We Design and
            Deliver Tailored Training Initiatives for Pharma and Biotech
            Experts. Respected and Seasoned International Authorities Share
            their Insights and Expertise, Offering Practical Strategies for
            Real-World Challenges :
          </h3>
          <div
            ref={fadeInRef}
            className="opacity-0 transition-opacity duration-1000 ease-in-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] md:text-[14px]">
              {/*------------------------------------------ Left div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Interactive Learning Modules</li>
                  <li>Expert-Led Instruction</li>
                  <li>Flexible Training Formats</li>
                  <li>QUALITY METRICS</li>
                </ul>
              </div>
              {/*------------------------------------------ Mid Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>BEHAVIORAL GMP</li>
                  <li>CAPA/RCA</li>
                  <li>TRAIN THE TRAINER</li>
                  <li>AUDIT ACUMEN</li>
                  <li>DATA INTEGRITY</li>
                </ul>
              </div>
              {/*------------------------------------------ Right Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>TECHNICAL WRITING</li>
                  <li>QUALITY RISK MANAGEMENT</li>
                  <li>INVESTIGATIVE REPORT WRITING</li>
                  <li>COMPUTER SYSTEM VALIDATION</li>
                </ul>
              </div>
            </div>
            <p className="text-[12px] md:text-lg montserrat font-medium text-left">
              Join us to build a foundation of quality that enhances your
              reputation and meets regulatory requirements.
            </p>
          </div>
          <style jsx>{`
            .fade-in {
              opacity: 1 !important;
            }
          `}</style>
        </section>
        {/*------------------------------------------ PRS Info ------------------------------------------*/}
        <section id="PRSIN" className="md:py-16 py-8 px-4 md:px-8">
          <h3 className="text-[14px] md:text-lg inter font-semibold text-left mb-4">
            We provide complete support for Pharma Regulatory services with our
            expert Pharma Regulatory Affairs consulting services for global
            markets, particularly in the EU and US.
          </h3>
          <p className="text-[12px] md:text-[14px] montserrat font-medium text-left mb-4">
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
              <div className="p-4 rounded-2xl">
                <h1 className="text-sm md:text-[16px] outfit font-medium text-left mb-4"><b>Regulatory Services Pre-Submission Services</b></h1>
                <ul className="list-disc list-inside space-y-4 montserrat font-medium md:text-[12px] text-[11px]">
                  <li>Registration and self-identification i.e. D-U-N-S number, FEI number request</li>
                  <li>Compilation and Investigational New Drug - IND Application</li>
                  <li>Compilation and New Drug Application - (NDA)</li>
                  <li>Compilation and Abbreviated New Drug Application (ANDA)</li>
                  <li>Compilation and Investigational Medicinal Product Dossier (IMPD)</li>
                  <li>Marketing Authorization Application (MAA) to Europe via appropriate procedure</li>
                  <li>MAAs for Biosimilar product</li>
                  <li>Certification of suitability for EU</li>
                </ul>
              </div>
              {/*------------------------------------------ Mid Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
              <h1 className="text-sm md:text-[16px] outfit font-medium text-left mb-4"><b>Regulatory Affairs During Submission Services</b></h1>
                <ul className="list-disc list-inside space-y-4 montserrat font-medium md:text-[12px] text-[11px]">
                  <li>Expert help in addressing Regulatory queries and concern like RTR, Further information request</li>
                  <li>Control correspondence with Regulatory agency</li>
                  <li>Preparation of response/Justification/clarification documents for regulatory queries are.</li>
                  <li>Dossiers for emerging countries (RoW market)</li>
                </ul>
              </div>
              {/*------------------------------------------ Right Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
              <h1 className="text-sm md:text-[16px] outfit font-medium text-left mb-4"><b>Regulatory Affairs Post Submission</b></h1>
                <ul className="list-disc list-inside space-y-4 montserrat font-medium md:text-[12px] text-[11px]">
                  <li>Post approval updates</li>
                  <li>Renewal of Dossier</li>
                  <li>Annual Report for post MAA</li>
                  <li>Registered Dossier Extension to other regulated or emerging markets</li>
                  <li>Dossier preparation to resubmission</li>
                  <li>Review of Rejection of Application and designing justification report</li>
                </ul>
              </div>
            </div>
          </div>
          <style jsx>{`
            .fade-in {
              opacity: 1 !important;
            }
          `}</style>
        </section>
      </main>
      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Regaff;
