import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    requirement: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const servicesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-pop-out");
          }
        });
      },
      { threshold: 0.1 }
    );
    const cardContainer = servicesRef.current?.querySelector(".card-container");
    if (cardContainer) observer.observe(cardContainer);
    return () => {
      if (cardContainer) observer.unobserve(cardContainer);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual email API)
    setTimeout(() => {
      setSubmitMessage("Thank you! Your inquiry has been received. We'll contact you within 24 hours.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        productType: "",
        requirement: "",
        timeline: ""
      });
      
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>NexGen Pharma Solutions Pvt. Ltd. | Premier Pharmaceutical Consulting & GMP Audits</title>
        <meta
          name="description"
          content="NexGen Pharma Solutions Private Limited - Your trusted partner for GMP audits, quality systems, regulatory affairs, validation, and corporate training. Serving global pharma manufacturers with proven expertise."
        />
        <meta
          name="keywords"
          content="Pharma Consulting, GMP Audits, Quality Systems, Regulatory Affairs, Computer System Validation, Pharmaceutical Training, EDQM, USFDA, DMF, CEP"
        />
      </Helmet>
      
      {/*----------------------------------------- Header -------------------------------------------------------------------*/}
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="relative z-10">
        {/*-------------------------------------------- Hero Section -------------------------------------------------------------*/}
        <section
          id="hero"
          className="relative min-h-[500px] md:min-h-[650px] bg-gradient-to-br from-[#475569] via-[#64748b] to-[#475569] flex items-center justify-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Logo and Company Name */}
              <div className="mb-8 animate-fade-in">
                <img
                  src="/logo.png"
                  alt="NexGen Pharma Solutions"
                  className="mx-auto w-24 h-24 md:w-32 md:h-32 mb-6"
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 outfit leading-tight">
                  NexGen Pharma Solutions
                </h1>
                <div className="w-24 h-1 bg-[#93C5FD] mx-auto mb-6"></div>
              </div>

              {/* Value Proposition */}
              <div className="space-y-6 mb-10 animate-slide-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold outfit leading-tight">
                  Trusted Pharmaceutical Consulting & Compliance Partner
                </h2>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto outfit">
                  Serving global pharma manufacturers with expert GMP audits, quality systems, 
                  regulatory affairs, and validation services. Your pathway to compliance excellence.
                </p>
              </div>

              {/* Who We Serve */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm md:text-base font-semibold outfit">API Manufacturers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm md:text-base font-semibold outfit">Sterile Facilities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm md:text-base font-semibold outfit">FDF Plants</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm md:text-base font-semibold outfit">QA/QC Leaders</p>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes slideUp {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in { animation: fadeIn 1s ease-in; }
            .animate-slide-up { animation: slideUp 1s ease-out 0.3s backwards; }
          `}</style>
        </section>
        {/*--------------------------------------- Our Services Section ----------------------------------------------------------*/}
        <section id="our-services" className="py-12" ref={servicesRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-semibold outfit text-[#111827]">
              Our Services
            </h2>
            <div className="w-[150px] h-1 mx-auto my-4 bg-[#3B82F6]"></div>
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
                  <div className="bg-white p-5 rounded-2xl shadow-md w-full lg:w-1/4">
                    <img
                      src="/gmpaudits.png"
                      alt="gmp audits"
                      className="w-full h-[230px] object-cover rounded-t-xl mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#111827] outfit">
                      GMP Audits
                    </h3>
                    <p className="text-gray-700 mb-4 montserrat text-sm text-justify">
                      NexGen Pharma Solutions has been the most credible pattern
                      for GMP Audit Service. We have a team of highly
                      experienced GMP Auditors with comprehensive experience in
                      conducting GMP audit services across the globe. Our GMP
                      auditors are highly qualified and have undertaken numerous
                      audits of API, Intermediates, Key Starting Materials,
                      Packaging Material Facilities and Finished dosage plants.
                    </p>
                    <Link to="/gmpaudits">
                      <button className="mt-auto bg-[#3B82F6] text-white py-2 px-4 rounded-full hover:bg-[#2563EB] transition duration-200 outfit">
                        View More
                      </button>
                    </Link>
                  </div>

                  {/*---------------------------------------- Quality Consulting ----------------------------------------------------*/}
                  <div className="bg-white p-5 rounded-2xl shadow-md w-full lg:w-1/4">
                    <img
                      src="/qualityconsult.png"
                      alt="quality consulting"
                      className="w-full h-[230px] object-cover rounded-t-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#111827] outfit">
                      Quality Consulting
                    </h3>
                    <p className="text-gray-700 mb-4 montserrat text-sm text-justify">
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
                      <button className="mt-auto bg-[#3B82F6] text-white py-2 px-4 rounded-full hover:bg-[#2563EB] transition duration-200 outfit">
                        View More
                      </button>
                    </Link>
                  </div>
                  {/*------------------------------------- Computer System Validation -----------------------------------------------*/}
                  <div className="bg-white p-5 rounded-2xl shadow-md w-full lg:w-1/4">
                    <img
                      src="/computersysval.png"
                      alt="computer system validations"
                      className="w-full h-[230px] object-cover rounded-t-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#111827] outfit">
                      Computer System Validation
                    </h3>
                    <p className="text-gray-700 mb-4 montserrat text-sm text-justify">
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
                      <button className="mt-auto bg-[#3B82F6] text-white py-2 px-4 rounded-full hover:bg-[#2563EB] transition duration-200 outfit">
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
                  <div className="bg-white p-5 rounded-2xl shadow-md w-full lg:w-1/4">
                    <img
                      src="/training.png"
                      alt="Training"
                      className="w-full h-[230px] object-cover rounded-t-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#111827] outfit">
                      Training
                    </h3>
                    <p className="text-gray-700 mb-4 montserrat text-sm text-justify">
                      NexGen Pharma Solutions offers comprehensive GMP training
                      tailored to your team&rsquo;s needs. Our expert-led
                      sessions cover key areas of Good Manufacturing Practices,
                      ensuring staff understand regulatory requirements, quality
                      standards, and best practices. We help enhance operational
                      efficiency, maintain compliance, and prepare for
                      successful audits, fostering a culture of quality in your
                      organization.
                    </p>
                    <Link to="/training">
                      <button className="mt-auto bg-[#3B82F6] text-white py-2 px-4 rounded-full hover:bg-[#2563EB] transition duration-200 outfit">
                        View More
                      </button>
                    </Link>
                  </div>
                  {/*------------------------------------- Regulatory Affairs -----------------------------------------------*/}
                  <div className="bg-white p-5 rounded-2xl shadow-md w-full lg:w-1/4">
                    <img
                      src="/regbg.png"
                      alt="Regulatory Affairs"
                      className="w-full h-[200px] object-cover rounded-t-lg mb-[40px]"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-[#111827] outfit">
                      Regulatory Affairs
                    </h3>
                    <p className="text-gray-700 mb-4 montserrat text-sm text-justify">
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
                      <button className="mt-auto bg-[#3B82F6] text-white py-2 px-4 rounded-full hover:bg-[#2563EB] transition duration-200 outfit">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- Proven Strengths Section ----------------------------------------------------------*/}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] outfit">
                Proven Strengths
              </h2>
              <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
              <p className="text-gray-600 max-w-2xl mx-auto outfit">
                Why global pharma manufacturers trust NexGen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#3B82F6] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">EDQM & USFDA Audit Expertise</h3>
                    <p className="text-gray-600 text-sm">Mock audits mirroring actual regulatory inspections. Proven track record across API, sterile, and FDF facilities.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#93C5FD] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Rapid Remediation Execution</h3>
                    <p className="text-gray-600 text-sm">Close critical deviations, CAPAs, and data integrity gaps fast. No generic templates—only practical solutions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#3B82F6] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">DMF & CEP Support</h3>
                    <p className="text-gray-600 text-sm">Technical documentation, authority responses, lifecycle management. Confidential, compliant, submission-ready.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#93C5FD] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">CSV & Data Integrity Focus</h3>
                    <p className="text-gray-600 text-sm">GAMP 5, 21 CFR Part 11, Annex 11 validation. LIMS, ERP, MES systems validated to regulatory standards.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#3B82F6] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Seasoned Auditor Network</h3>
                    <p className="text-gray-600 text-sm">Former regulators, industry QA heads, validation specialists. Real-world expertise, not theory.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#93C5FD] hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Flexible Engagement Models</h3>
                    <p className="text-gray-600 text-sm">Project-based, retainer, or embedded support. Scale up or down based on your needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- How We Work Section ----------------------------------------------------------*/}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] outfit">
                How We Work
              </h2>
              <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
              <p className="text-gray-600 max-w-2xl mx-auto outfit">
                From discovery to delivery—a proven 5-step process
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: "01", title: "Discovery", desc: "Understand your challenge, scope, and timeline" },
                  { step: "02", title: "Scoping", desc: "Define deliverables, engagement model, and commercials" },
                  { step: "03", title: "Execution", desc: "Deploy experts, conduct audits, develop solutions" },
                  { step: "04", title: "Delivery", desc: "Hand over reports, training, or validated systems" },
                  { step: "05", title: "Follow-up", desc: "Post-engagement support and continuous improvement" }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="text-5xl font-bold text-[#3B82F6] mb-3 outfit">{item.step}</div>
                      <h3 className="text-xl font-semibold text-[#111827] mb-3 outfit">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <svg className="w-6 h-6 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- NexGen Management System Teaser ----------------------------------------------------------*/}
        <section className="py-20 bg-gradient-to-br from-[#475569] via-[#64748b] to-[#475569] text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#93C5FD] rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left: Content */}
              <div>
                <span className="inline-block px-4 py-1 bg-[#93C5FD]/20 text-[#93C5FD] rounded-full text-sm font-semibold mb-4 outfit border border-[#93C5FD]/30">
                  Coming Soon
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 outfit leading-tight">
                  NexGen Management System
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The all-in-one compliance platform built for pharmaceutical excellence. Streamline GMP operations, automate quality workflows, and stay audit-ready—all in one place.
                </p>

                {/* Feature highlights */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#3B82F6]/20 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg outfit">Document Control & CAPA Management</h4>
                      <p className="text-gray-400 text-sm">Centralized document lifecycle with automated approvals and deviation tracking</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#3B82F6]/20 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg outfit">Audit Trail & Data Integrity</h4>
                      <p className="text-gray-400 text-sm">21 CFR Part 11 compliant with tamper-proof electronic records</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#3B82F6]/20 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg outfit">Training Matrix & Compliance Dashboard</h4>
                      <p className="text-gray-400 text-sm">Real-time compliance metrics with automated training reminders</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#3B82F6]/20 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg outfit">Supplier Qualification & Risk Management</h4>
                      <p className="text-gray-400 text-sm">End-to-end supplier lifecycle with risk-based assessments</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#3B82F6]/20 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg outfit">Advanced Analytics & Reporting</h4>
                      <p className="text-gray-400 text-sm">Predictive insights and executive dashboards for smarter decisions</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/products/nexgen-management-system"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl outfit"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    to="/products/nexgen-management-system#waitlist"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 outfit backdrop-blur-sm"
                  >
                    Join Waitlist
                  </Link>
                </div>
              </div>

              {/* Right: Product Mockup Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#93C5FD]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 shadow-2xl">
                  {/* Dashboard mockup */}
                  <div className="bg-white/95 rounded-lg p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="flex-1 bg-gray-200 rounded ml-2 h-6"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded"></div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-[#93C5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded"></div>
                      <div className="flex gap-3">
                        <div className="flex-1 h-10 bg-gradient-to-r from-gray-100 to-gray-50 rounded"></div>
                        <div className="flex-1 h-10 bg-gradient-to-r from-gray-100 to-gray-50 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-[#93C5FD] text-[#111827] px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    GMP Ready
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-[#3B82F6] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    21 CFR Part 11
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- Case Studies Preview Section ----------------------------------------------------------*/}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] outfit">
                Case Studies
              </h2>
              <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
              <p className="text-gray-600 max-w-2xl mx-auto outfit">
                Real challenges. Real solutions. Real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#3B82F6] h-32 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#111827] mb-3 outfit">
                    USFDA Readiness—API Facility
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Conducted mock audit, identified 47 observations, closed all critical findings in 6 weeks. Client cleared actual USFDA inspection with zero 483s.
                  </p>
                  <a href="#contact-form" className="text-[#3B82F6] font-semibold hover:underline inline-flex items-center outfit">
                    Request Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#93C5FD] h-32 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#111827] mb-3 outfit">
                    DMF Submission—Oncology API
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Prepared Type II DMF with manufacturing, analytical, and stability modules. Submission accepted with no queries. Timeline: 8 weeks.
                  </p>
                  <a href="#contact-form" className="text-[#3B82F6] font-semibold hover:underline inline-flex items-center outfit">
                    Request Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#3B82F6] h-32 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#111827] mb-3 outfit">
                    LIMS Validation—Sterile Plant
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    End-to-end CSV for laboratory information management system. GAMP 5 compliant, 21 CFR Part 11 validated. Approved by QA and passed audit.
                  </p>
                  <a href="#contact-form" className="text-[#3B82F6] font-semibold hover:underline inline-flex items-center outfit">
                    Request Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- Enhanced Contact Form Section ----------------------------------------------------------*/}
        <section id="contact-form" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] outfit">
                  Let's Talk About Your Needs
                </h2>
                <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
                <p className="text-gray-600 outfit">
                  Share your requirements. We'll respond within 24 hours with a tailored approach.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                {submitMessage && (
                  <div className="mb-6 p-4 bg-blue-50 border-l-4 border-[#3B82F6] text-[#111827] rounded">
                    <p className="font-semibold">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 outfit">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 outfit">
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all outline-none"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 outfit">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 outfit">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all outline-none"
                        placeholder="+91 XXX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="productType" className="block text-sm font-semibold text-gray-700 mb-2 outfit">
                        Product Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all outline-none"
                      >
                        <option value="">Select product type</option>
                        <option value="API">API (Active Pharmaceutical Ingredient)</option>
                        <option value="Sterile">Sterile / Injectable</option>
                        <option value="FDF">FDF (Finished Dosage Form)</option>
                        <option value="Intermediate">Intermediate / KSM</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2 outfit">
                        Expected Timeline <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all outline-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-sm font-semibold text-gray-700 mb-2 outfit">
                      Your Requirement <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Describe your requirement (GMP audit, regulatory support, validation, training, etc.)"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg outfit ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                    <a
                      href="mailto:inquiry@nexgenpharmasolutions.com"
                      className="flex-1 bg-[#93C5FD] hover:bg-[#3B82F6] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg outfit text-center"
                    >
                      Email Us
                    </a>
                  </div>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting, you agree to our{" "}
                    <Link to="/privacy-policy" className="text-[#3B82F6] hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms-conditions" className="text-[#3B82F6] hover:underline">
                      Terms & Conditions
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- CPHI & Global Presence Section ----------------------------------------------------------*/}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] outfit">
                Global Presence & Industry Engagement
              </h2>
              <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Left Column: Narrative & Stats */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#111827] outfit">
                  Active Participants at Global Pharma Forums
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  NexGen Pharma Solutions maintains active engagement with the global pharmaceutical ecosystem through 
                  participation in industry-leading events like CPHI Worldwide, CPHI India, and regional regulatory forums. 
                  This continuous engagement ensures we stay ahead of regulatory trends, compliance requirements, and 
                  technology innovations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our presence at these platforms enables direct collaboration with regulatory authorities, API manufacturers, 
                  technology providers, and quality leaders—translating into practical, real-world insights for our clients.
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#3B82F6] outfit">25+</div>
                    <div className="text-sm text-gray-600 mt-1">Years in Industry</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#93C5FD] outfit">50+</div>
                    <div className="text-sm text-gray-600 mt-1">Global Clients</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#3B82F6] outfit">200+</div>
                    <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#93C5FD] outfit">15+</div>
                    <div className="text-sm text-gray-600 mt-1">Countries Served</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Event Photos Slider Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#3B82F6] rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111827] outfit">CPHI Worldwide 2025</h4>
                        <p className="text-sm text-gray-600">Frankfurt, Germany</p>
                      </div>
                    </div>
                    <div className="h-48 rounded-lg overflow-hidden">
                      <img 
                        src="/CPhI germany.jpg" 
                        alt="CPHI Worldwide 2025 - Frankfurt, Germany"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-[#93C5FD] rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111827] outfit">CPHI India 2024</h4>
                        <p className="text-sm text-gray-600">Delhi, India</p>
                      </div>
                    </div>
                    <div className="h-48 rounded-lg overflow-hidden">
                      <img 
                        src="/CPhI india .jpg" 
                        alt="CPHI India 2024 - Delhi, India"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <Link 
                    to="/events"
                    className="block text-center bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 rounded-lg transition-all duration-300 outfit"
                  >
                    View All Events →
                  </Link>
                </div>
              </div>
            </div>

            {/* CPHI Integrations / Value Pillars */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-center text-[#111827] mb-8 outfit">
                CPHI Integration Value Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#3B82F6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm text-[#111827] mb-2 outfit">
                    Supplier & Partner Network
                  </h4>
                  <p className="text-xs text-gray-600">
                    Direct access to global quality and technology partners
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#93C5FD] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm text-[#111827] mb-2 outfit">
                    Regulatory Intelligence
                  </h4>
                  <p className="text-xs text-gray-600">
                    Real-time insights on evolving compliance requirements
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#3B82F6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm text-[#111827] mb-2 outfit">
                    Tech & Quality Enablement
                  </h4>
                  <p className="text-xs text-gray-600">
                    CSV, CDS, LIMS, Data Integrity solutions
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#93C5FD] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm text-[#111827] mb-2 outfit">
                    Program Execution at Speed
                  </h4>
                  <p className="text-xs text-gray-600">
                    Rapid deployment, practical implementation
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#3B82F6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm text-[#111827] mb-2 outfit">
                    Capability Expansion
                  </h4>
                  <p className="text-xs text-gray-600">
                    Training, knowledge transfer, team development
                  </p>
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
