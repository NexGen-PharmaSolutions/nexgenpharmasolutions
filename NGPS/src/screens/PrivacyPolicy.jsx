import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>Privacy Policy | NexGen Pharma Solutions Pvt. Ltd.</title>
        <meta
          name="description"
          content="Privacy Policy of NexGen Pharma Solutions Private Limited. Learn how we collect, use, and protect your information."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[#111827] mb-4 outfit">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 21, 2026
          </p>

          <div className="space-y-8 text-[#111827] outfit leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                NexGen Pharma Solutions Private Limited ("we", "us", or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Information You Provide</h3>
              <p className="mb-3">We collect information that you voluntarily provide to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and designation</li>
                <li>Business requirements and project details</li>
                <li>Information submitted through contact forms, inquiries, or proposals</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="mb-3">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responding to inquiries and providing requested services</li>
                <li>Processing proposals, quotes, and project engagements</li>
                <li>Improving our website and service offerings</li>
                <li>Sending relevant business communications and updates</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Analyzing website usage and user behavior</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-3">We do not sell, trade, or rent your personal information. We may share information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in website operations, analytics, or business processes</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize information sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                comply with legal obligations, resolve disputes, and enforce agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and obtain a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:inquiry@nexgenpharmasolutions.com" className="text-[#3B82F6] hover:underline">
                  inquiry@nexgenpharmasolutions.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. 
                You can control cookie preferences through your browser settings. Please see our{" "}
                <a href="/cookie-notice" className="text-[#3B82F6] hover:underline">Cookie Notice</a> for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
                content of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated 
                "Last Updated" date. Continued use of our website after changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="mb-3">
                If you have questions or concerns about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
