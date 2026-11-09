import LegalLayout, { LegalContact } from "./LegalLayout";

const SECTIONS = [
  {
    id: "general-information",
    title: "General Information",
    body: (
      <p>
        The information provided on this website by NexGen Pharma Solutions Private Limited ("Company", "we", "us", or
        "our") is for general informational purposes only. All information on the website is provided in good faith;
        however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy,
        validity, reliability, availability, or completeness of any information on the website.
      </p>
    ),
  },
  {
    id: "professional-advice",
    title: "Professional Advice Disclaimer",
    body: (
      <>
        <p>
          The content on this website is not intended to be a substitute for professional pharmaceutical, regulatory, or
          legal advice. The information provided should not be relied upon as:
        </p>
        <ul>
          <li>Regulatory guidance or official interpretation of pharmaceutical regulations</li>
          <li>Legal advice or consultation</li>
          <li>Specific recommendations for your organization without proper assessment</li>
          <li>A substitute for engagement with qualified regulatory or quality professionals</li>
        </ul>
        <p>
          Always seek the guidance of qualified professionals with questions regarding specific pharmaceutical,
          regulatory, or quality matters.
        </p>
      </>
    ),
  },
  {
    id: "no-client-consultant-relationship",
    title: "No Client-Consultant Relationship",
    body: (
      <p>
        Use of this website does not create a consultant-client relationship between you and NexGen Pharma Solutions
        Private Limited. Formal engagement requires execution of a written service agreement outlining scope,
        deliverables, timelines, and commercial terms.
      </p>
    ),
  },
  {
    id: "external-links",
    title: "External Links Disclaimer",
    body: (
      <>
        <p>
          This website may contain links to external websites that are not operated by us. We have no control over, and
          assume no responsibility for:
        </p>
        <ul>
          <li>The content, privacy policies, or practices of third-party websites</li>
          <li>The accuracy or reliability of information on external sites</li>
          <li>Products, services, or resources provided by third parties</li>
        </ul>
        <p>
          We strongly advise you to review the terms and privacy policies of any third-party websites you visit. Links
          are provided for convenience and do not constitute endorsement.
        </p>
      </>
    ),
  },
  {
    id: "errors-and-omissions",
    title: "Errors and Omissions",
    body: (
      <p>
        While we strive to ensure that the information on this website is current and accurate, we do not warrant that
        the website will be error-free or that defects will be corrected. Information may contain technical inaccuracies
        or typographical errors and may be updated without notice.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          Under no circumstance shall NexGen Pharma Solutions Private Limited have any liability to you for any loss or
          damage of any kind incurred as a result of:
        </p>
        <ul>
          <li>Use of this website or reliance on information provided</li>
          <li>Inability to use the website</li>
          <li>Errors, omissions, or inaccuracies in content</li>
          <li>Interruptions in service or website availability</li>
          <li>Actions taken based on website content</li>
        </ul>
        <p>Your use of the website and reliance on any information is solely at your own risk.</p>
      </>
    ),
  },
  {
    id: "regulatory-compliance",
    title: "Regulatory Compliance Disclaimer",
    body: (
      <>
        <p>
          Information provided on this website regarding pharmaceutical regulations, GMP requirements, or compliance
          matters is general in nature and may not reflect the most current regulatory developments. Pharmaceutical
          regulations vary by jurisdiction and are subject to frequent updates.
        </p>
        <p>
          Organizations must conduct their own regulatory research and consult with qualified professionals to ensure
          compliance with applicable laws and regulations in their specific jurisdictions.
        </p>
      </>
    ),
  },
  {
    id: "service-descriptions",
    title: "Service Descriptions",
    body: (
      <p>
        Descriptions of services on this website are general overviews. Actual service deliverables, methodologies,
        timelines, and outcomes will be defined in formal service agreements and may vary based on client-specific
        requirements and circumstances.
      </p>
    ),
  },
  {
    id: "testimonials-and-case-studies",
    title: "Testimonials and Case Studies",
    body: (
      <p>
        Any testimonials, case studies, or success stories presented on this website represent specific client
        experiences and may not be indicative of future results. Results vary based on multiple factors including client
        circumstances, engagement scope, and organizational capabilities.
      </p>
    ),
  },
  {
    id: "changes-to-disclaimer",
    title: "Changes to Disclaimer",
    body: (
      <p>
        We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective
        immediately upon posting on this page with an updated "Last Updated" date. It is your responsibility to review
        this disclaimer periodically.
      </p>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance",
    body: (
      <p>
        By using this website, you acknowledge that you have read this disclaimer and agree to its terms. If you do not
        agree with this disclaimer, please do not use this website.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
        <p>If you have questions about this disclaimer, please contact:</p>
        <LegalContact />
      </>
    ),
  },
];

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" updated="Last Updated: January 21, 2026" path="/disclaimer" sections={SECTIONS} />
  );
}
