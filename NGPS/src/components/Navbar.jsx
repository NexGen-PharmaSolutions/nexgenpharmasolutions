import  { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-top");
          }
        });
      },
      { threshold: 0.1 }
    );

    const headerElement = headerRef.current;
    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);
  
    return (
      <nav ref={headerRef} className="header-section bg-[#F9F4ED] border border-[#EBDDC5] p-4 rounded-[30px] shadow-[0_2px_16px_rgba(32,30,29,0.07)] flex justify-between items-center h-[72px]">
        <Link to="/">
          <div className="flex items-center space-x-2 md:pl-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <img src="/compname.png" alt="Company Name" className="h-16 relative inline-block transition-transform duration-300 ease-in-out hover:scale-110" />
          </div>
        </Link>
        {/*----------------------------------------- Hamburger Menu for Mobile -----------------------------------------*/}
        <div className="md:hidden font-semibold text-[#201E1D] outfit">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-[#201E1D]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute right-4 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 animate-slide-in-top z-50 max-h-[80vh] overflow-y-auto">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#8C491A] transition-colors font-medium"
                  onClick={() => setDropdownOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#8C491A] transition-colors font-medium"
                  onClick={() => setDropdownOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="border-t border-gray-100 mt-1 pt-1">
                <button
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    setProductsOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#8C491A] transition-colors font-medium"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {servicesOpen && (
                  <ul className="bg-gray-50 py-1 mt-1">
                    <li>
                      <Link
                        to="/gmpaudits"
                        className="flex items-center px-4 py-2 pl-6 text-gray-700 hover:bg-blue-50 hover:text-[#8C491A] transition-colors text-sm"
                        onClick={() => {
                          setDropdownOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        <span className="mr-2">•</span>
                        <span>GMP Audits</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/qualityconsulting"
                        className="flex items-center px-4 py-2 pl-6 text-gray-700 hover:bg-blue-50 hover:text-[#8C491A] transition-colors text-sm"
                        onClick={() => {
                          setDropdownOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        <span className="mr-2">•</span>
                        <span>Quality Consulting</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/computersystemvalidations"
                        className="flex items-center px-4 py-2 pl-6 text-gray-700 hover:bg-blue-50 hover:text-[#8C491A] transition-colors text-sm"
                        onClick={() => {
                          setDropdownOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        <span className="mr-2">•</span>
                        <span>Computer System Validations</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/training"
                        className="flex items-center px-4 py-2 pl-6 text-gray-700 hover:bg-blue-50 hover:text-[#8C491A] transition-colors text-sm"
                        onClick={() => {
                          setDropdownOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        <span className="mr-2">•</span>
                        <span>Training</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/regulatoryaffairs"
                        className="flex items-center px-4 py-2 pl-6 text-gray-700 hover:bg-blue-50 hover:text-[#8C491A] transition-colors text-sm"
                        onClick={() => {
                          setDropdownOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        <span className="mr-2">•</span>
                        <span>Regulatory Affairs</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="border-t border-gray-100 mt-1 pt-1">
                <button
                  onClick={() => {
                    setProductsOpen(!productsOpen);
                    setServicesOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#8C491A] transition-colors font-medium"
                >
                  <span>Products</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {productsOpen && (
                  <ul className="bg-gray-50 py-1 mt-1">
                    <li>
                      <Link
                        to="/products/nexgen-management-system"
                        className="flex items-center px-4 py-2 pl-6 text-gray-700 hover:bg-blue-50 hover:text-[#8C491A] transition-colors text-sm"
                        onClick={() => {
                          setDropdownOpen(false);
                          setProductsOpen(false);
                        }}
                      >
                        <span className="mr-2">•</span>
                        <div className="flex items-center gap-2">
                          <span>NexGen Management System</span>
                          <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Coming Soon</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="border-t border-gray-100 mt-1 pt-1">
                <Link
                  to="/events"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#8C491A] transition-colors font-medium"
                  onClick={() => setDropdownOpen(false)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#8C491A] transition-colors font-medium"
                  onClick={() => setDropdownOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/*--------------------------------------------------------------- Full Menu for Larger Screens -------------------------------------------------------------------------*/}
        <ul className="hidden md:flex space-x-6 items-center md:pr-3 font-semibold text-[#201E1D] outfit">
          <li>
            <Link to="/" className="relative inline-block transition-colors duration-300 hover:text-[#8C491A]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="relative inline-block transition-colors duration-300 hover:text-[#8C491A]">
              About Us
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setProductsOpen(false);
              }}
              className="focus:outline-none relative inline-block transition-colors duration-300 hover:text-[#8C491A]"
            >
              Services
              <svg
                className={`w-4 h-4 inline ml-2 transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-56 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl py-2 border border-blue-100 animate-slide-in-top z-50">
                <li className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-blue-100 mb-1">
                  Our Services
                </li>
                <li>
                  <Link
                    to="/gmpaudits"
                    className="flex items-center px-3 py-2 hover:bg-blue-100 rounded-lg mx-2 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition-colors duration-200">GMP Audits</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualityconsulting"
                    className="flex items-center px-3 py-2 hover:bg-blue-100 rounded-lg mx-2 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Quality Consulting</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/computersystemvalidations"
                    className="flex items-center px-3 py-2 hover:bg-blue-100 rounded-lg mx-2 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Computer System Validations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training"
                    className="flex items-center px-3 py-2 hover:bg-blue-100 rounded-lg mx-2 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Training</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/regulatoryaffairs"
                    className="flex items-center px-3 py-2 hover:bg-blue-100 rounded-lg mx-2 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-2.5 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Regulatory Affairs</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => {
                setProductsOpen(!productsOpen);
                setDropdownOpen(false);
              }}
              className="focus:outline-none relative inline-block transition-colors duration-300 hover:text-[#8C491A]"
            >
              Products
              <svg
                className={`w-4 h-4 inline ml-2 transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {productsOpen && (
              <ul className="absolute right-0 mt-2 w-64 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl py-2 border border-blue-100 animate-slide-in-top z-50">
                <li className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-blue-100 mb-1">
                  Our Products
                </li>
                <li>
                  <Link
                    to="/products/nexgen-management-system"
                    className="flex items-start px-3 py-3 hover:bg-blue-100 rounded-lg mx-2 transition-all duration-200 group"
                    onClick={() => setProductsOpen(false)}
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition-colors duration-200">NexGen Management System</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1.5">Complete pharma quality management</p>
                      <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-sm">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Coming Soon
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/events" className="relative inline-block transition-colors duration-300 hover:text-[#8C491A]">
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="inline-flex items-center rounded-full bg-[#AA5C29] px-5 py-2.5 text-white transition-colors duration-300 hover:bg-[#8C491A]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <style >{`
          @keyframes slideInTop {
            0% {
              transform: translateY(-20%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
  
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
  
          .animate-slide-in-top {
            animation: slideInTop 0.3s ease-out;
          }
  
          .animate-slide-in-right {
            animation: slideInRight 0.1s ease-out;
          }
            .header-section {
  opacity: 0;
  transform: translateY(-50px); /* Slide in from the top */
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Slide in and fade in */
.header-section.slide-in-top {
  opacity: 1;
  transform: translateY(0); /* Move to its original position */
}
        `}</style>
      </nav>
    );
}

export default Navbar
