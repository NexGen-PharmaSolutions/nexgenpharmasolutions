import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-[#F5EAD8]">
      <Helmet>
        <title>About Us | NexGen Pharma Solutions - Expert GMP Consulting</title>
        <meta name="description" content="NexGen Pharma Solutions is a leading GMP consulting firm providing expert regulatory affairs, quality assurance, CSV, and training services for pharmaceutical manufacturing excellence." />
        <meta name="keywords" content="About NexGen Pharma, GMP Consulting Company, Pharmaceutical Consulting Services, Regulatory Affairs Experts, Quality Assurance Consulting, CSV Services, Pharma Training, Company Profile" />
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
                About NexGen Pharma Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
                Leading provider of GMP consulting, regulatory affairs, and quality assurance services. Empowering pharmaceutical companies to achieve excellence through expert guidance, innovative solutions, and unwavering commitment to compliance.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
              <Link
                to="/contactus#contact-form"
                className="px-8 py-3 bg-[#AA5C29] hover:bg-[#8C491A] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
              >
                Partner With Us
              </Link>
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

        {/* Mission & Vision Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#201E1D] text-center mb-12">
              Our Mission & Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-[#F9F4ED] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#FFF2EB] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold outfit text-[#201E1D]">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To deliver exceptional GMP consulting services that ensure the highest standards of quality, compliance, and safety in pharmaceutical manufacturing. We provide expert guidance, innovative solutions, and personalized support to help clients navigate complex regulatory environments, optimize operations, and achieve long-term success. By fostering a culture of integrity, excellence, and collaboration, we enhance product quality and safeguard public health.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#F9F4ED] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#FFF2EB] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold outfit text-[#201E1D]">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be the global leader in GMP consulting, driving excellence and innovation in pharmaceutical manufacturing. We empower companies with the highest standards of quality and regulatory compliance, fostering a safer, more efficient, and sustainable healthcare industry worldwide. Through our expertise and commitment, we envision a future where every product meets uncompromising safety and efficacy standards, ensuring better health outcomes for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 px-4 bg-[#F9F4ED]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#201E1D] text-center mb-12">
              Our Comprehensive Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* GMP Audits */}
              <Link to="/gmpaudits" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F4CDB2] transition-colors">
                    <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3 group-hover:text-[#8C491A] transition-colors">
                    GMP Audits
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive GMP audits to ensure your operations meet regulatory standards and international compliance requirements.
                  </p>
                  <span className="text-[#8C491A] font-semibold text-sm group-hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* Quality Consulting */}
              <Link to="/qualityconsulting" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F4CDB2] transition-colors">
                    <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3 group-hover:text-[#8C491A] transition-colors">
                    Quality Consulting
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Expert consulting for deviation management, CAPA optimization, and quality system remediation to strengthen compliance.
                  </p>
                  <span className="text-[#8C491A] font-semibold text-sm group-hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* Regulatory Affairs */}
              <Link to="/regulatoryaffairs" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F4CDB2] transition-colors">
                    <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3 group-hover:text-[#8C491A] transition-colors">
                    Regulatory Affairs
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    DMF preparation, IND/NDA/ANDA submissions, and strategic regulatory guidance for global market approvals.
                  </p>
                  <span className="text-[#8C491A] font-semibold text-sm group-hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* CSV Services */}
              <Link to="/computersystemvalidations" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F4CDB2] transition-colors">
                    <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3 group-hover:text-[#8C491A] transition-colors">
                    Computer System Validation
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    GAMP 5 compliant CSV services for GxP systems, ensuring data integrity and 21 CFR Part 11 compliance.
                  </p>
                  <span className="text-[#8C491A] font-semibold text-sm group-hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* Training */}
              <Link to="/training" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#FFF2EB] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F4CDB2] transition-colors">
                    <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3 group-hover:text-[#8C491A] transition-colors">
                    Training Programs
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive GMP, data integrity, CAPA, and compliance training programs for pharmaceutical professionals.
                  </p>
                  <span className="text-[#8C491A] font-semibold text-sm group-hover:underline">Learn More →</span>
                </div>
              </Link>

              {/* View All Services */}
              <Link to="/#services" className="group">
                <div className="bg-gradient-to-br from-[#2E2B25] to-[#3D372E] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center items-center text-white">
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold outfit mb-3">
                    View All Services
                  </h3>
                  <p className="text-gray-200 text-sm text-center mb-4">
                    Explore our complete portfolio of pharmaceutical consulting solutions
                  </p>
                  <span className="font-semibold text-sm group-hover:underline">Explore Now →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#201E1D] text-center mb-12">
              Why Choose NexGen Pharma Solutions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFF2EB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Innovative Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Cutting-edge GMP consultation leveraging latest technologies and creative problem-solving for compliance and efficiency.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFF2EB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Distinguished Expertise
                </h3>
                <p className="text-gray-600 text-sm">
                  Unparalleled expertise and proven track record in GMP regulations, providing top-tier consultation for enhanced quality.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFF2EB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Pristine Quality
                </h3>
                <p className="text-gray-600 text-sm">
                  Maintaining highest quality standards in GMP processes, ensuring meticulous compliance and audit-readiness for all operations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFF2EB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-600 text-sm">
                  Supporting internal and external audits globally, helping clients prepare and respond effectively to regulatory requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFF2EB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Efficiency & Value
                </h3>
                <p className="text-gray-600 text-sm">
                  Identifying compliance gaps and implementing practical corrective actions that deliver lasting value and sustainable growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFF2EB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#201E1D] mb-3">
                  Tailored Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Custom quality systems, process optimization, and data integrity solutions designed specifically for your operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#2E2B25] to-[#3D372E] text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold outfit mb-6">
              Ready to Achieve GMP Excellence?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Partner with NexGen Pharma Solutions for expert GMP consulting, regulatory affairs, and quality assurance services that drive compliance and operational excellence.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/contactus#contact-form"
                className="px-8 py-3 bg-[#AA5C29] hover:bg-[#8C491A] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
              >
                Send a Message
              </Link>
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

      {/*------------------------------------------------- Footer -------------------------------------------------------------*/}
      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Aboutus;
