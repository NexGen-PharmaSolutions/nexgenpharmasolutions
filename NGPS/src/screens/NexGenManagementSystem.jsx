import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NexGenManagementSystem = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    notes: ""
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "0badc78d-df2c-4a64-b2b6-70722b4cf30d");
    formDataToSend.append("subject", "NexGen Management System - " + formData.interest);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("interest", formData.interest);
    formDataToSend.append("notes", formData.notes);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! We'll be in touch soon.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          interest: "",
          notes: ""
        });
        
        // Scroll to thank you message
        setTimeout(() => {
          document.getElementById("thank-you-message")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        console.log("Error", data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <Helmet>
        <title>NexGen Management System - All-in-One Pharma Compliance Platform | NexGen Pharma Solutions</title>
        <meta name="description" content="Streamline GMP operations with NexGen Management System. Document control, CAPA management, audit trails, training matrix, and compliance dashboards in one platform." />
        <meta name="keywords" content="Pharma QMS, GMP Software, Document Management System, CAPA Software, Compliance Platform, Pharmaceutical Quality Management" />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        {/*--------------------------------------- Hero Section ----------------------------------------------------------*/}
        <section className="relative bg-gradient-to-br from-[#475569] via-[#64748b] to-[#475569] text-white py-20 px-4 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl" style={{ backgroundColor: '#3B82F6' }}></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full filter blur-3xl" style={{ backgroundColor: '#3B82F6' }}></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 outfit border" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#93C5FD', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                Coming Soon
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 outfit leading-tight">
                NexGen Management System
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                The all-in-one compliance platform that transforms how pharmaceutical companies manage quality, documentation, and regulatory readiness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl outfit"
                  style={{ backgroundColor: '#3B82F6' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
                >
                  Join Waitlist
                </a>
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 outfit backdrop-blur-sm"
                >
                  Request Demo
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-8 backdrop-blur-sm border border-white/10 shadow-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.2))' }}>
                <div className="bg-white/95 rounded-lg p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="flex-1 bg-gray-200 rounded ml-2 h-8"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-10 rounded" style={{ background: 'linear-gradient(to right, #3B82F6, #60A5FA)' }}></div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="h-24 rounded flex flex-col items-center justify-center p-2" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #EFF6FF)' }}>
                        <svg className="w-8 h-8 mb-1" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-xs text-gray-600 font-semibold">Documents</span>
                      </div>
                      <div className="h-24 rounded flex flex-col items-center justify-center p-2" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #EFF6FF)' }}>
                        <svg className="w-8 h-8 mb-1" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-gray-600 font-semibold">CAPA</span>
                      </div>
                      <div className="h-24 rounded flex flex-col items-center justify-center p-2" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #EFF6FF)' }}>
                        <svg className="w-8 h-8 mb-1" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-xs text-gray-600 font-semibold">Training</span>
                      </div>
                      <div className="h-24 rounded flex flex-col items-center justify-center p-2" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #EFF6FF)' }}>
                        <svg className="w-8 h-8 mb-1" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-xs text-gray-600 font-semibold">Analytics</span>
                      </div>
                    </div>
                    <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- What It Solves Section ----------------------------------------------------------*/}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold outfit mb-4" style={{ color: '#111827' }}>
                Built to Solve Real Pharma Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From scattered spreadsheets to regulatory nightmares—we've seen it all. NexGen Management System eliminates the chaos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Problem Cards */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-red-700 mb-2 outfit">The Problem: Manual Chaos</h3>
                    <p className="text-gray-700">Excel-based CAPA logs, missing audit trails, version control nightmares, and hours wasted hunting for approved documents.</p>
                  </div>
                </div>
              </div>

              {/* Solution Cards */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-700 mb-2 outfit">The Solution: Unified Platform</h3>
                    <p className="text-gray-700">One system for documents, deviations, CAPAs, training, suppliers, and audits—with complete traceability and compliance built in.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-red-700 mb-2 outfit">The Problem: Audit Anxiety</h3>
                    <p className="text-gray-700">Regulators arrive and teams scramble to compile reports, recreate timelines, and prove data integrity from fragmented systems.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-700 mb-2 outfit">The Solution: Audit-Ready Always</h3>
                    <p className="text-gray-700">Instant compliance reports, tamper-proof audit trails, and real-time dashboards. Export everything regulators need in minutes, not days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- Core Modules Section ----------------------------------------------------------*/}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold outfit mb-4" style={{ color: '#111827' }}>
                Comprehensive Core Modules
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to run a compliant pharmaceutical operation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Module Cards */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Document Control</h3>
                <p className="text-gray-600 text-sm">Centralized repository with version control, automated workflows, electronic signatures, and full audit trails for SOPs, batch records, and specifications.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>CAPA Management</h3>
                <p className="text-gray-600 text-sm">End-to-end corrective and preventive action tracking with root cause analysis, effectiveness verification, and automated escalation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Deviation Management</h3>
                <p className="text-gray-600 text-sm">Log, investigate, and resolve deviations with impact assessments, CAPA linkage, and trend analysis to prevent recurrence.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Training Matrix</h3>
                <p className="text-gray-600 text-sm">Role-based training plans, automated reminders, quiz assessments, and complete training history for regulatory inspections.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Audit Management</h3>
                <p className="text-gray-600 text-sm">Plan, execute, and track internal/external audits with checklists, finding closure, and comprehensive reporting.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Supplier Qualification</h3>
                <p className="text-gray-600 text-sm">Manage supplier lifecycle from qualification to re-qualification with risk assessments, performance tracking, and audit scheduling.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Change Control</h3>
                <p className="text-gray-600 text-sm">Manage facility, process, and system changes with impact assessments, approvals, validation requirements, and implementation tracking.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Non-Conformance</h3>
                <p className="text-gray-600 text-sm">Track product complaints, out-of-specification results, and NCRs with complete investigation workflow and regulatory reporting.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 outfit" style={{ color: '#111827' }}>Analytics & Reports</h3>
                <p className="text-gray-600 text-sm">Real-time dashboards, executive KPIs, trend analysis, and custom reports for proactive quality management and regulatory readiness.</p>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- How It Works Section ----------------------------------------------------------*/}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold outfit mb-4" style={{ color: '#111827' }}>
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                From setup to compliance—streamlined for pharma
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1" style={{ backgroundColor: '#BFDBFE' }}></div>

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderLeftColor: '#3B82F6' }}>
                      <h3 className="text-2xl font-bold mb-2 outfit" style={{ color: '#111827' }}>1. Quick Setup</h3>
                      <p className="text-gray-600">
                        Cloud-based deployment with customizable workflows, user roles, and site configurations. Our team handles the setup and validation.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative" style={{ backgroundColor: '#3B82F6' }}>
                      1
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2"></div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative" style={{ backgroundColor: '#3B82F6' }}>
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderLeftColor: '#3B82F6' }}>
                      <h3 className="text-2xl font-bold mb-2 outfit" style={{ color: '#111827' }}>2. Data Migration</h3>
                      <p className="text-gray-600">
                        Seamlessly import existing documents, training records, and quality data. Maintain compliance history and audit trails.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderLeftColor: '#3B82F6' }}>
                      <h3 className="text-2xl font-bold mb-2 outfit" style={{ color: '#111827' }}>3. Team Training</h3>
                      <p className="text-gray-600">
                        Comprehensive training sessions for all user roles with documentation, video guides, and ongoing support.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative" style={{ backgroundColor: '#3B82F6' }}>
                      3
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2"></div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative" style={{ backgroundColor: '#3B82F6' }}>
                      4
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderLeftColor: '#3B82F6' }}>
                      <h3 className="text-2xl font-bold mb-2 outfit" style={{ color: '#111827' }}>4. Go Live</h3>
                      <p className="text-gray-600">
                        Launch with confidence. Real-time monitoring, automated workflows, and instant compliance visibility from day one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- Security & Compliance Section ----------------------------------------------------------*/}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold outfit mb-4" style={{ color: '#111827' }}>
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="text-xl text-gray-600">
                Built with pharma regulations at the core
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 outfit" style={{ color: '#111827' }}>21 CFR Part 11 Compliant</h3>
                <p className="text-gray-600 text-sm">
                  Electronic signatures, audit trails, record retention, and system validation documented and maintained per FDA requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 outfit" style={{ color: '#111827' }}>Data Security</h3>
                <p className="text-gray-600 text-sm">
                  AES-256 encryption, role-based access control, multi-factor authentication, and SOC 2 Type II certification.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 outfit" style={{ color: '#111827' }}>Validated System</h3>
                <p className="text-gray-600 text-sm">
                  Complete validation documentation (IQ/OQ/PQ), change control procedures, and periodic review processes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 outfit" style={{ color: '#111827' }}>Cloud Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  AWS-hosted with 99.9% uptime SLA, automated backups, disaster recovery, and geographic redundancy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 outfit" style={{ color: '#111827' }}>Access Control</h3>
                <p className="text-gray-600 text-sm">
                  Granular permissions, user activity monitoring, session management, and automatic lockout after inactivity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 outfit" style={{ color: '#111827' }}>Audit Trail</h3>
                <p className="text-gray-600 text-sm">
                  Tamper-proof logs for all system activities, user actions, data changes, and administrative operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------- Waitlist/Demo Form Section ----------------------------------------------------------*/}
        <section id="waitlist" className="py-16 px-4 text-white" style={{ background: 'linear-gradient(to bottom right, #111827, #1F2937)' }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold outfit mb-4">
                Be Among the First
              </h2>
              <p className="text-xl text-gray-300">
                Join the waitlist or request an early demo of NexGen Management System
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 outfit">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 outfit">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 outfit">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 outfit">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 outfit">
                    I'm Interested In <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="Waitlist">Join Waitlist</option>
                    <option value="Demo">Request Demo</option>
                    <option value="Early Access">Early Access Program</option>
                    <option value="Partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 outfit">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none"
                    placeholder="Tell us about your compliance challenges or specific requirements..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl outfit ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#3B82F6' }}
                    onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#2563EB')}
                    onMouseOut={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#3B82F6')}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>

                {result && (
                  <div
                    id="thank-you-message"
                    className={`text-center py-4 px-6 rounded-lg ${
                      result.includes("Thank you")
                        ? "bg-green-500/20 text-green-200 border border-green-400"
                        : "bg-red-500/20 text-red-200 border border-red-400"
                    }`}
                  >
                    <p className="font-semibold">{result}</p>
                    {result.includes("Thank you") && (
                      <p className="mt-2 text-sm">
                        We'll reach out to you shortly with more information about NexGen Management System.
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>

            <p className="text-center text-gray-300 text-sm mt-6">
              By submitting this form, you agree to our{" "}
              <Link to="/privacy-policy" className="hover:underline" style={{ color: '#93C5FD' }}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-conditions" className="hover:underline" style={{ color: '#93C5FD' }}>
                Terms & Conditions
              </Link>
              .
            </p>
          </div>
        </section>

        {/*--------------------------------------- Final CTA Section ----------------------------------------------------------*/}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold outfit mb-6" style={{ color: '#111827' }}>
              Ready to Transform Your Quality Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't wait for regulators to find gaps. Stay ahead with NexGen Management System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg outfit"
                style={{ backgroundColor: '#3B82F6' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3B82F6'}
              >
                Get Early Access
              </a>
              <Link
                to="/contactus"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 hover:bg-gray-300 font-semibold rounded-lg transition-all duration-300 outfit"
                style={{ color: '#111827' }}
              >
                Contact Our Team
              </Link>
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

export default NexGenManagementSystem;
