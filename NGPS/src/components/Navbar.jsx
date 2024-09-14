import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-[#F7F9FB] p-4 rounded-[30px] shadow-lg flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center space-x-2 md:pl-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <img src="/compname.png" alt="Company Name" className="h-8" />
        </div>
      </Link>
      {/*----------------------------------------- Hamburger Menu for Mobile -----------------------------------------*/}
      <div className="md:hidden font-bold text-[#2C3E50] outfit">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-gray-700"
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
          <ul className="absolute right-0 mt-2 w-30 bg-white rounded-lg shadow-lg py-2 animate-slide-in-top">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
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
              {servicesOpen && (
                <ul className="absolute left-[-197px] top-0 w-29 text-sm bg-white rounded-lg shadow-lg py-2 animate-slide-in-right">
                  <li>
                    <Link
                      to="/gmpaudits"
                      className="block px-2 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      GMP Audits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/qualityconsulting"
                      className="block px-2 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Quality Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/computersystemvalidations"
                      className="block px-2 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Computer System Validations
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/training"
                      className="block px-2 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/regulatoryaffairs"
                      className="block px-2 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Regulatory Affairs
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contactus"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/*--------------------------------------------------------------- Full Menu for Larger Screens -------------------------------------------------------------------------*/}
      <ul className="hidden md:flex space-x-6 items-center md:pr-3 font-bold text-[#2C3E50] outfit">
        <li>
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-gray-700">
            About Us
          </Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-gray-700 focus:outline-none"
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
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 animate-slide-in-top">
              <li>
                <Link
                  to="/gmpaudits"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  GMP Audits
                </Link>
              </li>
              <li>
                <Link
                  to="/qualityconsulting"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Quality Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/computersystemvalidations"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Computer System Validations
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/regulatoryaffairs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Regulatory Affairs
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contactus" className="hover:text-gray-700">
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
      `}</style>
    </nav>
  );
};

export default Navbar;
