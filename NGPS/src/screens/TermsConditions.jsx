import LegalLayout, { LegalContact } from "./LegalLayout";

const SECTIONS = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    body: (
      <p>
        By accessing and using the website of NexGen Pharma Solutions Private Limited ("Company", "we", "us", or "our"),
        you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not
        use our website or services.
      </p>
    ),
  },
  {
    id: "services-description",
    title: "2. Services Description",
    body: (
      <>
        <p>
          NexGen Pharma Solutions Private Limited provides pharmaceutical consulting services including but not limited
          to:
        </p>
        <ul>
          <li>GMP Audits (Vendor, Internal, Mock EDQM-USFDA)</li>
          <li>Quality Management Systems and Remediation</li>
          <li>Regulatory Affairs Support</li>
          <li>Technology Transfer and Validation Services</li>
          <li>Computer System Validation</li>
          <li>Corporate Training Programs</li>
        </ul>
      </>
    ),
  },
  {
    id: "use-of-website",
    title: "3. Use of Website",
    body: (
      <>
        <h3>3.1 Permitted Use</h3>
        <p>You may use this website for lawful purposes only, including:</p>
        <ul>
          <li>Viewing information about our services</li>
          <li>Submitting inquiries and contact forms</li>
          <li>Requesting proposals or quotes</li>
        </ul>

        <h3>3.2 Prohibited Activities</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website in any unlawful manner or for fraudulent purposes</li>
          <li>Attempt to gain unauthorized access to any part of the website</li>
          <li>Transmit viruses, malware, or harmful code</li>
          <li>Collect or harvest data from the website using automated means</li>
          <li>Reproduce, duplicate, or copy any content without written permission</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property Rights",
    body: (
      <>
        <p>
          All content on this website, including but not limited to text, graphics, logos, images, and software, is the
          property of NexGen Pharma Solutions Private Limited and is protected by Indian and international copyright,
          trademark, and other intellectual property laws.
        </p>
        <p>You may not reproduce, distribute, modify, or create derivative works without our express written consent.</p>
      </>
    ),
  },
  {
    id: "service-engagement",
    title: "5. Service Engagement",
    body: (
      <>
        <h3>5.1 Proposals and Contracts</h3>
        <p>
          Specific terms for service engagements will be outlined in separate proposals, statements of work, or service
          agreements. These Terms &amp; Conditions govern general website use but do not constitute a service agreement.
        </p>

        <h3>5.2 No Guarantee of Services</h3>
        <p>
          Visiting this website or submitting inquiries does not guarantee service availability or engagement. All
          service engagements are subject to mutual agreement and execution of appropriate contracts.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer-of-warranties",
    title: "6. Disclaimer of Warranties",
    body: (
      <>
        <p>
          This website and its content are provided "as is" and "as available" without warranties of any kind, either
          express or implied, including but not limited to:
        </p>
        <ul>
          <li>Warranties of merchantability or fitness for a particular purpose</li>
          <li>Accuracy, completeness, or reliability of information</li>
          <li>Uninterrupted or error-free operation</li>
          <li>Freedom from viruses or harmful components</li>
        </ul>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "7. Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, NexGen Pharma Solutions Private Limited shall not be liable for any
        direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or
        reliance on information provided, including but not limited to loss of profits, data, or business opportunities.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Links",
    body: (
      <p>
        Our website may contain links to third-party websites for your convenience. We do not endorse or assume
        responsibility for the content, privacy practices, or terms of these external sites. Access to third-party
        websites is at your own risk.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "9. Confidentiality",
    body: (
      <p>
        Any proprietary or confidential information shared through our website inquiry forms will be handled in
        accordance with our Privacy Policy. For detailed confidentiality terms related to specific service engagements,
        separate Non-Disclosure Agreements (NDAs) may be executed.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    body: (
      <p>
        You agree to indemnify and hold harmless NexGen Pharma Solutions Private Limited, its directors, employees, and
        agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of
        the website or violation of these Terms &amp; Conditions.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "11. Modifications to Terms",
    body: (
      <p>
        We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be effective immediately
        upon posting on this page with an updated "Last Updated" date. Your continued use of the website after changes
        constitutes acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "12. Governing Law and Jurisdiction",
    body: (
      <p>
        These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any disputes
        arising from these terms or website use shall be subject to the exclusive jurisdiction of the courts in
        [Jurisdiction to be specified].
      </p>
    ),
  },
  {
    id: "severability",
    title: "13. Severability",
    body: (
      <p>
        If any provision of these Terms &amp; Conditions is found to be invalid or unenforceable, the remaining provisions
        shall continue in full force and effect.
      </p>
    ),
  },
  {
    id: "contact-information",
    title: "14. Contact Information",
    body: (
      <>
        <p>For questions regarding these Terms &amp; Conditions, please contact:</p>
        <LegalContact />
      </>
    ),
  },
];

export default function TermsConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated="Last Updated: January 21, 2026"
      path="/terms-conditions"
      sections={SECTIONS}
    />
  );
}
