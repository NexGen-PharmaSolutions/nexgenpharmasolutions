/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Contactus = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Ensure to use your actual access key here
    formData.append("access_key", "0badc78d-df2c-4a64-b2b6-70722b4cf30d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  const [isOtherRequestRequired, setIsOtherRequestRequired] = useState(false);

  const handleRequestChange = (e) => {
    const value = e.target.value;
    setIsOtherRequestRequired(value === "others");
    document.getElementById("otherRequest").style.display =
      value === "others" ? "block" : "none";
  };

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>Contact Us | NexGen Pharma Solutions - Get In Touch</title>
        <meta name="description" content="Contact NexGen Pharma Solutions for expert GMP consulting, quality assurance, regulatory affairs, CSV, and training services. Reach out to our team via email or contact form." />
        <meta name="keywords" content="Contact Pharma Consulting, GMP Audits Contact, Regulatory Affairs Inquiry, Quality Assurance Consulting, Pharmaceutical Consulting Contact, CSV Services Inquiry" />
      </Helmet>
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section className="relative bg-gradient-to-r from-[#475569] via-[#64748b] to-[#475569] text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold outfit mb-4">
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
                Have questions about our GMP consulting services? We're here to help you achieve pharmaceutical excellence. Reach out today.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="#contact-form"
                className="px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
              >
                Send Us a Message
              </a>
              <a
                href="mailto:inquiry@nexgenpharmasolutions.com"
                className="flex items-center gap-2 px-8 py-3 bg-white text-[#111827] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/*------------------------------------------ Get In Touch Section ------------------------------------------*/}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#111827] text-center mb-12">
              Our Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/*------------------------------------------ Location ------------------------------------------*/}
              <div className="bg-[#F7F9FB] p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">Our Location</h3>
                <p className="text-gray-600 montserrat">
                  412 & 420 PRINCE CUBE<br />
                  Beside Gangotri Exotica<br />
                  Laxmipura Char Rasta, Nayaran Garden<br />
                  30 Mtr Road, Gotri<br />
                  Vadodara, Gujarat 390023<br />
                  India
                </p>
                <a 
                  href="https://maps.app.goo.gl/JVyzYr2iMCrMq6XEA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#3B82F6] hover:text-[#2563EB] transition-colors text-sm font-medium"
                >
                  View on Google Maps →
                </a>
              </div>

              {/*------------------------------------------ Email ------------------------------------------*/}
              <div className="bg-[#F7F9FB] p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-3">Email Us</h3>
                <a href="mailto:inquiry@nexgenpharmasolutions.com" className="text-gray-600 montserrat hover:text-[#3B82F6] transition-colors text-sm">
                  inquiry@nexgenpharmasolutions.com
                </a>
              </div>
            </div>

            {/* Map and Form Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/*------------------------------------------ Google Map ------------------------------------------*/}
              <div className="bg-[#F7F9FB] p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-4">Find Us</h3>
                <div className="relative">
                  <iframe
                    className="w-full h-96 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.499!2d73.1623589!3d22.2909475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cf97bb1f8b%3A0x9c4db4ec4e5c3db5!2sPrince%20Cube%2C%20Gotri%2C%20Vadodara%2C%20Gujarat%20390023!5e0!3m2!1sen!2sin!4v1738080000000!5m2!1sen!2sin&markers=color:red%7C22.2909475,73.1623589"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://maps.app.goo.gl/JVyzYr2iMCrMq6XEA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 rounded-lg transition-colors text-center font-medium outfit flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View on Google Maps
                  </a>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=22.2909475,73.1623589&destination_place_id=ChIJS-8LbM_8X0ER-FZwGwf-RuE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-white hover:bg-gray-50 text-[#3B82F6] border-2 border-[#3B82F6] py-3 px-4 rounded-lg transition-colors text-center font-medium outfit flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>

              {/*------------------------------------------ Contact Form ------------------------------------------*/}
              <div className="bg-[#F7F9FB] p-6 rounded-lg shadow-md" id="contact-form">
                <h3 className="text-xl font-semibold outfit text-[#111827] mb-4">Send Us a Message</h3>
                <form className="space-y-4" onSubmit={onSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="0badc78d-df2c-4a64-b2b6-70722b4cf30d"
                  />

                  {/*------------------------------------------ Name Input ------------------------------------------*/}
                  <div>
                    <label className="block text-[#111827] font-medium mb-2 outfit text-sm">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg inter focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/*------------------------------------------ Email Input ------------------------------------------*/}
                  <div>
                    <label className="block text-[#111827] font-medium mb-2 outfit text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg inter focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/*------------------------------------------ Subject Input ------------------------------------------*/}
                  <div>
                    <label className="block text-[#111827] font-medium mb-2 outfit text-sm">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg inter focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="Enter the subject"
                    />
                  </div>

                  {/*------------------------------------------ Request Dropdown ------------------------------------------*/}
                  <div>
                    <label className="block text-[#111827] font-medium mb-2 outfit text-sm">
                      Request <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="request"
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg inter focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      onChange={handleRequestChange}
                    >
                      <option value="">Please choose an option</option>
                      <option value="new audit">Request a new audit</option>
                      <option value="consultation">Request for quality consultation</option>
                      <option value="DMF filing">Request for DMF filing</option>
                      <option value="training">Request for industrial training</option>
                      <option value="CSV">Request for CSV</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  {/*------------------------------------------ Conditional "Other Request" Textbox ------------------------------------------*/}
                  <div id="otherRequest" style={{ display: "none" }}>
                    <label className="block text-[#111827] font-medium mb-2 outfit text-sm">
                      Other Request <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="otherRequest"
                      className="w-full border border-gray-300 p-3 rounded-lg inter focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="Please specify"
                      required={isOtherRequestRequired}
                    />
                  </div>

                  {/*------------------------------------------ Company Name Input ------------------------------------------*/}
                  <div>
                    <label className="block text-[#111827] font-medium mb-2 outfit text-sm">
                      Your Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg inter focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/*------------------------------------------ Message Textarea ------------------------------------------*/}
                  <div>
                    <label className="block text-[#111827] font-medium mb-2 outfit text-sm">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg inter focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  {/*------------------------------------------ Submit Button ------------------------------------------*/}
                  <div>
                    <button
                      type="submit"
                      className="bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-6 rounded-lg w-full outfit font-semibold transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                  
                  {result && (
                    <div className={`text-center py-2 px-4 rounded-lg ${result.includes('Successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {result}
                    </div>
                  )}
                </form>
              </div>
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

export default Contactus;
