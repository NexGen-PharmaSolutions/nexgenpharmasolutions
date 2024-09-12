import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Contactus = () => {
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

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Ensure to use your actual access key here
    formData.append("access_key", "8f056dc4-21a2-4dcd-a428-10cda721b2a9");

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
    <div className="min-h-screen bg-[#E1EAF2]">
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section
          className="relative flex flex-col justify-center items-center h-[150px] md:h-[200px] bg-cover bg-center p-8"
          id="hero"
          style={{ backgroundImage: "url('/herobg.png')" }}
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#34495E] animate-[pop-out_1s_ease-out_forwards]">
              Contact Us
            </h1>
          </div>
          <style jsx>{`
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
        {/*------------------------------------------ Get In Touch ------------------------------------------*/}
        <section id="GIT" className="py-12 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-center">
            <h2 className="text-3xl md:text-4xl font-bold outfit text-[#34495E] mb-8">
              Get In Touch
              <div className="md:w-[150px] w-[100px] h-1 mx-auto my-4 bg-[#34495E]"></div>
            </h2>
            <div
              ref={sectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700"
            >
              {/*------------------------------------------ Location ------------------------------------------*/}
              <div className="flex flex-col items-center rounded-2xl py-4 px-2 shadow-xl bg-[#c5d2e7]">
                <img
                  src="/location.png"
                  alt="location"
                  className="md:w-16 md:h-16 w-8 h-8 mb-4"
                />
                <p className="md:text-[16px] text-[12px] font-medium montserrat">
                  E-402 , The Imperia , Gotri , Vadodara
                </p>
              </div>
              {/*------------------------------------------ Contact ------------------------------------------*/}
              <div className="flex flex-col items-center rounded-2xl shadow-xl bg-[#c5d2e7] py-4 px-2">
                <img
                  src="/contact.png"
                  alt="Contact"
                  className="md:w-16 md:h-16 w-8 h-8 mb-4"
                />
                <p className="md:text-[16px] text-[12px] font-medium montserrat">
                  +91 75748 85488
                </p>
              </div>
              {/*------------------------------------------ Mail ------------------------------------------*/}
              <div className="flex flex-col items-center rounded-2xl shadow-xl bg-[#c5d2e7] py-4 px-2">
                <img
                  src="/email.png"
                  alt="Mail"
                  className="md:w-16 md:h-16 w-8 h-8 mb-4"
                />
                <p className="md:text-[16px] text-[12px] font-medium montserrat">
                  <a
                    href="mailto:nexgenpharmasolution@gmail.com"
                    className="font-medium montserrat"
                  >
                    nexgenpharmasolution@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full lg:w-1/2 p-2 md:p-4">
                {/*------------------------------------------ Google Map ------------------------------------------*/}
                <div className="bg-[#c5d2e7] shadow-xl md:p-4 p-2 rounded-2xl">
                  <iframe
                    className="w-full md:h-96 h-[250px] rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.576833008528!2d73.13671897533682!3d22.31101397967894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc88967e18759%3A0xe791f52ef7f516f6!2sThe%20Imperia%2C%20B%2FH.%20Yash%20Complex%2C%20Gotri%2C%20Vadodara%2C%20Gujarat%20390021!5e1!3m2!1sen!2sin!4v1726131005649!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                {/*------------------------------------------ Form ------------------------------------------*/}
                <div className="bg-[#c5d2e7] shadow-xl p-6 rounded-2xl">
                  <form className="space-y-4" onSubmit={onSubmit}>
                    <input
                      type="hidden"
                      name="access_key"
                      value="8f056dc4-21a2-4dcd-a428-10cda721b2a9"
                    />

                    {/*------------------------------------------ Name Input ------------------------------------------*/}
                    <div>
                      <label className="block text-[#34495E] font-medium mb-2 outfit">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg inter"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/*------------------------------------------ Email Input ------------------------------------------*/}
                    <div>
                      <label className="block text-[#34495E] font-medium mb-2 outfit">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg inter"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/*------------------------------------------ Subject Input ------------------------------------------*/}
                    <div>
                      <label className="block text-[#34495E] font-medium mb-2 outfit">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg inter"
                        placeholder="Enter the subject"
                      />
                    </div>

                    {/*------------------------------------------ Request Dropdown ------------------------------------------*/}
                    <div>
                      <label className="block text-[#34495E] font-medium mb-2 outfit">
                        Request
                      </label>
                      <select
                        name="request"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg inter"
                        onChange={handleRequestChange}
                      >
                        <option value="">Please choose an option</option>
                        <option value="audit">Request a new audit</option>
                        <option value="consultation">
                          Request for quality consultation
                        </option>
                        <option value="dmf">Request for DMF filing</option>
                        <option value="training">
                          Request for industrial training
                        </option>
                        <option value="csv">Request for CSV</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    {/*------------------------------------------ Conditional "Other Request" Textbox ------------------------------------------*/}
                    <div id="otherRequest" style={{ display: "none" }}>
                      <label className="block text-[#34495E] font-medium mb-2 outfit">
                        Other Request
                      </label>
                      <input
                        type="text"
                        name="otherRequest"
                        className={`w-full border border-gray-300 p-2 rounded-lg inter ${
                          isOtherRequestRequired ? "required" : ""
                        }`}
                        placeholder="Please specify"
                        required={isOtherRequestRequired}
                      />
                    </div>

                    {/*------------------------------------------ Company Name Input ------------------------------------------*/}
                    <div>
                      <label className="block text-[#34495E] font-medium mb-2 outfit">
                        Your Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg inter"
                        placeholder="Enter your company name"
                      />
                    </div>

                    {/*------------------------------------------ Message Textarea ------------------------------------------*/}
                    <div>
                      <label className="block text-[#34495E] font-medium mb-2 outfit">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg inter"
                        rows="4"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>

                    {/*------------------------------------------ Submit Button ------------------------------------------*/}
                    <div>
                      <button
                        type="submit"
                        className="bg-[#34495E] text-white p-2 rounded-lg w-full outfit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <span className="pt-2">{result}</span>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes popUp {
              0% {
                transform: translateY(100px);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }

            .animate-popUp {
              opacity: 1 !important;
              animation: popUp 0.7s ease-out forwards;
            }
          `}</style>
        </section>
      </main>
      <footer className="p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Contactus;
