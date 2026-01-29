import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>Terms & Conditions | NexGen Pharma Solutions Pvt. Ltd.</title>
        <meta
          name="description"
          content="Terms and Conditions for using NexGen Pharma Solutions Private Limited's website and services."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[#111827] mb-4 outfit">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 21, 2026
          </p>

          <div className="space-y-8 text-[#111827] outfit leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website of NexGen Pharma Solutions Private Limited ("Company", "we", "us", or "our"), 
                you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
                please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="mb-3">
                NexGen Pharma Solutions Private Limited provides pharmaceutical consulting services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>GMP Audits (Vendor, Internal, Mock EDQM-USFDA)</li>
                <li>Quality Management Systems and Remediation</li>
                <li>Regulatory Affairs Support</li>
                <li>Technology Transfer and Validation Services</li>
                <li>Computer System Validation</li>
                <li>Corporate Training Programs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Use of Website</h2>
              <h3 className="text-xl font-semibold mb-3 mt-4">3.1 Permitted Use</h3>
              <p className="mb-3">You may use this website for lawful purposes only, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Viewing information about our services</li>
                <li>Submitting inquiries and contact forms</li>
                <li>Requesting proposals or quotes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Prohibited Activities</h3>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website in any unlawful manner or for fraudulent purposes</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Collect or harvest data from the website using automated means</li>
                <li>Reproduce, duplicate, or copy any content without written permission</li>
                <li>Misrepresent your identity or affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
              <p className="mb-3">
                All content on this website, including but not limited to text, graphics, logos, images, and software, 
                is the property of NexGen Pharma Solutions Private Limited and is protected by Indian and international 
                copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Service Engagement</h2>
              <h3 className="text-xl font-semibold mb-3 mt-4">5.1 Proposals and Contracts</h3>
              <p>
                Specific terms for service engagements will be outlined in separate proposals, statements of work, 
                or service agreements. These Terms & Conditions govern general website use but do not constitute 
                a service agreement.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.2 No Guarantee of Services</h3>
              <p>
                Visiting this website or submitting inquiries does not guarantee service availability or engagement. 
                All service engagements are subject to mutual agreement and execution of appropriate contracts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
              <p className="mb-3">
                This website and its content are provided "as is" and "as available" without warranties of any kind, 
                either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Accuracy, completeness, or reliability of information</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Freedom from viruses or harmful components</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, NexGen Pharma Solutions Private Limited shall not be liable for any 
                direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or 
                reliance on information provided, including but not limited to loss of profits, data, or business opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites for your convenience. We do not endorse or assume 
                responsibility for the content, privacy practices, or terms of these external sites. Access to third-party 
                websites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
              <p>
                Any proprietary or confidential information shared through our website inquiry forms will be handled in 
                accordance with our Privacy Policy. For detailed confidentiality terms related to specific service engagements, 
                separate Non-Disclosure Agreements (NDAs) may be executed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless NexGen Pharma Solutions Private Limited, its directors, employees, 
                and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from 
                your use of the website or violation of these Terms & Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately 
                upon posting on this page with an updated "Last Updated" date. Your continued use of the website after 
                changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Jurisdiction</h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms or website use shall be subject to the exclusive jurisdiction 
                of the courts in [Jurisdiction to be specified].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
              <p>
                If any provision of these Terms & Conditions is found to be invalid or unenforceable, the remaining 
                provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="mb-3">
                For questions regarding these Terms & Conditions, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">NexGen Pharma Solutions Private Limited</p>
                <p>Email: <a href="mailto:inquiry@nexgenpharmasolutions.com" className="text-[#3B82F6] hover:underline">inquiry@nexgenpharmasolutions.com</a></p>
                <p className="mt-2 text-sm text-gray-600">Registered Office: 412 & 420 PRINCE CUBE, Beside Gangotri Exotica, Laxmipura Char Rasta, Nayaran Garden, 30 Mtr Road, Gotri, Vadodara, Gujarat 390023, India</p>
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

export default TermsConditions;
