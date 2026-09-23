import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const QualCon = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the typical timeline for a deviation investigation and CAPA implementation?",
      a: "A complete deviation investigation typically takes 2-4 weeks depending on complexity, including root cause analysis, impact assessment, and CAPA development. CAPA implementation timelines vary by corrective action scope but generally range from 4-12 weeks with verification activities.",
    },
    {
      q: "Do you provide support during regulatory inspections?",
      a: "Yes, we provide comprehensive inspection readiness support including mock audits, documentation review, personnel training, and on-site support during actual regulatory inspections. Our team can assist with inspector interactions and deficiency response preparation.",
    },
    {
      q: "Can you help remediate existing quality system gaps?",
      a: "Absolutely. We conduct comprehensive gap assessments against regulatory requirements (EU GMP, FDA 21 CFR, ICH guidelines), develop detailed remediation plans with timelines, and provide implementation support including SOP development, training, and effectiveness verification.",
    },
    {
      q: "What's included in your data integrity assessment services?",
      a: "Our data integrity services include ALCOA+ compliance assessments, audit trail reviews, computerized system evaluations, manual record reviews, gap analysis reports, corrective action plans, and staff training on data governance principles.",
    },
    {
      q: "Do you offer ongoing quality consulting support?",
      a: "Yes, we offer flexible engagement models including project-based consulting for specific issues, monthly retainer arrangements for ongoing support, and embedded quality resources who work as an extension of your team for continuous quality system management.",
    },
    {
      q: "How do you ensure confidentiality of our quality data?",
      a: "We maintain strict confidentiality through comprehensive NDAs, secure data handling protocols, limited access controls, and adherence to data protection regulations. All consultants are trained on confidentiality requirements and professional ethics.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5EAD8]">
      <Helmet>
        <title>Quality Consulting & QMS Remediation | NexGen Pharma Solutions</title>
        <meta name="description" content="Expert quality consulting services including deviation management, CAPA systems, OOS/OOT investigations, change control, and data integrity remediation for pharmaceutical manufacturing." />
        <meta name="keywords" content="Quality Consulting, QMS Remediation, Deviation Management, CAPA, OOS Investigation, Change Control, Data Integrity, Pharmaceutical Quality Systems" />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#2E2B25] via-[#3D372E] to-[#2E2B25] text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold outfit mb-4">
                Quality Consulting & QMS Remediation
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
                Expert quality system consulting for deviation management, CAPA optimization, OOS/OOT investigations, change control, and data integrity remediation.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="mailto:inquiry@nexgenpharmasolutions.com"
                className="px-8 py-3 bg-white text-[#201E1D] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#201E1D] text-center mb-12">
              Comprehensive Quality System Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Core Service Areas */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#201E1D] mb-6">
                  Core Service Areas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#C67139] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Deviation Management</h4>
                      <p className="text-gray-600 text-sm">Comprehensive deviation investigation, root cause analysis, and CAPA implementation to prevent recurrence</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#C67139] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">CAPA System Optimization</h4>
                      <p className="text-gray-600 text-sm">Corrective and Preventive Action system design, implementation, and effectiveness verification</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#C67139] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">OOS/OOT Investigations</h4>
                      <p className="text-gray-600 text-sm">Out-of-Specification and Out-of-Trend investigation protocols, laboratory investigation support, and trending analysis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#C67139] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Change Control Management</h4>
                      <p className="text-gray-600 text-sm">Risk-based change control processes, impact assessments, and validation requirements determination</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#C67139] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Data Integrity Programs</h4>
                      <p className="text-gray-600 text-sm">ALCOA+ assessments, data governance frameworks, audit trail reviews, and remediation plans</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Facilities & Systems Covered */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#201E1D] mb-6">
                  Facilities & Systems Covered
                </h3>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h4 className="font-semibold mb-4">Manufacturing Facilities</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>API Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>Sterile Products</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>Solid Dosage Forms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>Liquid/Semi-solid</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>Biologics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>Medical Devices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>QC Laboratories</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8C491A]">✓</span>
                      <span>Warehousing/GDP</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-300">
                    <h4 className="font-semibold mb-4">Regulatory Standards</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-[#FFF2EB] text-[#8C491A] rounded-full text-sm font-medium">EU GMP</span>
                      <span className="px-4 py-2 bg-[#FFF2EB] text-[#8C491A] rounded-full text-sm font-medium">FDA 21 CFR</span>
                      <span className="px-4 py-2 bg-[#FFF2EB] text-[#8C491A] rounded-full text-sm font-medium">ICH Q7/Q9/Q10</span>
                      <span className="px-4 py-2 bg-[#FFF2EB] text-[#8C491A] rounded-full text-sm font-medium">PIC/S</span>
                      <span className="px-4 py-2 bg-[#FFF2EB] text-[#8C491A] rounded-full text-sm font-medium">WHO GMP</span>
                      <span className="px-4 py-2 bg-[#FFF2EB] text-[#8C491A] rounded-full text-sm font-medium">ISO 9001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 px-4 bg-[#F9F4ED]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#201E1D] text-center mb-12">
              What You Get
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Gap Analysis Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive assessment of current quality systems against regulatory requirements with prioritized remediation roadmap.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  SOPs & Work Instructions
                </h3>
                <p className="text-gray-600 text-sm">
                  GMP-compliant standard operating procedures, templates, and work instructions tailored to your operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Investigation Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Detailed deviation, OOS/OOT, and non-conformance investigation reports with root cause analysis and CAPAs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Training & Competency Assessment
                </h3>
                <p className="text-gray-600 text-sm">
                  Staff training on quality systems, investigation techniques, and GMP requirements with competency verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Regulatory Response Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Expert assistance with inspection observations, warning letters, and regulatory commitments response preparation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Ongoing Support & Maintenance
                </h3>
                <p className="text-gray-600 text-sm">
                  Continuous quality system improvement, periodic assessments, and expert consultation as needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timelines & Engagement Models Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#201E1D] text-center mb-12">
              Timelines & Engagement Models
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#201E1D] mb-6">
                  Typical Project Timelines
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#C67139]">
                    <h4 className="font-semibold text-lg mb-2">Gap Assessment & Remediation Plan</h4>
                    <p className="text-gray-600 text-sm mb-2">2-4 weeks</p>
                    <p className="text-gray-500 text-xs">Comprehensive assessment with prioritized action plan and timelines</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#C67139]">
                    <h4 className="font-semibold text-lg mb-2">Deviation Investigation & CAPA</h4>
                    <p className="text-gray-600 text-sm mb-2">2-4 weeks</p>
                    <p className="text-gray-500 text-xs">Root cause analysis, impact assessment, and CAPA development</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#C67139]">
                    <h4 className="font-semibold text-lg mb-2">QMS Implementation</h4>
                    <p className="text-gray-600 text-sm mb-2">8-16 weeks</p>
                    <p className="text-gray-500 text-xs">Full quality system setup including SOPs, training, and validation</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#C67139]">
                    <h4 className="font-semibold text-lg mb-2">Data Integrity Remediation</h4>
                    <p className="text-gray-600 text-sm mb-2">12-24 weeks</p>
                    <p className="text-gray-500 text-xs">ALCOA+ assessment, gap closure, system upgrades, and verification</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold outfit text-[#201E1D] mb-6">
                  Flexible Engagement Models
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C67139]">
                    <h4 className="font-semibold text-xl mb-3">Project-Based</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Fixed-scope projects for specific quality system improvements with defined deliverables and milestones.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Clear scope and objectives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Fixed timeline and budget</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Milestone-based payments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C67139]">
                    <h4 className="font-semibold text-xl mb-3">Retainer-Based</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Ongoing quality support with monthly hours for investigations, assessments, and continuous improvement.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Dedicated monthly hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Priority support access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Flexible scope adjustments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C67139]">
                    <h4 className="font-semibold text-xl mb-3">Embedded Quality Support</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Full-time or part-time quality professionals embedded in your team as an extension of your QA department.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>On-site or remote presence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Team integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8C491A] mt-1">→</span>
                        <span>Knowledge transfer focus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 px-4 bg-[#F9F4ED]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#201E1D] text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#201E1D] pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-[#8C491A] flex-shrink-0 transition-transform ${
                        openFaq === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#2E2B25] to-[#3D372E] text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold outfit mb-6">
              Ready to Strengthen Your Quality Systems?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get expert quality consulting for deviation management, CAPA optimization, and regulatory compliance.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:inquiry@nexgenpharmasolutions.com"
                className="px-8 py-3 bg-white text-[#201E1D] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default QualCon;
