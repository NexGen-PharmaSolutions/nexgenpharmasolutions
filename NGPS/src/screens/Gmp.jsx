import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Gmp = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const imgsectionRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>GMP Audits - Vendor, Internal & Mock EDQM-USFDA | NexGen Pharma Solutions</title>
        <meta 
          name="description" 
          content="Expert GMP audit services for API, sterile, and FDF facilities. Mock EDQM and USFDA inspections by former regulators. Recognized globally by QPs and regulatory authorities." 
        />
        <meta 
          name="keywords" 
          content="GMP Audits, USFDA Mock Audit, EDQM Inspection, Vendor Audits, Internal Audits, Pharmaceutical Compliance, API Audits, Sterile Facility Audits" 
        />
      </Helmet>
      
      {/*----------------------------------------- Header -------------------------------------------------------------------*/}
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section className="relative bg-gradient-to-br from-[#475569] via-[#64748b] to-[#475569] py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block bg-[#3B82F6]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold outfit">Premier GMP Audit Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 outfit leading-tight">
                GMP Audits That Prepare You for Regulatory Success
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 outfit">
                Vendor | Internal | Mock EDQM-USFDA Inspections
              </p>
              <p className="text-base text-gray-300 mb-8 max-w-3xl mx-auto">
                Conducted by former regulatory auditors and industry QA leaders. Our detailed, globally-recognized 
                audit reports help you identify compliance gaps before regulators do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:inquiry@nexgenpharmasolutions.com"
                  className="bg-white hover:bg-gray-100 text-[#111827] font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl outfit"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------------- Value Proposition -----------------------------------------------------------*/}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 outfit">
                  Why Our GMP Audits Stand Out
                </h2>
                <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-semibold text-[#111827] mb-6 outfit">Audit Types We Conduct</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-[#111827]">Vendor / Supplier Audits</p>
                        <p className="text-sm text-gray-600">API, excipient, raw material, packaging suppliers</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-[#111827]">Internal / Self-Inspection Audits</p>
                        <p className="text-sm text-gray-600">Periodic compliance assessment and gap analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-[#111827]">Mock USFDA / EDQM Inspections</p>
                        <p className="text-sm text-gray-600">Pre-audit readiness simulation by former regulators</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-[#111827]">For-Cause / Focused Audits</p>
                        <p className="text-sm text-gray-600">Targeted audits for specific systems or deviations</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-semibold text-[#111827] mb-6 outfit">Facilities We Audit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">API / API Intermediates (Sterile/Non-sterile)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Finished Dosage Forms (Sterile/Non-sterile)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Biological / Fermentation-based Products</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Excipients / KSMs / Raw Materials</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Contract Testing Laboratories</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Packaging Material Suppliers</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Processing Sites (Micronization, Sterilization)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Distributors (GDP Compliance)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#3B82F6] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#111827] mb-3 outfit">Regulatory Standards We Audit Against</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">EU GMP</span>
                  <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">ICH Q7</span>
                  <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">21 CFR 210/211</span>
                  <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">WHO GMP</span>
                  <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">PIC/S GMP</span>
                  <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">ISO Standards</span>
                  <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">Client-Specific Requirements</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------------- What You Get -----------------------------------------------------------*/}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 outfit">
                  What You Get
                </h2>
                <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
                <p className="text-gray-600 outfit">Comprehensive audit deliverables that drive action</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Detailed Audit Report</h3>
                      <p className="text-sm text-gray-600">Observation-wise findings with criticality ratings (Critical, Major, Minor)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">CAPA Recommendations</h3>
                      <p className="text-sm text-gray-600">Practical corrective and preventive action plans for each finding</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Remediation Timelines</h3>
                      <p className="text-sm text-gray-600">Suggested timeframes for closing critical and major observations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Executive Summary</h3>
                      <p className="text-sm text-gray-600">High-level overview for management decision-making</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Photographic Evidence</h3>
                      <p className="text-sm text-gray-600">Visual documentation of key observations (where applicable)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Post-Audit Consultation</h3>
                      <p className="text-sm text-gray-600">Follow-up consultation via email or meeting to discuss findings and next steps</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#3B82F6] text-white p-6 rounded-xl text-center">
                <p className="text-lg font-semibold outfit mb-2">Reports Accepted Globally</p>
                <p className="text-sm">Our audit reports are recognized by regulators, Qualified Persons (QPs), and pharma buyers worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------------- Timelines & Engagement Models -----------------------------------------------------------*/}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Timelines */}
                <div>
                  <h2 className="text-3xl font-bold text-[#111827] mb-6 outfit">Typical Timelines</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#DBEAFE] rounded-full p-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#111827] outfit">Vendor Audit</h3>
                        <p className="text-gray-600 text-sm mb-2">On-site: 1-2 days | Report delivery: 7-10 business days</p>
                        <p className="text-xs text-gray-500">Depends on facility size and complexity</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#DBEAFE] rounded-full p-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#111827] outfit">Internal Self-Inspection</h3>
                        <p className="text-gray-600 text-sm mb-2">On-site: 2-4 days | Report delivery: 10-14 business days</p>
                        <p className="text-xs text-gray-500">Comprehensive facility-wide assessment</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#DBEAFE] rounded-full p-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#111827] outfit">Mock USFDA/EDQM Audit</h3>
                        <p className="text-gray-600 text-sm mb-2">On-site: 3-5 days | Report delivery: 7 business days</p>
                        <p className="text-xs text-gray-500">Includes observation classification and remediation roadmap</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#DBEAFE] rounded-full p-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#111827] outfit">For-Cause / Focused Audit</h3>
                        <p className="text-gray-600 text-sm mb-2">On-site: 1-2 days | Report delivery: 5-7 business days</p>
                        <p className="text-xs text-gray-500">Targeted investigation of specific concerns</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engagement Models */}
                <div>
                  <h2 className="text-3xl font-bold text-[#111827] mb-6 outfit">Engagement Models</h2>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-[#3B82F6]">
                      <h3 className="font-semibold text-lg text-[#111827] mb-3 outfit">Project-Based</h3>
                      <p className="text-gray-700 text-sm mb-3">Single audit with defined scope and fixed deliverables</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Fixed cost and timeline</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Ideal for vendor audits or one-time assessments</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-[#3B82F6]">
                      <h3 className="font-semibold text-lg text-[#111827] mb-3 outfit">Retainer</h3>
                      <p className="text-gray-700 text-sm mb-3">Ongoing audit support with monthly or quarterly cycles</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Priority scheduling and faster turnaround</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Suitable for multiple vendor audits or continuous compliance</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-[#3B82F6]">
                      <h3 className="font-semibold text-lg text-[#111827] mb-3 outfit">Embedded Support</h3>
                      <p className="text-gray-700 text-sm mb-3">On-site auditor embedded within your QA team (short/long-term)</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>For large audit programs or major compliance initiatives</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[#3B82F6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Knowledge transfer and team upskilling included</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------------- FAQs -----------------------------------------------------------*/}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 outfit">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "How soon can you conduct an audit?",
                    a: "Subject to auditor availability, we can typically schedule audits within 2-3 weeks of request. For urgent/mock inspections, express scheduling may be available."
                  },
                  {
                    q: "Are your auditors qualified for regulatory inspections?",
                    a: "Yes. Our audit team includes former USFDA/EDQM inspectors, ex-regulatory authority personnel, and senior industry QA professionals with extensive inspection experience."
                  },
                  {
                    q: "Do you provide post-audit remediation support?",
                    a: "Absolutely. We can support you in closing observations through CAPA development, SOP updates, training, or embedded consulting—depending on your needs."
                  },
                  {
                    q: "Can we customize the audit scope?",
                    a: "Yes. We offer tailored audits focused on specific systems (e.g., data integrity, cleaning validation), products, or compliance areas based on your requirements."
                  },
                  {
                    q: "Are your reports accepted by regulatory authorities?",
                    a: "Our audit reports are structured to meet regulatory expectations and are widely accepted by USFDA, EDQM, WHO, and other health authorities, as well as by Qualified Persons (QPs)."
                  },
                  {
                    q: "What is the cost of a GMP audit?",
                    a: "Costs vary based on facility type, audit scope, duration, and location. Contact us with your requirements for a detailed quote. We offer competitive, transparent pricing."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg text-[#111827] outfit pr-8">{faq.q}</h3>
                        <svg
                          className={`w-6 h-6 text-[#3B82F6] flex-shrink-0 transform transition-transform duration-200 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------------- Final CTA -----------------------------------------------------------*/}
        <section className="py-16 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 outfit">
                Ready to Assess Your Compliance Readiness?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Schedule a GMP audit or mock inspection with our expert team. Let's identify gaps before regulators do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:inquiry@nexgenpharmasolutions.com"
                  className="bg-[#111827] hover:bg-[#1F2937] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl outfit border-2 border-white"
                >
                  Email Us
                </a>
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

export default Gmp;
