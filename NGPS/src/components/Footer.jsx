import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const FOOsectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
    const FOOsectionElement = FOOsectionRef.current;
    if (FOOsectionElement) {
      observer.observe(FOOsectionElement);
    }
    return () => {
      if (FOOsectionElement) {
        observer.unobserve(FOOsectionElement);
      }
    };
  }, []);

  return (
    <div ref={FOOsectionRef} className="fade-in-up p-6 md:p-8 rounded-2xl bg-[#2E2B25] text-gray-300">
      <div className="container mx-auto px-4">
        {/*----------------------------------------- Top Section: Logo, Company Name & Contact Info -----------------------------------------*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo & Company Name */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src="/logo.png"
                alt="NexGen Pharma Solutions Logo"
                className="w-20 h-20 md:w-24 md:h-24"
              />
              <img
                src="/compname.png"
                alt="NexGen Pharma Solutions"
                className="h-36 md:h-40 w-auto"
              />
            </div>
            <div className="text-sm text-gray-400 text-center md:text-left outfit space-y-1">
              <p>Premier pharmaceutical consulting & compliance solutions</p>
              <p>Redefining Pharmaceutical Excellence</p>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4 outfit text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm outfit">
              <Link to="/" className="hover:text-[#F6A06B] transition-colors duration-200">
                Home
              </Link>
              <Link to="/aboutus" className="hover:text-[#F6A06B] transition-colors duration-200">
                About Us
              </Link>
              <Link to="/gmpaudits" className="hover:text-[#F6A06B] transition-colors duration-200">
                GMP Audits
              </Link>
              <Link to="/qualityconsulting" className="hover:text-[#F6A06B] transition-colors duration-200">
                Quality Consulting
              </Link>
              <Link to="/computersystemvalidations" className="hover:text-[#F6A06B] transition-colors duration-200">
                System Validations
              </Link>
              <Link to="/training" className="hover:text-[#F6A06B] transition-colors duration-200">
                Training
              </Link>
              <Link to="/regulatoryaffairs" className="hover:text-[#F6A06B] transition-colors duration-200">
                Regulatory Affairs
              </Link>
              <Link to="/contactus" className="hover:text-[#F6A06B] transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4 outfit text-white">Contact Information</h3>
            <div className="space-y-3 text-sm outfit">
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-white">Registered Office:</p>
                  <p className="text-gray-400">413 & 420 PRINCE CUBE, Beside Gangotri Exotica</p>
                  <p className="text-gray-400">Laxmipura Char Rasta, Nayaran Garden, 30 Mtr Road</p>
                  <p className="text-gray-400">Gotri, Vadodara, Gujarat 390023, India</p>
                  <p className="text-gray-400 text-xs mt-1">CIN: [To be provided]</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:inquiry@nexgenpharmasolutions.com" className="hover:text-[#F6A06B] transition-colors duration-200">
                  inquiry@nexgenpharmasolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*----------------------------------------- Divider -----------------------------------------*/}
        <div className="border-t border-gray-700 my-6"></div>

        {/*----------------------------------------- Policy Links & Copyright -----------------------------------------*/}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm outfit">
            <Link to="/privacy-policy" className="hover:text-[#F6A06B] transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms-conditions" className="hover:text-[#F6A06B] transition-colors duration-200">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/disclaimer" className="hover:text-[#F6A06B] transition-colors duration-200">
              Disclaimer
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/cookie-notice" className="hover:text-[#F6A06B] transition-colors duration-200">
              Cookie Notice
            </Link>
          </div>
          <div className="text-sm outfit text-gray-400">
            © 2024 NexGen Pharma Solutions Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>

      <style>
            {`
              /* Initial state for the section */
.fade-in-up {
  opacity: 0;
  transform: translateY(90px); /* Start below its final position */
  transition: opacity 1s ease-out, transform 1s ease-out; /* Animation duration */
}

/* Fade in and slide up when in view */
.fade-in-up.show {
  opacity: 1;
  transform: translateY(0); /* Move to its final position */
}

            `}
          </style>
    </div>
  );
};

export default Footer;
