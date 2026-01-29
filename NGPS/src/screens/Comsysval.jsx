import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Comsysval = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the difference between Computer System Validation (CSV) and Computer Software Assurance (CSA)?",
      a: "CSV is the traditional comprehensive approach requiring extensive documentation for all systems. CSA is the FDA's newer risk-based approach focusing resources on critical functionality and patient safety. CSA emphasizes critical thinking over documentation volume, allowing reduced validation burden for lower-risk systems while maintaining robust evidence for high-risk applications. We help determine which approach is appropriate for each system and can implement hybrid strategies that balance compliance rigor with efficiency."
    },
    {
      q: "How does the GAMP 5 V-Model work in practice?",
      a: "The GAMP 5 V-Model structures validation activities in a 'V' shape: the left side represents specification phases (User Requirements, Functional Specs, Design Specs), the bottom represents development/configuration, and the right side shows corresponding testing phases (IQ, OQ, PQ) that verify each specification level. Each testing phase maps directly to a specification phase, ensuring all requirements are verified. We use this model to create comprehensive validation strategies with clear traceability from requirements through testing and ongoing operation."
    },
    {
      q: "What is required for 21 CFR Part 11 compliance?",
      a: "21 CFR Part 11 governs electronic records and signatures in FDA-regulated environments. Key requirements include: secure user authentication, audit trails capturing who/what/when for all data changes, data integrity controls (ALCOA+ principles), electronic signature controls, system validation, and comprehensive documentation. We assess systems against all Part 11 requirements, implement necessary controls, establish SOPs, train users, and maintain ongoing compliance monitoring to ensure your systems meet regulatory expectations."
    },
    {
      q: "How long does a typical system validation project take?",
      a: "Timeline varies by system complexity and GAMP category. Simple standalone instruments (Category 3) may require 4-6 weeks. Standard configurable systems like LIMS or ERP (Category 4) typically take 12-16 weeks. Custom or highly configured systems (Category 5) can require 20-28 weeks or more. Factors include system scope, data migration requirements, number of interfaces, user base size, and organizational readiness. We provide detailed project timelines during initial assessment with milestone tracking throughout execution."
    },
    {
      q: "Do you provide support for legacy system remediation and data integrity assessments?",
      a: "Yes, we specialize in retrospective validation of legacy systems that lack adequate documentation, data integrity risk assessments (DIRA) per WHO/PIC/S guidance, and gap remediation programs. Our approach includes system inventory, criticality assessment, risk-based documentation reconstruction, control implementation, and ongoing monitoring plans. We help organizations address regulatory deficiencies discovered during inspections or internal audits while minimizing business disruption and establishing sustainable compliance going forward."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>Computer System Validation (CSV) | NexGen Pharma Solutions</title>
        <meta name="description" content="Expert CSV services for pharmaceutical manufacturing, LIMS, ERP, and GxP systems. GAMP 5 compliant validation, 21 CFR Part 11, EU Annex 11, and data integrity compliance." />
        <meta name="keywords" content="Computer System Validation, CSV, GAMP 5, 21 CFR Part 11, EU Annex 11, LIMS Validation, ERP Validation, Data Integrity, CSA, Computer Software Assurance, Electronic Records" />
      </Helmet>
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#475569] via-[#64748b] to-[#475569] text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold outfit mb-4">
                Computer System Validation (CSV)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
                Comprehensive validation services for GxP computerized systems following GAMP 5, 21 CFR Part 11, and EU Annex 11. Risk-based validation strategies ensuring data integrity, compliance, and system reliability.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="mailto:inquiry@nexgenpharmasolutions.com"
                className="px-8 py-3 bg-white text-[#111827] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg flex items-center gap-2"
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
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#111827] text-center mb-12">
              Comprehensive CSV Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: System Categories */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Systems We Validate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Manufacturing Systems</h4>
                      <p className="text-gray-600 text-sm">SCADA, PLC, control systems, automated equipment, packaging & labeling systems, sterilization systems</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Laboratory Systems</h4>
                      <p className="text-gray-600 text-sm">LIMS (Laboratory Information Management Systems), chromatography data systems, spectroscopy software, electronic lab notebooks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Enterprise Systems</h4>
                      <p className="text-gray-600 text-sm">ERP (SAP, Oracle), MES (Manufacturing Execution Systems), electronic batch records, warehouse management systems</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Quality & Compliance Systems</h4>
                      <p className="text-gray-600 text-sm">Document management, training management, CAPA systems, change control, complaint management, audit management</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Infrastructure & Utilities</h4>
                      <p className="text-gray-600 text-sm">Building management systems, environmental monitoring, HVAC control, water system monitoring, network infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Validation Approach & Standards */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Our Validation Approach
                </h3>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h4 className="font-semibold mb-4">Regulatory Standards</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>FDA 21 CFR Part 11</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>EU Annex 11</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>GAMP 5 V-Model</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>PIC/S PI 011-3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>WHO TRS 996</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>ISO/IEC 62304</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-300">
                    <h4 className="font-semibold mb-4">GAMP 5 Categories</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] font-semibold mt-1">Cat 3:</span>
                        <span>Non-configured products (instruments, firmware)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] font-semibold mt-1">Cat 4:</span>
                        <span>Configured products (LIMS, ERP, COTS software)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] font-semibold mt-1">Cat 5:</span>
                        <span>Custom applications (bespoke software, modifications)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-300">
                    <h4 className="font-semibold mb-4">Risk-Based Strategy</h4>
                    <p className="text-sm text-gray-600">
                      We apply ICH Q9 risk management principles to focus validation efforts where they matter most: critical functionality affecting product quality, data integrity, and patient safety. This ensures compliance while optimizing resource allocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 px-4 bg-[#F7F9FB]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#111827] text-center mb-12">
              What You Get
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Validation Master Plan (VMP)
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive validation strategy document defining scope, approach, roles, responsibilities, and acceptance criteria.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Requirements & Risk Assessment
                </h3>
                <p className="text-gray-600 text-sm">
                  User Requirements Specifications (URS), Functional Specifications (FS), and risk assessments identifying critical functions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  IQ/OQ/PQ Protocols & Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete Installation, Operational, and Performance Qualification protocols with executed test results and acceptance criteria.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Traceability Matrix
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete requirements traceability matrix linking URS through design specifications to test cases and results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  SOPs & Training Materials
                </h3>
                <p className="text-gray-600 text-sm">
                  Standard operating procedures, user manuals, training materials, and competency assessments for system users.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Validation Summary Report
                </h3>
                <p className="text-gray-600 text-sm">
                  Final validation summary report documenting all activities, deviations, and formal approval for production use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timelines & Engagement Models Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#111827] text-center mb-12">
              Timelines & Engagement Models
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Typical Project Timelines
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Simple Systems (Cat 3)</h4>
                    <p className="text-gray-600 text-sm mb-2">4-6 weeks</p>
                    <p className="text-gray-500 text-xs">Standalone instruments, basic equipment with firmware</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Configured Systems (Cat 4)</h4>
                    <p className="text-gray-600 text-sm mb-2">12-16 weeks</p>
                    <p className="text-gray-500 text-xs">LIMS, ERP modules, configurable COTS applications</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Custom Systems (Cat 5)</h4>
                    <p className="text-gray-600 text-sm mb-2">20-28 weeks</p>
                    <p className="text-gray-500 text-xs">Bespoke applications, heavily customized systems, integrations</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Legacy System Remediation</h4>
                    <p className="text-gray-600 text-sm mb-2">8-16 weeks</p>
                    <p className="text-gray-500 text-xs">Retrospective validation, gap assessment, documentation reconstruction</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Flexible Engagement Models
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Project-Based Validation</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Complete validation lifecycle for specific systems with defined deliverables and fixed timelines.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Clear scope and deliverables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Fixed timeline and budget</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Milestone-based payments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Dedicated Validation Team</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Dedicated validation resources for ongoing projects, system upgrades, and lifecycle management support.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Full-time validation specialists</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Flexible scope adjustments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Priority support access</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Hybrid Delivery Model</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Flexible combination of onsite, remote, and offshore resources optimized for efficiency and cost-effectiveness.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Onsite presence for critical activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Remote execution and testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Offshore documentation support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 px-4 bg-[#F7F9FB]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#111827] text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#111827] pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform ${
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
        <section className="py-16 px-4 bg-gradient-to-r from-[#475569] to-[#64748b] text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold outfit mb-6">
              Ready to Validate Your Critical Systems?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get expert CSV services following GAMP 5, 21 CFR Part 11, and EU Annex 11 for your GxP computerized systems.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:inquiry@nexgenpharmasolutions.com"
                className="px-8 py-3 bg-white text-[#111827] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg"
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

export default Comsysval;
