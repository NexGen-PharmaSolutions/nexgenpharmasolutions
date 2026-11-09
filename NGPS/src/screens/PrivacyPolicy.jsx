import { Link } from "react-router-dom";
import LegalLayout, { LegalContact } from "./LegalLayout";

const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <p>
        NexGen Pharma Solutions Private Limited ("we", "us", or "our") is committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
        or use our services.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: (
      <>
        <h3>2.1 Information You Provide</h3>
        <p>We collect information that you voluntarily provide to us, including:</p>
        <ul>
          <li>Name and contact information (email, phone number)</li>
          <li>Company name and designation</li>
          <li>Business requirements and project details</li>
          <li>Information submitted through contact forms, inquiries, or proposals</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect:</p>
        <ul>
          <li>Browser type and version</li>
          <li>IP address and location data</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>Device information</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-your-information",
    title: "3. How We Use Your Information",
    body: (
      <>
        <p>We use the collected information for:</p>
        <ul>
          <li>Responding to inquiries and providing requested services</li>
          <li>Processing proposals, quotes, and project engagements</li>
          <li>Improving our website and service offerings</li>
          <li>Sending relevant business communications and updates</li>
          <li>Complying with legal and regulatory obligations</li>
          <li>Analyzing website usage and user behavior</li>
        </ul>
      </>
    ),
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing and Disclosure",
    body: (
      <>
        <p>We do not sell, trade, or rent your personal information. We may share information with:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Third-party vendors who assist in website operations, analytics, or
            business processes
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law, regulation, or legal process
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
          </li>
          <li>
            <strong>With Your Consent:</strong> When you explicitly authorize information sharing
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Security",
    body: (
      <p>
        We implement appropriate technical and organizational security measures to protect your personal information
        against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
        Internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    body: (
      <p>
        We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
        comply with legal obligations, resolve disputes, and enforce agreements.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access and obtain a copy of your personal information</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal information</li>
          <li>Object to processing of your personal information</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a href="mailto:inquiry@nexgenpharmasolutions.com">inquiry@nexgenpharmasolutions.com</a>
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies and Tracking Technologies",
    body: (
      <p>
        We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
        You can control cookie preferences through your browser settings. Please see our{" "}
        <Link to="/cookie-notice">Cookie Notice</Link> for more details.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "9. Third-Party Links",
    body: (
      <p>
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or
        content of these external sites. We encourage you to review their privacy policies.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "10. Children's Privacy",
    body: (
      <p>
        Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
        information from children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last
        Updated" date. Continued use of our website after changes constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "12. Contact Us",
    body: (
      <>
        <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
        <LegalContact />
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="Last Updated: January 21, 2026"
      path="/privacy-policy"
      sections={SECTIONS}
    />
  );
}
