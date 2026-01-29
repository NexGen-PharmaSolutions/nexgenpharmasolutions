import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>Disclaimer | NexGen Pharma Solutions Pvt. Ltd.</title>
        <meta
          name="description"
          content="Legal disclaimer for NexGen Pharma Solutions Private Limited's website and services."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[#111827] mb-4 outfit">
            Disclaimer
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 21, 2026
          </p>

          <div className="space-y-8 text-[#111827] outfit leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4">General Information</h2>
              <p>
                The information provided on this website by NexGen Pharma Solutions Private Limited ("Company", "we", "us", or "our") 
                is for general informational purposes only. All information on the website is provided in good faith; however, 
                we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                reliability, availability, or completeness of any information on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Professional Advice Disclaimer</h2>
              <p className="mb-3">
                The content on this website is not intended to be a substitute for professional pharmaceutical, regulatory, 
                or legal advice. The information provided should not be relied upon as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Regulatory guidance or official interpretation of pharmaceutical regulations</li>
                <li>Legal advice or consultation</li>
                <li>Specific recommendations for your organization without proper assessment</li>
                <li>A substitute for engagement with qualified regulatory or quality professionals</li>
              </ul>
              <p className="mt-4">
                Always seek the guidance of qualified professionals with questions regarding specific pharmaceutical, 
                regulatory, or quality matters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">No Client-Consultant Relationship</h2>
              <p>
                Use of this website does not create a consultant-client relationship between you and NexGen Pharma Solutions 
                Private Limited. Formal engagement requires execution of a written service agreement outlining scope, 
                deliverables, timelines, and commercial terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
              <p className="mb-3">
                This website may contain links to external websites that are not operated by us. We have no control over, 
                and assume no responsibility for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The content, privacy policies, or practices of third-party websites</li>
                <li>The accuracy or reliability of information on external sites</li>
                <li>Products, services, or resources provided by third parties</li>
              </ul>
              <p className="mt-4">
                We strongly advise you to review the terms and privacy policies of any third-party websites you visit. 
                Links are provided for convenience and do not constitute endorsement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Errors and Omissions</h2>
              <p>
                While we strive to ensure that the information on this website is current and accurate, we do not warrant 
                that the website will be error-free or that defects will be corrected. Information may contain technical 
                inaccuracies or typographical errors and may be updated without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-3">
                Under no circumstance shall NexGen Pharma Solutions Private Limited have any liability to you for any loss 
                or damage of any kind incurred as a result of:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use of this website or reliance on information provided</li>
                <li>Inability to use the website</li>
                <li>Errors, omissions, or inaccuracies in content</li>
                <li>Interruptions in service or website availability</li>
                <li>Actions taken based on website content</li>
              </ul>
              <p className="mt-4">
                Your use of the website and reliance on any information is solely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Regulatory Compliance Disclaimer</h2>
              <p>
                Information provided on this website regarding pharmaceutical regulations, GMP requirements, or compliance 
                matters is general in nature and may not reflect the most current regulatory developments. Pharmaceutical 
                regulations vary by jurisdiction and are subject to frequent updates.
              </p>
              <p className="mt-3">
                Organizations must conduct their own regulatory research and consult with qualified professionals to ensure 
                compliance with applicable laws and regulations in their specific jurisdictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Descriptions</h2>
              <p>
                Descriptions of services on this website are general overviews. Actual service deliverables, methodologies, 
                timelines, and outcomes will be defined in formal service agreements and may vary based on client-specific 
                requirements and circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Testimonials and Case Studies</h2>
              <p>
                Any testimonials, case studies, or success stories presented on this website represent specific client 
                experiences and may not be indicative of future results. Results vary based on multiple factors including 
                client circumstances, engagement scope, and organizational capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Disclaimer</h2>
              <p>
                We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective 
                immediately upon posting on this page with an updated "Last Updated" date. It is your responsibility to 
                review this disclaimer periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance</h2>
              <p>
                By using this website, you acknowledge that you have read this disclaimer and agree to its terms. 
                If you do not agree with this disclaimer, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-3">
                If you have questions about this disclaimer, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">NexGen Pharma Solutions Private Limited</p>
                <p>Email: <a href="mailto:inquiry@nexgenpharmasolutions.com" className="text-[#3B82F6] hover:underline">inquiry@nexgenpharmasolutions.com</a></p>
                <p className="mt-2 text-sm text-gray-600">Registered Office: 413 & 420 PRINCE CUBE, Beside Gangotri Exotica, Laxmipura Char Rasta, Nayaran Garden, 30 Mtr Road, Gotri, Vadodara, Gujarat 390023, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="p-2 mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Disclaimer;
