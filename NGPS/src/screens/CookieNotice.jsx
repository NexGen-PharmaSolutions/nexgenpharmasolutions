import { Link } from "react-router-dom";
import LegalLayout, { LegalCard, LegalContact } from "./LegalLayout";

const ext = { target: "_blank", rel: "noopener noreferrer" };

/** Small "Duration:" line under each cookie category. */
function Meta({ children }) {
  return <p className="!mb-0 mt-3 font-mono text-[0.8rem] tracking-wide text-champagne-muted">{children}</p>;
}

const SECTIONS = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    body: (
      <p>
        Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our
        website. They help us provide you with a better browsing experience by remembering your preferences and
        understanding how you use our website.
      </p>
    ),
  },
  {
    id: "how-we-use-cookies",
    title: "How We Use Cookies",
    body: (
      <>
        <p>NexGen Pharma Solutions Private Limited uses cookies for the following purposes:</p>

        <LegalCard>
          <h3 className="!mt-0">1. Essential Cookies</h3>
          <p>These cookies are necessary for the website to function properly. They enable core functionality such as:</p>
          <ul className="!mb-0">
            <li>Secure access to different areas of the website</li>
            <li>Session management</li>
            <li>Basic navigation functionality</li>
          </ul>
          <Meta>
            <strong>Duration:</strong> Session cookies (deleted when you close your browser)
          </Meta>
        </LegalCard>

        <LegalCard>
          <h3 className="!mt-0">2. Analytics Cookies</h3>
          <p>We use analytics cookies to understand how visitors interact with our website, including:</p>
          <ul className="!mb-0">
            <li>Pages visited and time spent on pages</li>
            <li>Traffic sources (how you found our website)</li>
            <li>Device and browser information</li>
            <li>General location data (country/city level)</li>
          </ul>
          <Meta>
            <strong>Duration:</strong> Persistent cookies (up to 2 years)
          </Meta>
          <Meta>
            <strong>Third-Party Services:</strong> Google Analytics
          </Meta>
        </LegalCard>

        <LegalCard>
          <h3 className="!mt-0">3. Functionality Cookies</h3>
          <p>These cookies remember your preferences and choices to provide a more personalized experience:</p>
          <ul className="!mb-0">
            <li>Language preferences</li>
            <li>Display settings</li>
            <li>Form data (to avoid re-entering information)</li>
          </ul>
          <Meta>
            <strong>Duration:</strong> Persistent cookies (up to 1 year)
          </Meta>
        </LegalCard>

        <LegalCard>
          <h3 className="!mt-0">4. Performance Cookies</h3>
          <p>These cookies help us improve website performance by collecting information about:</p>
          <ul className="!mb-0">
            <li>Page load times</li>
            <li>Error messages encountered</li>
            <li>User navigation patterns</li>
          </ul>
          <Meta>
            <strong>Duration:</strong> Session or persistent (up to 1 year)
          </Meta>
        </LegalCard>
      </>
    ),
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Cookies",
    body: (
      <>
        <p>We may use third-party services that set cookies on your device when you visit our website:</p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> For website traffic analysis and user behavior insights
          </li>
          <li>
            <strong>Google Tag Manager:</strong> For managing marketing and analytics tags
          </li>
        </ul>
        <p>These third-party services have their own privacy policies and cookie policies. We recommend reviewing them:</p>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" {...ext}>
              Google Privacy Policy
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "managing-cookie-preferences",
    title: "Managing Your Cookie Preferences",
    body: (
      <>
        <h3>Browser Settings</h3>
        <p>Most web browsers allow you to control cookies through their settings. You can:</p>
        <ul>
          <li>View and delete cookies stored on your device</li>
          <li>Block third-party cookies</li>
          <li>Block all cookies (may impact website functionality)</li>
          <li>Receive notifications when cookies are set</li>
        </ul>

        <p>Learn how to manage cookies in popular browsers:</p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" {...ext}>
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" {...ext}>
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-us/HT201265" {...ext}>
              Safari (macOS and iOS)
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              {...ext}
            >
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h3>Opt-Out of Analytics</h3>
        <p>
          You can opt out of Google Analytics tracking by installing the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" {...ext}>
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "impact-of-blocking-cookies",
    title: "Impact of Blocking Cookies",
    body: (
      <>
        <p>Blocking or deleting cookies may affect your experience on our website:</p>
        <ul>
          <li>Some features may not function properly</li>
          <li>You may need to re-enter information on subsequent visits</li>
          <li>Personalized content may not be available</li>
        </ul>
        <p>Essential cookies cannot be disabled as they are necessary for basic website functionality.</p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to This Cookie Notice",
    body: (
      <p>
        We may update this Cookie Notice from time to time to reflect changes in our use of cookies or applicable laws.
        Any changes will be posted on this page with an updated "Last Updated" date.
      </p>
    ),
  },
  {
    id: "more-information",
    title: "More Information",
    body: (
      <>
        <p>
          For more information about how we handle your personal data, please see our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
        <p>
          To learn more about cookies in general, visit{" "}
          <a href="https://www.allaboutcookies.org" {...ext}>
            www.allaboutcookies.org
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
        <p>If you have questions about our use of cookies, please contact:</p>
        <LegalContact />
      </>
    ),
  },
];

export default function CookieNotice() {
  return (
    <LegalLayout title="Cookie Notice" updated="Last Updated: January 21, 2026" path="/cookie-notice" sections={SECTIONS} />
  );
}
