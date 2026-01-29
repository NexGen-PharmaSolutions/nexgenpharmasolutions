import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Training = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What training formats do you offer?",
      a: "We offer flexible training delivery options to suit your organizational needs: classroom-style on-site training at your facility, virtual instructor-led webinars via Zoom/Teams, self-paced e-learning modules accessible 24/7, hybrid programs combining live and recorded sessions, and customized workshops tailored to specific topics. All formats include interactive exercises, real-world case studies, knowledge assessments, and certificates of completion. We can accommodate groups from 5 to 500+ participants."
    },
    {
      q: "Are your training programs customizable to our specific needs?",
      a: "Absolutely. All our training programs can be fully customized to address your organization's specific challenges, SOPs, systems, and regulatory requirements. We conduct pre-training assessments to identify knowledge gaps, develop custom content using your actual procedures and scenarios, incorporate your company's quality systems and documentation, and provide industry-specific examples relevant to your operations (API, sterile, biologics, devices, etc.). This ensures maximum relevance and practical applicability for your team."
    },
    {
      q: "Do you provide training records and certificates for regulatory compliance?",
      a: "Yes, we provide comprehensive training documentation to support regulatory compliance. This includes individual certificates of completion with training dates and topics, detailed training records with attendee signatures and assessment scores, training curricula and materials for your training files, instructor qualifications and CVs, and post-training competency assessment results. All documentation is provided in formats suitable for regulatory inspections and meets FDA, EMA, and other global agency expectations for training documentation."
    },
    {
      q: "How do you assess training effectiveness and competency?",
      a: "We use a multi-tiered approach to ensure training effectiveness: pre-training knowledge assessments to establish baselines, interactive exercises during training to reinforce concepts, post-training examinations with minimum passing scores (typically 80%), practical exercises or role-plays for hands-on skills, 30/60/90 day follow-up assessments to measure retention, and on-the-job observation and competency verification. We provide detailed reports showing individual and group performance, knowledge gaps, and recommendations for additional training needs."
    },
    {
      q: "Can you provide Train-the-Trainer programs to build internal capability?",
      a: "Yes, our Train-the-Trainer programs are designed to develop internal subject matter experts who can deliver ongoing training within your organization. Participants learn adult learning principles, effective presentation techniques, how to develop engaging training materials, assessment and competency evaluation methods, and how to maintain training effectiveness. We provide complete training packages including slide decks, participant guides, trainer notes, and assessment tools. This approach builds sustainable internal capability while reducing long-term training costs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>GMP & Pharma Training Programs | NexGen Pharma Solutions</title>
        <meta name="description" content="Expert GMP, data integrity, CAPA, audit, and CSV training for pharmaceutical professionals. Customizable programs with classroom, virtual, and e-learning formats." />
        <meta name="keywords" content="GMP Training, Pharmaceutical Training, Data Integrity Training, CAPA Training, Quality Risk Management, Audit Training, CSV Training, Regulatory Compliance Training, Train the Trainer, Behavioral GMP" />
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
                GMP & Pharmaceutical Training Programs
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
                Expert-led training programs covering GMP, data integrity, CAPA, quality risk management, auditing, and regulatory compliance. Build competency and ensure sustained compliance across your organization.
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
              Comprehensive Training Portfolio
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Training Topics */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Core Training Programs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">GMP & Regulatory Fundamentals</h4>
                      <p className="text-gray-600 text-sm">Introduction to GMP, FDA 21 CFR Parts 210/211, EU GMP Annexes, behavioral GMP, and quality culture development</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Data Integrity Compliance</h4>
                      <p className="text-gray-600 text-sm">ALCOA+ principles, electronic records (21 CFR Part 11), audit trail review, data governance, and integrity remediation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">CAPA & Root Cause Analysis</h4>
                      <p className="text-gray-600 text-sm">Systematic investigation techniques, RCA methodologies (5-Why, Fishbone, Fault Tree), CAPA development, and effectiveness verification</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Quality Risk Management</h4>
                      <p className="text-gray-600 text-sm">ICH Q9 principles, FMEA, HAZOP, risk-based decision making, and practical application across quality systems</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">Audit Skills & Inspection Readiness</h4>
                      <p className="text-gray-600 text-sm">Internal auditing techniques, supplier qualification, inspection preparation, observation handling, and mock audit exercises</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Delivery Methods & Specialized Training */}
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Specialized & Technical Training
                </h3>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 mb-6">
                  <h4 className="font-semibold mb-4">Advanced Topics</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">→</span>
                      <span><strong>Computer System Validation:</strong> GAMP 5, CSV lifecycle, 21 CFR Part 11 compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">→</span>
                      <span><strong>Technical Writing:</strong> SOP development, protocol writing, report preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">→</span>
                      <span><strong>Quality Metrics & KPIs:</strong> Performance measurement, trending analysis, data-driven decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">→</span>
                      <span><strong>Change Control Management:</strong> Risk-based change assessment, validation triggers, documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">→</span>
                      <span><strong>Investigative Report Writing:</strong> Deviation investigations, OOS/OOT, complaint handling</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h4 className="font-semibold mb-4">Delivery Formats</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>On-site Classroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Virtual Live Webinars</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Self-Paced E-Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Hybrid Programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Custom Workshops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#3B82F6]">✓</span>
                      <span>Train-the-Trainer</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <h4 className="font-semibold mb-3">Training Features</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Interactive case studies and real-world scenarios</li>
                      <li>• Knowledge assessments and competency verification</li>
                      <li>• Certificates of completion for regulatory files</li>
                      <li>• Customizable to your SOPs and systems</li>
                      <li>• Expert instructors with industry experience</li>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Comprehensive Training Materials
                </h3>
                <p className="text-gray-600 text-sm">
                  Participant guides, slide decks, reference materials, job aids, and access to online resource libraries for ongoing reference.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Certificates & Training Records
                </h3>
                <p className="text-gray-600 text-sm">
                  Individual certificates of completion, attendance records, assessment scores, and documentation suitable for regulatory inspections.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Competency Assessments
                </h3>
                <p className="text-gray-600 text-sm">
                  Pre- and post-training knowledge assessments, practical exercises, and verification of understanding with minimum passing criteria.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Expert Instructors
                </h3>
                <p className="text-gray-600 text-sm">
                  Seasoned pharmaceutical professionals with regulatory inspection experience, industry expertise, and adult learning certifications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Customized Content
                </h3>
                <p className="text-gray-600 text-sm">
                  Training tailored to your SOPs, systems, products, and specific regulatory requirements with industry-relevant examples.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">
                  Post-Training Support
                </h3>
                <p className="text-gray-600 text-sm">
                  30-day post-training support for questions, follow-up assessments, coaching for internal trainers, and effectiveness monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timelines & Engagement Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#111827] text-center mb-12">
              Training Durations & Formats
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Typical Training Durations
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Fundamentals & Awareness</h4>
                    <p className="text-gray-600 text-sm mb-2">4-8 hours (half-day to full-day)</p>
                    <p className="text-gray-500 text-xs">GMP basics, awareness training, introductory topics</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Intermediate Technical Training</h4>
                    <p className="text-gray-600 text-sm mb-2">2-3 days</p>
                    <p className="text-gray-500 text-xs">CAPA, data integrity, auditing, technical writing</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Advanced Certification Programs</h4>
                    <p className="text-gray-600 text-sm mb-2">5-10 days (can be split)</p>
                    <p className="text-gray-500 text-xs">CSV, audit certification, train-the-trainer, quality metrics</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-lg mb-2">Custom Workshop Series</h4>
                    <p className="text-gray-600 text-sm mb-2">Flexible scheduling</p>
                    <p className="text-gray-500 text-xs">Multiple sessions scheduled around operational needs</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold outfit text-[#111827] mb-6">
                  Training Engagement Models
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Public Scheduled Sessions</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Regularly scheduled open-enrollment training sessions. Cost-effective for individuals or small groups.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Pre-scheduled dates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Per-participant pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Virtual or selected venues</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Private On-Site Training</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Customized training delivered at your facility for your entire team with company-specific content.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Customized to your needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Flexible scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Unlimited participants</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#3B82F6]">
                    <h4 className="font-semibold text-xl mb-3">Train-the-Trainer Programs</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Build internal training capability with complete training packages, materials, and ongoing support.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Internal capability building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Complete training kits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">→</span>
                        <span>Long-term cost savings</span>
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
              Ready to Build Your Team's Competency?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get expert GMP, data integrity, CAPA, and compliance training customized to your organization's needs.
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

export default Training;
