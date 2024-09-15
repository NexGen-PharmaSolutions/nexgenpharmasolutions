import  { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Aboutus = () => {
  const ownerSectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-owner-section");
          }
        });
      },
      { threshold: 0.1 }
    );
    const section = ownerSectionRef.current;
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const wdwdSectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-wdwd-section");
          }
        });
      },
      { threshold: 0.1 }
    );
    const section = wdwdSectionRef.current;
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const hwavSectionDivRef = useRef(null);
  const hwavLeftRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-hwav-div");
            setTimeout(() => {
              const leftItems =
                hwavLeftRef.current.querySelectorAll(".fade-item");
              leftItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("opacity-100");
                }, index * 200);
              });
            }, 1000); // Delay based on the duration of the first animation
          }
        });
      },
      { threshold: 0.1 }
    );
    const sectionDiv = hwavSectionDivRef.current;
    if (sectionDiv) {
      observer.observe(sectionDiv);
    }
    return () => {
      if (sectionDiv) {
        observer.unobserve(sectionDiv);
      }
    };
  }, []);

  const ovSectionDivRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-wngps-div");
          }
        });
      },
      { threshold: 0.1 }
    );
    const sectionDiv = ovSectionDivRef.current;
    if (sectionDiv) {
      observer.observe(sectionDiv);
    }
    return () => {
      if (sectionDiv) {
        observer.unobserve(sectionDiv);
      }
    };
  }, []);

  const omSectionDivRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-wngps-div");
          }
        });
      },
      { threshold: 0.1 }
    );
    const sectionDiv = omSectionDivRef.current;
    if (sectionDiv) {
      observer.observe(sectionDiv);
    }
    return () => {
      if (sectionDiv) {
        observer.unobserve(sectionDiv);
      }
    };
  }, []);

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
          style={{ backgroundImage: "url('/aboutbg.png')" }}
          id="hero"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#c7753f] animate-[pop-out_1s_ease-out_forwards]">
              About Us
            </h1>
            <p className="mt-4 text-[10px] md:text-[16px] text-black inter font-normal animate-[pop-out_1s_ease-out_forwards] md:w-[500px] text-justify">
              NexGen Pharma Solutions is a leading provider of GMP consulting
              and regulatory affairs services. With a team of seasoned experts,
              we offer innovative solutions for pharmaceutical compliance,
              process optimization, and quality assurance. Our comprehensive
              services include GMP audits, DMF preparation, computer system
              validation, and training, ensuring our clients achieve excellence
              and regulatory compliance globally. Dedicated to precision,
              integrity, and client satisfaction, we empower our partners to
              thrive in the highly regulated pharmaceutical industry.
            </p>
          </div>
          <style>{`
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

        {/*----------------------------------------- Owner Section -------------------------------------------------------------*/}
        {/* <section
          ref={ownerSectionRef}
          className="flex flex-col justify-between items-center p-8 gap-8 opacity-0"
          id="owner"
        > */}
        {/*------------------------------------------------- Owner Section Heading -------------------------------------------*/}
        {/* <h2 className="text-3xl md:text-5xl font-semibold outfit text-[#34495E]">
            Owner's Details
            <div className="md:w-[260px] w-[150px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>

          <div className="w-full md:flex md:justify-between bg-black bg-opacity-30 rounded-xl"> */}
        {/*--------------------------------------------------- Owner Image ---------------------------------------------------*/}
        {/* <div className="w-full md:w-1/2 slide-in-left p-4">
              <img
                src="/tempowner.jpg"
                alt="Owner"
                className="w-full md:h-[600px] h-[300px] rounded-br-[50px] rounded-tl-[50px] shadow-lg"
              />
            </div> */}

        {/*---------------------------------------------------- Owner Details ------------------------------------------------*/}
        {/* <div className="w-full md:w-1/2 flex flex-col justify-center slide-in-right mt-8 md:mt-0 p-4 md:space-y-[80px]">
              <h3 className="text-2xl md:text-4xl font-semibold outfit text-[#34495E]">
                Owner's Name
              </h3>
              <p className="mt-4 text-lg md:text-xl inter text-black md:w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
              <p className="mt-2 text-md md:text-lg font-semibold montserrat text-[#34495E]">
                CEO & Founder, Company Name
              </p>
            </div>
          </div>
          <style jsx>{`
            @keyframes slideInLeft {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }

            @keyframes slideInRight {
              0% {
                transform: translateX(10%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }

            .animate-owner-section {
              opacity: 1;
            }

            .animate-owner-section .slide-in-left {
              animation: slideInLeft 1s ease-out forwards;
            }

            .animate-owner-section .slide-in-right {
              animation: slideInRight 1s ease-out forwards;
            }
          `}</style>
        </section> */}

        {/*----------------------------------------- WDWD Section -------------------------------------------------------------*/}
        <section ref={wdwdSectionRef} className="p-8 text-center opacity-0">
          <h2 className="text-3xl md:text-5xl font-semibold outfit text-[#34495E] mb-8">
            What Do We Do
            <div className="md:w-[280px] w-[150px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>
          <div className="container mx-auto px-4 fadeIn">
            <div className="flex justify-center flex-wrap">
              {/* First Row: 3 Cards Centered */}
              <div className="flex flex-wrap justify-center w-full gap-6">
                {/*------------------------------------------ GMP AUDITS ---------------------------------------------------------------*/}
                <div className="bg-transparent shadow-2xl rounded-lg p-4 lg:w-1/4">
                  <div className="flex justify-center items-center">
                    <img
                      src="/GMPlogo.png"
                      alt="GMP Audits"
                      className="w-[200px] h-[200px] object-fit rounded-t-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#34495E] outfit mt-4">
                    GMP Audits
                  </h3>
                  <p className="font-medium md:text-[16px] text-[14px] mt-2 montserrat text-justify">
                  We conduct comprehensive GMP audits to ensure your operations meet regulatory standards.

                  </p>
                  <Link to="/gmpaudits">
                    <button className="mt-4 text-blue-600 font-semibold outfit">
                      Read More
                    </button>
                  </Link>
                </div>
                {/*-------------------------------------- Consulting Services ---------------------------------------------------------*/}
                <div className="bg-transparent shadow-2xl rounded-lg p-4 lg:w-1/4">
                  <div className="flex justify-center items-center">
                    <img
                      src="/CSlogo.png"
                      alt="Consulting Services"
                      className="w-[200px] h-[200px] object-fit rounded-t-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#34495E] outfit mt-4">
                    Consulting Services
                  </h3>
                  <p className="mt-2 montserrat font-medium md:text-[16px] text-[14px] text-justify">
                  Our expert consulting services optimize your manufacturing processes and ensure compliance.

                  </p>
                  <Link to="/qualityconsulting">
                    <button className="mt-4 text-blue-600 font-semibold outfit">
                      Read More
                    </button>
                  </Link>
                </div>
                {/*---------------------------------- Computer System Validations -----------------------------------------------------*/}
                <div className="bg-transparent shadow-2xl rounded-lg p-4 lg:w-1/4">
                  <div className="flex justify-center items-center">
                    <img
                      src="/CSVlogo.png"
                      alt="Computer System Validations"
                      className="w-[200px] h-[200px] object-fit rounded-t-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#34495E] outfit mt-4">
                    Computer System Validations
                  </h3>
                  <p className="montserrat font-medium mt-2 md:text-[16px] text-[14px] text-justify">
                  We validate your computer systems to guarantee data integrity and regulatory adherence.
                  </p>
                  <Link to="/computersystemvalidations">
                    <button className="mt-4 text-blue-600 font-semibold outfit">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-wrap mt-8">
              {/* Second Row: 2 Cards Centered */}
              <div className="flex flex-wrap justify-center w-full gap-6">
                {/*---------------------------------- Training -----------------------------------------------------*/}
                <div className="bg-transparent shadow-2xl rounded-lg p-4 lg:w-1/4">
                  <div className="flex justify-center items-center">
                    <img
                      src="/Trainlogo.png"
                      alt="Training"
                      className="w-[200px] h-[200px] object-fit rounded-t-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#34495E] outfit mt-4">
                    Training
                  </h3>
                  <p className="montserrat font-medium mt-2 md:text-[16px] text-[14px] text-justify">
                  Our tailored training programs equip your staff with essential GMP knowledge and best practices.
                  </p>
                  <Link to="/training">
                    <button className="mt-4 text-blue-600 font-semibold outfit">
                      Read More
                    </button>
                  </Link>
                </div>
                {/*---------------------------------- Regulatory Affairs -----------------------------------------------------*/}
                <div className="bg-transparent shadow-2xl rounded-lg p-4 lg:w-1/4">
                  <div className="flex justify-center items-center">
                    <img
                      src="/regulatorylogo.png"
                      alt="Regulatory Affairs"
                      className="w-[200px] h-[200px] object-fit rounded-t-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#34495E] outfit mt-4">
                    Regulatory Affairs
                  </h3>
                  <p className="montserrat font-medium mt-2 md:text-[16px] text-[14px] text-justify">
                  We manage the preparation and submission of regulatory documents, ensuring smooth approval processes.
                  </p>
                  <Link to="/regulatoryaffairs">
                    <button className="mt-4 text-blue-600 font-semibold outfit">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            .animate-wdwd-section {
              opacity: 1;
              animation: fadeIn 1s ease-out forwards;
            }
          `}</style>
        </section>

        {/*----------------------------------------- HWAV Section -------------------------------------------------------------*/}
        <section
          id="HWAV"
          className="p-8 opacity-0 transition-opacity duration-1000"
          ref={hwavSectionDivRef}
        >
          {/*----------------------------------------- Section Title -----------------------------------------*/}
          <h2 className="text-3xl md:text-5xl text-center font-semibold outfit text-[#34495E] mb-8">
            How We Add Value
            <div className="md:w-[280px] w-[150px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>

          {/*----------------------------------------- Content Div -----------------------------------------*/}
          <div
            ref={hwavSectionDivRef}
            className="flex flex-col lg:flex-row justify-between items-center"
          >
            {/*----------------------------------------- Left Part -----------------------------------------*/}
            <div className="md:w-1/2 w-full p-4 z-10" ref={hwavLeftRef}>
              {/*----------------------------------------- First Item -----------------------------------------*/}
              <div className="flex items-center mb-4 fade-item opacity-0">
                <img src="eteplogo.png" alt="etep" className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold outfit text-[#34495E]">
                    Comprehensive Process Management
                  </h3>
                  <p className="montserrat font-medium text-justify">
                    We enhance manufacturing efficiency and quality while
                    maintaining GMP compliance through process optimization and
                    thorough risk assessments. Our team ensures accurate
                    documentation, comprehensive audit support, and effective
                    quality management systems.
                  </p>
                </div>
              </div>

              {/*----------------------------------------- Vertical Bars -----------------------------------------*/}
              <div className="flex flex-col items-start mb-4 pl-5">
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 fade-item opacity-0"></div>
              </div>

              {/*----------------------------------------- Second Item -----------------------------------------*/}
              <div className="flex items-center mb-4 fade-item opacity-0">
                <img
                  src="ielogo.png"
                  alt="ie"
                  className="w-12 h-12 object-fit mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold outfit text-[#34495E]">
                    Specialized Industrial Expertise
                  </h3>
                  <p className="montserrat font-medium text-justify">
                    NexGen Pharma Solutions provides specialized GMP knowledge
                    and training programs to ensure regulatory compliance. We
                    keep clients informed of regulatory changes to maintain
                    up-to-date practices.
                  </p>
                </div>
              </div>

              {/*----------------------------------------- Vertical Bars -----------------------------------------*/}
              <div className="flex flex-col items-start mb-4 pl-5">
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 fade-item opacity-0"></div>
              </div>

              {/*----------------------------------------- Third Item -----------------------------------------*/}
              <div className="flex items-center mb-4 fade-item opacity-0">
                <img
                  src="gplogo.png"
                  alt="gp"
                  className="w-12 h-12 mr-4 object-fit"
                />
                <div>
                  <h3 className="text-xl font-semibold outfit text-[#34495E]">
                    International Reach
                  </h3>
                  <p className="montserrat font-medium text-justify">
                    We support internal and external audits globally, helping
                    clients prepare and respond effectively. Our team keeps
                    clients current with global regulations and ensures supplier
                    compliance with GMP standards.
                  </p>
                </div>
              </div>

              {/*----------------------------------------- Vertical Bars -----------------------------------------*/}
              <div className="flex flex-col items-start mb-4 pl-5">
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 mb-2 fade-item opacity-0"></div>
                <div className="w-1 h-4 bg-gray-400 fade-item opacity-0"></div>
              </div>

              {/*----------------------------------------- Fourth Item -----------------------------------------*/}
              <div className="flex items-center fade-item opacity-0">
                <img
                  src="csslogo.png"
                  alt="css"
                  className="w-12 h-12 mr-4 object-fit"
                />
                <div>
                  <h3 className="text-xl font-semibold outfit text-[#34495E]">
                    Tailored Solutions
                  </h3>
                  <p className="montserrat font-medium text-justify">
                    Our tailored solutions optimize processes and ensure data
                    integrity. We troubleshoot GMP-related issues, design custom
                    quality systems, and manage supplier compliance with GMP
                    standards.
                  </p>
                </div>
              </div>
            </div>

            {/*----------------------------------------- Right Part -----------------------------------------*/}
            <div
              className="lg:w-1/2 w-full lg:pt-0 pt-4"
              style={{
                display: "flex",
                justifyContent: "flex-end" /* Align children to the right */,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" /* Stack children vertically */,
                  alignItems: "flex-end" /* Align children to the right */,
                }}
              >
                {/* Yellow Rectangle with Rounded Left Side */}
                <div className="bg-[#5D6D7E] w-[310px] md:w-[740px] h-[400px] rounded-l-[120px]"></div>
                {/* Black Rectangle with Rounded Left Side (on top) */}
                <div className="bg-[#1F3A4D] w-[290px] h-[400px] md:w-[710px] rounded-l-[150px] mt-[-400px]"></div>
                <img
                  src="hwad.png"
                  alt="Image 4"
                  className="w-[270px] h-[400px] rounded-l-[180px] md:w-[680px] mt-[-400px]"
                />
              </div>
            </div>
          </div>
          <style>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            .animate-hwav-div {
              animation: fadeIn 1s ease-out forwards;
            }

            .fade-item {
              opacity: 0;
              transition: opacity 0.5s ease-out;
            }

            .fade-item.opacity-100 {
              opacity: 1;
            }
          `}</style>
        </section>

        {/*----------------------------------------- Our Mission -------------------------------------------------------------*/}
        <section id="OM" className="p-8">
          {/*----------------------------------------- Section Title -----------------------------------------*/}
          <h2 className="text-3xl md:text-5xl text-center font-semibold outfit text-[#34495E] mb-8">
            Our Mission
            <div className="md:w-[190px] w-[110px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>

          {/*----------------------------------------- Container Div -----------------------------------------*/}
          <div
            className="opacity-0 transition-opacity duration-1000 ease-out flex flex-col md:flex-row"
            ref={omSectionDivRef}
          >
            {/*----------------------------------------- Left Side -----------------------------------------*/}
            <div className="md:w-[70%] w-full p-4">
              <p className="montserrat font-medium text-justify">
                Our mission at NexGen Pharma Solutions is to deliver exceptional
                GMP consulting services that ensure the highest standards of
                quality, compliance, and safety in pharmaceutical manufacturing.
                We are dedicated to providing expert guidance, innovative
                solutions, and personalized support to help our clients navigate
                complex regulatory environments, optimize their operations, and
                achieve long-term success. By fostering a culture of integrity,
                excellence, and collaboration, we strive to enhance product
                quality and safeguard public health, driving meaningful
                advancements in the global pharmaceutical industry.
              </p>
            </div>

            {/*----------------------------------------- Right Side -----------------------------------------*/}
            <div className="md:w-[30%] w-full p-4">
              <img src="om.jpg" alt="Image" className="w-full h-[200px]" />
            </div>
          </div>

          <style >{`
            @keyframes popOut {
              0% {
                transform: scale(0.8);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            .animate-wngps-div {
              animation: popOut 0.8s ease-out forwards;
            }
          `}</style>
        </section>

        {/*----------------------------------------- Our Vision -------------------------------------------------------------*/}
        <section id="OV" className="p-8">
          {/*----------------------------------------- Section Title -----------------------------------------*/}
          <h2 className="text-3xl md:text-5xl text-center font-semibold outfit text-[#34495E] mb-8">
            Our Vision
            <div className="md:w-[190px] w-[110px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>

          {/*----------------------------------------- Container Div -----------------------------------------*/}
          <div
            className="opacity-0 transition-opacity duration-1000 ease-out flex flex-col md:flex-row"
            ref={ovSectionDivRef}
          >
            {/*----------------------------------------- Left Side -----------------------------------------*/}
            <div className="md:w-[70%] w-full p-4">
              <p className="montserrat font-medium text-justify">
                Our vision at NexGen Pharma Solutions is to be the global leader
                in GMP consulting, driving excellence and innovation in
                pharmaceutical manufacturing. We aim to empower companies with
                the highest standards of quality and regulatory compliance,
                fostering a safer, more efficient, and sustainable healthcare
                industry worldwide. Through our expertise and commitment, we
                envision a future where every product meets uncompromising
                safety and efficacy standards, ensuring better health outcomes
                for all.
                <br />
                <b>Industry-Leading GMP Consulting Services:</b> Dedicated to
                empowering pharmaceutical companies to meet the highest levels
                of quality and regulatory compliance.
                <br />
                <b>Expert Team:</b> Seasoned professionals with deep expertise
                and a hands-on approach to every project. Tailored Solutions:
                Optimizing manufacturing processes and ensuring data integrity.
                Upholding global standards.
                <br />
                <b>Lasting Value:</b> Identifying compliance gaps and
                implementing practical corrective actions. Fostering a culture
                of excellence within clients&apos; organizations.
                <br />
                <b>Commitment to Excellence:</b> Focused on precision,
                integrity, and client satisfaction. Ensuring partners are fully
                prepared for regulatory audits and long-term success.
                <br />
                <b>Operational Efficiency and Product Safety:</b> Helping
                maintain operational efficiency and enhance product safety.
                Achieving sustainable growth through uncompromising quality.
              </p>
            </div>

            {/*----------------------------------------- Right Side -----------------------------------------*/}
            <div className="md:w-[30%] w-full p-4">
              <img src="ov.jpg" alt="Image" className="w-full lg:h-[350px] h-auto" />
            </div>
          </div>

          <style >{`
            @keyframes popOut {
              0% {
                transform: scale(0.8);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            .animate-wngps-div {
              animation: popOut 0.8s ease-out forwards;
            }
          `}</style>
        </section>
        {/*---------------------------------------- Why NGPS Solutions ---------------------------------------------------------*/}
        <section id="WNGPS" className="p-8">
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
            Why NexGen Pharma Solutions
            <div className="md:w-[310px] w-[280px] h-1 mx-auto my-4 bg-[#34495E]"></div>
          </h2>
          <div
            ref={sectionRef}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl px-6"
          >
            {/*---------------------------------------- Innovative Solutions ---------------------------------------------------------*/}
            <div className="card p-6 rounded-lg shadow-2xl text-center">
              <div className="flex justify-center items-center">
                <img
                  src="/inge.png"
                  alt="Innovative Solutions"
                  className="w-[200px] h-[200px] object-fit rounded-t-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold outfit text-[#34495E] mb-2">
                Innovative Solutions
              </h3>
              <p className="montserrat font-medium text-justify">
                At NexGen Pharma Solutions, we offer cutting-edge GMP
                consultation services, leveraging the latest technologies and
                creative problem-solving to ensure compliance and optimize
                efficiency..
              </p>
            </div>
            {/*---------------------------------------- Distinguished Expertise ---------------------------------------------------------*/}
            <div className="card p-6 rounded-lg shadow-2xl text-center">
              <div className="flex justify-center items-center">
                <img
                  src="/illu.png"
                  alt="Distinguished Expertise"
                  className="w-[200px] h-[200px] object-fit rounded-t-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold outfit text-[#34495E] mb-2">
                Distinguished Expertise
              </h3>
              <p className="montserrat font-medium text-justify">
                Our team at NexGen Pharma Solutions brings unparalleled
                expertise and a distinguished track record in GMP regulations,
                providing top-tier consultation services for enhanced
                manufacturing quality.
              </p>
            </div>
            {/*---------------------------------------- Pristine Quality ---------------------------------------------------------*/}
            <div className="card p-6 rounded-lg shadow-2xl text-center">
              <div className="flex justify-center items-center">
                <img
                  src="/imma.png"
                  alt="Pristine Quality"
                  className="w-[200px] h-[200px] object-fit rounded-t-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold outfit text-[#34495E] mb-2">
                Pristine Quality
              </h3>
              <p className="montserrat font-medium text-justify">
                NexGen Pharma Solutions maintains the highest standards of
                quality in GMP processes, ensuring meticulous compliance and
                audit-readiness for all your operations.
              </p>
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

export default Aboutus;
