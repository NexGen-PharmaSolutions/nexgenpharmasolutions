import  { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Training = () => {

  const fadeInRef = useRef(null);
  // Remove the unused variable declaration
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    const fadeInElement = fadeInRef.current;
    if (fadeInElement) {
      observer.observe(fadeInElement);
    }
    return () => {
      if (fadeInElement) {
        observer.unobserve(fadeInElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E1EAF2]">
      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative z-10">
        {/*------------------------------------------ Hero Section ------------------------------------------------------------*/}
        <section
          className="relative flex flex-col justify-center items-center h-[300px] md:h-[600px] bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/training.png')" }}
          id="hero"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold outfit text-[#34495E] animate-[pop-out_1s_ease-out_forwards]">
              Training
            </h1>
            <p className="mt-4 text-[10px] md:text-xl text-black inter font-medium animate-[pop-out_1s_ease-out_forwards] md:w-[500px] ">
            Our tailored training programs provide your staff with essential knowledge and best practices for GMP compliance, ensuring they are well-prepared to maintain high-quality standards. We cover all aspects of GMP requirements, from regulatory guidelines to practical applications, fostering a culture of excellence within your organization.

            </p>
          </div>
          <style >{`
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
        {/*------------------------------------------ RA Info ------------------------------------------*/}
        <section id="RAIN" className="md:py-16 py-8 px-4 md:px-8">
          <h3 className="text-[12px] md:text-lg inter font-semibold text-left mb-4">
            Information is Strength, and Technology is Rapidly Advancing. To
            Stay Ahead in the Competitive Landscape, particularly as a
            Pharmaceutical Professional, it&rsquo;s Essential to Stay Up-to-Date on
            the Latest Developments, Cutting-Edge Innovations, and Global
            Regulatory Changes. At NexGen Pharma Solutions, We Design and
            Deliver Tailored Training Initiatives for Pharma and Biotech
            Experts. Respected and Seasoned International Authorities Share
            their Insights and Expertise, Offering Practical Strategies for
            Real-World Challenges :
          </h3>
          <div
            ref={fadeInRef}
            className="opacity-0 transition-opacity duration-1000 ease-in-out"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] md:text-[14px]">
              {/*------------------------------------------ Left div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>Interactive Learning Modules</li>
                  <li>Expert-Led Instruction</li>
                  <li>Flexible Training Formats</li>
                  <li>QUALITY METRICS</li>
                </ul>
              </div>
              {/*------------------------------------------ Mid Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>BEHAVIORAL GMP</li>
                  <li>CAPA/RCA</li>
                  <li>TRAIN THE TRAINER</li>
                  <li>AUDIT ACUMEN</li>
                  <li>DATA INTEGRITY</li>
                </ul>
              </div>
              {/*------------------------------------------ Right Div ------------------------------------------*/}
              <div className="p-4 rounded-2xl">
                <ul className="list-disc list-inside space-y-4 montserrat font-medium">
                  <li>TECHNICAL WRITING</li>
                  <li>QUALITY RISK MANAGEMENT</li>
                  <li>INVESTIGATIVE REPORT WRITING</li>
                  <li>COMPUTER SYSTEM VALIDATION</li>
                </ul>
              </div>
            </div>
            <p className="text-[12px] md:text-lg montserrat font-medium text-left">
              Join us to build a foundation of quality that enhances your
              reputation and meets regulatory requirements.
            </p>
          </div>
          <style >{`
            .fade-in {
              opacity: 1 !important;
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

export default Training;
