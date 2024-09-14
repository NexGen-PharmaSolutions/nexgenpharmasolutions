import React, { useEffect, useRef } from "react";
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
          className="relative flex flex-col justify-center items-center h-[300px] md:h-[600px] bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/qualityconsult.png')" }}
          id="hero"
        >
          <div className="backdrop-blur-lg max-w-4xl md:mt-[-80px]">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#34495E] animate-[pop-out_1s_ease-out_forwards]">
              Quality Consulting
            </h1>
            <p className="mt-4 text-[10px] md:text-[16px] text-black inter font-medium animate-[pop-out_1s_ease-out_forwards] md:w-[500px] ">
            We craft sustainable solutions to manage compliance, offering proactive measures before audits and responsive actions afterward, leveraging extensive GxP expertise from product development to patient delivery.
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
              <p className="montserrat font-medium text-[12px]">
                At NexGen Pharma Solutions, we conduct rigorous inspections to
                evaluate your processes, systems, and facilities. Our thorough
                assessments ensure that every aspect of your operations meets
                stringent regulatory and quality standards.
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
              <p className="montserrat font-medium text-[12px]">
                We work closely with your team, providing expert guidance and
                support to address compliance issues and implement effective
                solutions. Our collaborative approach ensures seamless
                integration of best practices tailored to your specific needs.
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
              <p className="montserrat font-medium text-[12px]">
                We prepare your organization for successful regulatory audits
                and ongoing compliance. By identifying gaps and implementing
                corrective actions, we ensure your readiness for any regulatory
                scrutiny, safeguarding your operations and reputation.
              </p>
            </div>
          </div>
        </section>
        {/*----------------------------------------- GMP Services -----------------------------------------*/}
        <section id="GMPS" className="p-6">
          {/*----------------------------------------- Top Div with Image and Title -----------------------------------------*/}
          <div className="flex justify-center items-center mb-8 mt-3">
            <img
              src="/gcps.png"
              alt="GMP SERVICE"
              className="w-16 h-16 object-cover mr-4"
            />
            <h1 className="text-2xl md:text-3xl font-semibold outfit text-[#34495E]">
              GMP SERVICE{" "}
              <div className="md:w-[120px] w-[100px] h-1 mx-auto my-4 bg-[#34495E]"></div>
            </h1>
          </div>
          <p className="font-normal inter text-[16px] lg:px-20 md:px-[25px] pb-8">
            Our audit reports are detailed and of top quality, gaining global
            acceptance from regulators, Qualified Persons (QPs), and subject
            matter experts. We audit a wide range of suppliers, including
            but not limited to:
          </p>
          {/* Fade-in Div */}
          <div
            id="fadeDiv"
            className="opacity-0 transition-opacity duration-1000 ease-in-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:px-0 md:px-[25px]">
              {/* Left Side (60%) */}
              <div className="md:col-span-3 lg:pl-20">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium text-[10px]">
                  <li>
                    GMP Audits We conduct thorough and detailed GMP audits to
                    ensure your operations are compliant with international
                    standards such as EU GMP, ICH Q7, 21 CFR 210/211, and ISO.
                    Our audits cover all types of suppliers and can be
                    customized to focus on specific areas, products, or systems
                    as needed.
                  </li>
                  <li>
                    Quality Consulting Our quality consulting services help you
                    optimize your manufacturing processes and systems. We
                    provide expert advice and support on all aspects of GMP
                    compliance, from initial assessments to implementation of
                    best practices and corrective actions.
                  </li>
                  <li>
                    Computer System Validation (CSV) We ensure your computer
                    systems are reliable and compliant with industry regulations
                    through meticulous validation processes. Our CSV services
                    guarantee data integrity, system accuracy, and regulatory
                    adherence, supporting seamless audits and operations.
                  </li>
                  <li>
                    Training and Development We offer comprehensive training
                    programs designed to equip your staff with the knowledge and
                    skills required for GMP compliance. Our training covers
                    regulatory requirements, best practices, and practical
                    applications to ensure your team is well-prepared to
                    maintain high standards of quality.
                  </li>
                  <li>
                    Regulatory Affairs Our regulatory affairs services include
                    the preparation and submission of Drug Master Files (DMFs)
                    and other regulatory documents. We ensure your submissions
                    are thorough, accurate, and compliant with global regulatory
                    standards, facilitating smooth approval processes.
                  </li>
                  <li>
                    Supplier Qualification and Management We assist in
                    evaluating and managing your suppliers to ensure they meet
                    GMP standards. Our supplier qualification services include
                    risk assessments, audits, and ongoing monitoring to maintain
                    high-quality supply chains.
                  </li>
                </ul>
              </div>

              {/* Right Side (40%) */}
              <div className="md:col-span-2 lg:pr-12">
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
        <section id="WCNGPS" className="p-6 lg:px-[100px] md:px-[50px]">
          {/* Title */}
          <div className="mb-8 ">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold outfit text-[#34495E]">
              Why Choose NexGen Pharma Solutions
            </h2>
            <div className="md:w-[570px] w-[260px] h-1 lg:ml-[30px] md:ml-0 ml-5 my-4 bg-[#34495E]"></div>
          </div>

          {/*----------------------------------------- Fade-in Divs -----------------------------------------*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-div opacity-0 transition-opacity duration-1000 ease-in-out">
            {/*----------------------------------------- Industry-Leading GMP Consulting Services: -----------------------------------------*/}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-1/3">
                  <img
                    src="/consultation.png"
                    alt="Industry-Leading GMP Consulting Services"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                  Industry-Leading GMP Consulting Services:
                  </h3>
                  <p className="text-[12px] montserrat font-medium">
                  Dedicated to empowering pharmaceutical companies to meet the highest levels of quality and regulatory compliance.
                  </p>
                </div>
              </div>
              {/*----------------------------------------- Expert Team: -----------------------------------------*/}
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    src="/experts.png"
                    alt="Expert Team:"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                  Expert Team:
                  </h3>
                  <p className="text-[12px] montserrat font-medium">
                  Seasoned professionals with deep expertise and a hands-on approach to every project.
                  </p>
                </div>
              </div>
            </div>

            {/*----------------------------------------- Tailored Solutions: -----------------------------------------*/}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-1/3">
                  <img
                    src="/ossolution.png"
                    alt="Tailored Solutions:"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                  Tailored Solutions:
                  </h3>
                  <p className="text-[12px] montserrat font-medium">
                  Optimizing manufacturing processes and ensuring data integrity.
                  Upholding global standards.
                  </p>
                </div>
              </div>
              {/*----------------------------------------- Lasting Value: -----------------------------------------*/}
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    src="/lasting.png"
                    alt="Lasting Value:"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                  Lasting Value:
                  </h3>
                  <p className="text-[12px] montserrat font-medium">
                  Identifying compliance gaps and implementing practical corrective actions.
                  Fostering a culture of excellence within clients' organizations.
                  </p>
                </div>
              </div>
            </div>

            {/*----------------------------------------- Commitment to Excellence: -----------------------------------------*/}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-1/3">
                  <img
                    src="/commitment.png"
                    alt="Commitment to Excellence:"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[16px]">
                  Commitment to Excellence:
                  </h3>
                  <p className="text-[12px] montserrat font-medium">
                  Focused on precision, integrity, and client satisfaction.
                  Ensuring partners are fully prepared for regulatory audits and long-term success.
                  </p>
                </div>
              </div>
              {/*----------------------------------------- Operational Efficiency and Product Safety: -----------------------------------------*/}
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    src="/opertional.png"
                    alt="Operational Efficiency and Product Safety:"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-semibold outfit text-[#34495E] text-[14px]">
                  Operational Efficiency and Product Safety:
                  </h3>
                  <p className="text-[12px] montserrat font-medium">
                  Helping maintain operational efficiency and enhance product safety.
                  Achieving sustainable growth through uncompromising quality.
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
