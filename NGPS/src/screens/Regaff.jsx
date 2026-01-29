import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Regaff = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is a Drug Master File (DMF) and why is it important?",
      a: "A Drug Master File is a confidential document submitted to regulatory authorities containing detailed information about manufacturing, processing, packaging, and storage of drug products or their components. It allows manufacturers to protect proprietary information while enabling regulatory review. DMFs are critical for API manufacturers, excipient suppliers, and contract manufacturers to support product applications without disclosing confidential manufacturing details to drug applicants."
    },
    {
      q: "How long does it typically take to prepare and submit a regulatory dossier?",
      a: "Timeline varies based on submission type and complexity. A standard DMF preparation typically takes 8-12 weeks, ANDA/505(b)(2) dossiers require 12-20 weeks, and full NDAs may take 6-12 months. Factors affecting timeline include data availability, number of sites, regulatory interactions required, and complexity of the product. We provide detailed project timelines during initial assessment and maintain regular milestone updates throughout the process."
    },
    {
      q: "What is the difference between FDA ANDA, 505(b)(2), and NDA pathways?",
      a: "ANDA (Abbreviated New Drug Application) is for generic drugs demonstrating bioequivalence to an approved reference product, requiring no clinical efficacy studies. 505(b)(2) pathway allows partial reliance on FDA's findings for an approved drug, suitable for modified versions or new combinations. NDA (New Drug Application) is for entirely new chemical entities requiring full safety and efficacy data. Choice depends on product innovation level, available data, and regulatory strategy. We help select the optimal pathway based on your specific situation."
    },
    {
      q: "Do you provide support for responding to regulatory deficiency letters?",
      a: "Yes, we specialize in preparing comprehensive responses to Complete Response Letters (CRLs), Information Requests, and deficiency letters from FDA, EMA, and other global agencies. Our team analyzes regulatory concerns, develops scientifically sound responses, coordinates with technical experts, and prepares all required documentation. We have extensive experience turning deficiencies into approvals through strategic, well-supported responses that address root causes of regulatory concerns."
    },
    {
      q: "Can you help with regulatory submissions for multiple global markets simultaneously?",
      a: "Absolutely. We have expertise in harmonized regulatory strategies for simultaneous submissions to FDA (US), EMA (EU), PMDA (Japan), Health Canada, TGA (Australia), and emerging markets. Our team prepares CTD/eCTD dossiers adaptable to multiple regions, manages regional variations, coordinates with local regulatory partners, and provides centralized project management. This approach optimizes development timelines and reduces redundant documentation efforts while ensuring region-specific compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>Regulatory Affairs & DMF Services | NexGen Pharma Solutions</title>
        <meta name="description" content="Expert regulatory affairs consulting for IND, NDA, ANDA, DMF, MAA submissions to FDA, EMA and global agencies. Strategic regulatory guidance for pharmaceutical product approvals." />
        <meta name="keywords" content="Regulatory Affairs, DMF Services, ANDA Submission, NDA Preparation, FDA Submissions, EMA MAA, Pharmaceutical Regulatory Consulting, Drug Master Files, CTD Dossier, Regulatory Strategy" />
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
                Regulatory Affairs & DMF Services
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
                Expert regulatory consulting for IND, NDA, ANDA, DMF, and MAA submissions to FDA, EMA, and global regulatory agencies. Strategic guidance from product development through post-approval lifecycle management.
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
              Comprehensive Regulatory Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Core Service Areas */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Regulatory Submission Services
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Drug Master Files (DMF)</h4>
                      <p className="text-gray-600 text-sm">Type II and Type III DMF preparation, submission, and maintenance for APIs, excipients, and manufacturing sites</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">IND/CTA Applications</h4>
                      <p className="text-gray-600 text-sm">Investigational New Drug and Clinical Trial Applications for FDA, EMA, and global agencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">ANDA & 505(b)(2) Submissions</h4>
                      <p className="text-gray-600 text-sm">Abbreviated and hybrid NDA pathways for generic and modified drug products with bioequivalence strategies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">NDA & MAA Dossiers</h4>
                      <p className="text-gray-600 text-sm">Full CTD/eCTD dossier development for New Drug Applications and Marketing Authorization Applications</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Post-Approval Variations</h4>
                      <p className="text-gray-600 text-sm">Annual reports, supplements, label updates, and lifecycle management submissions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Geographic Coverage & Strategic Services */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Global Regulatory Expertise
                </h3>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h4 className="font-semibold mb-4">Regulatory Agencies</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>FDA (United States)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>EMA (European Union)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>PMDA (Japan)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Health Canada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>TGA (Australia)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>MHRA (UK)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Swissmedic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Emerging Markets</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-300">
                    <h4 className="font-semibold mb-4">Strategic Services</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Regulatory strategy development and pathway selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Agency meeting preparation and participation (Pre-IND, Pre-NDA, Type C)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Deficiency letter and Complete Response Letter (CRL) responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Scientific and regulatory due diligence for M&A transactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Orphan drug designations and pediatric investigation plans</span>
                      </li>
                    </ul>
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
                  CTD/eCTD Dossiers
                </h3>
                <p className="text-gray-600 text-sm">
                  Fully compliant Common Technical Document submissions in eCTD format for all modules (Quality, Non-clinical, Clinical).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Regulatory Intelligence Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive regulatory landscape analysis, competitor intelligence, and pathway feasibility assessments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Submission Management
                </h3>
                <p className="text-gray-600 text-sm">
                  End-to-end submission coordination including eCTD publishing, validation, agency portal submission, and tracking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Agency Interaction Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Meeting packages, briefing documents, responses to questions, and comprehensive documentation for all agency interactions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Deficiency Resolution
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategic responses to Information Requests, CRLs, and deficiency letters with supporting data and scientific rationale.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Global Lifecycle Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Ongoing post-approval support including annual reports, label harmonization, and variation/supplement submissions.
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
                    <h4 className="font-semibold text-lg mb-2">DMF Preparation & Submission</h4>
                    <p className="text-gray-600 text-sm mb-2">8-12 weeks</p>
                    <p className="text-gray-500 text-xs">Comprehensive DMF development, quality documentation, and agency submission</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">ANDA/505(b)(2) Dossier</h4>
                    <p className="text-gray-600 text-sm mb-2">12-20 weeks</p>
                    <p className="text-gray-500 text-xs">Full CTD compilation, bioequivalence data integration, and submission package</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">NDA/MAA Full Submission</h4>
                    <p className="text-gray-600 text-sm mb-2">6-12 months</p>
                    <p className="text-gray-500 text-xs">Complete regulatory package with all modules, agency meetings, and submission</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Deficiency Response</h4>
                    <p className="text-gray-600 text-sm mb-2">4-8 weeks</p>
                    <p className="text-gray-500 text-xs">Analysis, data compilation, response preparation, and resubmission</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Flexible Engagement Models
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Project-Based Submissions</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Fixed-scope regulatory projects with defined deliverables, timelines, and submission targets.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Clear regulatory milestones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Fixed budget and timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Milestone-based payments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Dedicated Regulatory Support</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Ongoing regulatory affairs support with dedicated resources for multiple projects and lifecycle management.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Dedicated regulatory team</span>
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
                    <h4 className="font-semibold text-xl mb-3">Strategic Consulting</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      High-level regulatory strategy consulting for pathway selection, due diligence, and regulatory intelligence.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Executive-level insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Portfolio strategy development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>M&A regulatory due diligence</span>
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
              Ready to Navigate Global Regulatory Pathways?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get expert regulatory affairs consulting for your IND, ANDA, NDA, DMF, and MAA submissions to global agencies.
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

export default Regaff;
