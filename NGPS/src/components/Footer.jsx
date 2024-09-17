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
    <div ref={FOOsectionRef} className="fade-in-up p-4 rounded-2xl bg-[#F7F9FB] text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/*----------------------------------------- Left side: Logo and Company Name -----------------------------------------*/}
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

        {/*----------------------------------------- Right side: Links -----------------------------------------*/}
        <div className="flex justify-center w-full md:w-1/2 mt-4 md:mt-0 space-x-5 lg:space-x-[150px] md:pl-0 pl-5 font-semibold text-[#2C3E50] outfit">
          <div className="flex flex-col space-y-4 text-left">
            <Link to="/" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
              Home
            </Link>
            <Link to="/aboutus" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
              About Us
            </Link>
            <Link to="/gmpaudits" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
              GMP Audits
            </Link>
            <Link to="/qualityconsulting" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
              Quality Consulting
            </Link>
          </div>
          <div className="flex flex-col space-y-4 text-left">
            <Link to="/computersystemvalidations" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
              Computer System Validations
            </Link>
            <Link to="/training" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
              Training
            </Link>
            <Link to="/regulatoryaffairs" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
            Regulatory Affairs
            </Link>
            <Link to="/contactus" className="hover:underline relative inline-block transition-transform duration-300 ease-in-out hover:scale-110">
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
