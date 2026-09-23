import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CookieNotice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5EAD8]">
      <Helmet>
        <title>Cookie Notice | NexGen Pharma Solutions Pvt. Ltd.</title>
        <meta
          name="description"
          content="Cookie Notice explaining how NexGen Pharma Solutions Private Limited uses cookies and tracking technologies."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[#201E1D] mb-4 outfit">
            Cookie Notice
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: January 21, 2026
          </p>

          <div className="space-y-8 text-[#201E1D] outfit leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit 
                our website. They help us provide you with a better browsing experience by remembering your preferences and 
                understanding how you use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="mb-3">
                NexGen Pharma Solutions Private Limited uses cookies for the following purposes:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Essential Cookies</h3>
                  <p className="mb-2">
                    These cookies are necessary for the website to function properly. They enable core functionality such as:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Secure access to different areas of the website</li>
                    <li>Session management</li>
                    <li>Basic navigation functionality</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Duration:</strong> Session cookies (deleted when you close your browser)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Analytics Cookies</h3>
                  <p className="mb-2">
                    We use analytics cookies to understand how visitors interact with our website, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pages visited and time spent on pages</li>
                    <li>Traffic sources (how you found our website)</li>
                    <li>Device and browser information</li>
                    <li>General location data (country/city level)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Duration:</strong> Persistent cookies (up to 2 years)
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Third-Party Services:</strong> Google Analytics
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Functionality Cookies</h3>
                  <p className="mb-2">
                    These cookies remember your preferences and choices to provide a more personalized experience:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Language preferences</li>
                    <li>Display settings</li>
                    <li>Form data (to avoid re-entering information)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Duration:</strong> Persistent cookies (up to 1 year)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Performance Cookies</h3>
                  <p className="mb-2">
                    These cookies help us improve website performance by collecting information about:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Page load times</li>
                    <li>Error messages encountered</li>
                    <li>User navigation patterns</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Duration:</strong> Session or persistent (up to 1 year)
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="mb-3">
                We may use third-party services that set cookies on your device when you visit our website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                <li><strong>Google Tag Manager:</strong> For managing marketing and analytics tags</li>
              </ul>
              <p className="mt-4">
                These third-party services have their own privacy policies and cookie policies. We recommend reviewing them:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8C491A] hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">Browser Settings</h3>
              <p className="mb-3">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View and delete cookies stored on your device</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies (may impact website functionality)</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
              
              <p className="mt-4 mb-2">Learn how to manage cookies in popular browsers:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8C491A] hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8C491A] hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.apple.com/en-us/HT201265" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8C491A] hover:underline"
                  >
                    Safari (macOS and iOS)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8C491A] hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Opt-Out of Analytics</h3>
              <p>
                You can opt out of Google Analytics tracking by installing the{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8C491A] hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Impact of Blocking Cookies</h2>
              <p className="mb-3">
                Blocking or deleting cookies may affect your experience on our website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Some features may not function properly</li>
                <li>You may need to re-enter information on subsequent visits</li>
                <li>Personalized content may not be available</li>
              </ul>
              <p className="mt-3">
                Essential cookies cannot be disabled as they are necessary for basic website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Cookie Notice</h2>
              <p>
                We may update this Cookie Notice from time to time to reflect changes in our use of cookies or applicable laws. 
                Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">More Information</h2>
              <p className="mb-3">
                For more information about how we handle your personal data, please see our{" "}
                <a href="/privacy-policy" className="text-[#8C491A] hover:underline">Privacy Policy</a>.
              </p>
              <p>
                To learn more about cookies in general, visit{" "}
                <a 
                  href="https://www.allaboutcookies.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8C491A] hover:underline"
                >
                  www.allaboutcookies.org
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-3">
                If you have questions about our use of cookies, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">NexGen Pharma Solutions Private Limited</p>
                <p>Email: <a href="mailto:inquiry@nexgenpharmasolutions.com" className="text-[#8C491A] hover:underline">inquiry@nexgenpharmasolutions.com</a></p>
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

export default CookieNotice;
