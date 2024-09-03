import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-4 rounded-2xl bg-[#F7F9FB] text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Logo and Company Name */}
        <div className="flex items-center justify-center w-full md:w-1/2 space-x-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="lg:w-[120px] lg:h-[120px] w-20 h-20"
          />
          <img
            src="/compname.png"
            alt="Company Name"
            className="w-auto lg:h-[110px] h-[60px]"
          />
        </div>

        {/* Right side: Links */}
        <div className="flex justify-center w-full md:w-1/2 mt-4 md:mt-0 space-x-5 lg:space-x-[150px] font-semibold text-[#2C3E50] outfit">
          <div className="flex flex-col space-y-4 text-left">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/aboutus" className="hover:underline">
              About Us
            </Link>
            <Link to="/gmp-audits" className="hover:underline">
              GMP Audits
            </Link>
          </div>
          <div className="flex flex-col space-y-4 text-left">
            <Link to="/quality-consulting" className="hover:underline">
              Quality Consulting
            </Link>
            <Link to="/computer-system-validations" className="hover:underline">
              Computer System Validations
            </Link>
            <Link to="/contact-us" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/*----------------------------------------- Copyright and Credits -------------------------------------------------------*/}
      <div className="text-center mt-10 space-y-2">
        <p>© 2024 NexGen Pharma Solutions, India. All rights reserved.</p>
        {/* <p>
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/jeet-mistry-67a613233/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            Jeet Mistry
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/pratham-shrivastav-b81180251/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            Pratham Shrivastav
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
