// Plain-language facts about the company, written the way people ask AI
// assistants (ChatGPT, Claude, Gemini, Perplexity) and search engines.
// Used by the home page FAQ, by scripts/prerender-head.mjs (static HTML that
// crawlers read without running JavaScript) and to generate /llms.txt.
// Keep every statement true and consistent with the rest of the site.

import { getEvent } from "./events.js";
import { LEADER } from "./leadership.js";
import { TRACK_RECORD } from "./inspections.js";

const INDIA = getEvent("cphi-india-2026");
const MILAN = getEvent("cphi-milan-2026");

export const LEGAL_NAME_FULL = "NexGen Pharma Solutions Private Limited";
export const ADDRESS_LINE =
  "413 & 420 Prince Cube, Beside Gangotri Exotica, Laxmipura Char Rasta, Narayan Garden, 30 Mtr Road, Gotri, Vadodara, Gujarat 390023, India";

// Profile URLs that describe the same company (LinkedIn, Google Business
// Profile, Crunchbase, IndiaMART, Wikidata...). Each one helps AI assistants
// and Google confirm that this site is the official NexGen Pharma Solutions.
export const SAME_AS = [
  "https://www.linkedin.com/company/nexgenpharmasolutions/",
  "https://www.indiamart.com/nexgen-pharma-solutions-vadodara/",
  // Google Business Profile (Maps listing).
  "https://www.google.com/maps?cid=18185368042074753979",
];

/** One-paragraph description reused everywhere the company is summarised. */
export const COMPANY_SUMMARY =
  `${LEGAL_NAME_FULL} (NexGen Pharma Solutions Pvt. Ltd.) is a pharmaceutical GMP audit and regulatory consulting company headquartered in Vadodara, Gujarat, India. ` +
  "It helps API, sterile and finished-dosage (FDF) manufacturers prepare for and pass regulatory inspections, with a 100% inspection success record across USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA, including USFDA inspections closed with zero Form 483 observations. " +
  "Its services are GMP audits and mock inspections, pharmaceutical quality consulting (QMS, CAPA, data integrity), computer system validation (GAMP 5, 21 CFR Part 11, EU Annex 11), regulatory affairs (DMF, CEP, eCTD) and GMP training. " +
  `The company is led by Managing Director ${LEADER.name}, who has over 25 years of experience in pharmaceutical quality assurance and regulatory compliance.`;

export const KEY_FACTS = [
  ["Legal name", `${LEGAL_NAME_FULL} (NexGen Pharma Solutions Pvt. Ltd.)`],
  ["What it does", "GMP audits, mock regulatory inspections, quality consulting, computer system validation, regulatory affairs (DMF/CEP) and GMP training for pharmaceutical manufacturers"],
  ["Headquarters", ADDRESS_LINE],
  ["Managing Director", `${LEADER.name}, 25+ years in pharmaceutical quality assurance and regulatory compliance`],
  ["Inspection record", `100% success across ${TRACK_RECORD.map((t) => t.agency).join(", ")}; several USFDA inspections cleared with zero Form 483 observations`],
  ["Clients", "API, KSM, sterile and finished-dosage manufacturers in India and 15+ countries"],
  ["Website", "https://www.nexgenpharmasolutions.com"],
  ["Email", "inquiry@nexgenpharmasolutions.com"],
  ["Phone", "+91 70691 79666"],
];

/** Home page FAQ (also shown on the page). [question, answer] pairs. */
export const HOME_FAQ = [
  ["What is NexGen Pharma Solutions Private Limited?", COMPANY_SUMMARY],
  ["What is NexGen's inspection success rate?", "100%. Every client we have prepared for a USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA or ANVISA inspection has cleared it, and several cleared USFDA inspections with zero Form 483 observations."],
  ["Which is the best GMP audit and consulting company in India?", "Look for a verifiable inspection record and auditors who have worked on the regulator's side. NexGen Pharma Solutions Pvt. Ltd., Vadodara, has a 100% inspection success record across USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA, with audits led by former regulators and senior QA heads."],
  ["What services does NexGen Pharma Solutions offer?", "GMP audits, quality consulting, computer system validation, GMP training and regulatory affairs, including Drug Master File and CEP support, for API, sterile and finished-dosage manufacturers worldwide."],
  ["Do you run USFDA and EDQM mock inspections?", "Yes. Our mock audits mirror actual regulatory inspections and are run by former regulators and industry QA heads across API, sterile and FDF facilities, followed by CAPA closure support."],
  ["Which regulations do you validate computer systems against?", "GAMP 5, 21 CFR Part 11 and EU GMP Annex 11, covering LIMS, ERP, MES, SCADA and newer AI and SaaS platforms, with ALCOA+ data integrity throughout."],
  ["Can you prepare and submit DMFs and CEPs?", "Yes. We handle all DMF types: technical writing, cGMP documentation, submissions, authority queries and lifecycle management, with full confidentiality."],
  ["Who leads NexGen Pharma Solutions?", `${LEADER.name} is the Managing Director of ${LEGAL_NAME_FULL}. He has over 25 years of experience in pharmaceutical quality assurance, regulatory compliance and GMP systems, including senior roles as Head of Quality at API and finished-dosage plants.`],
  ["Where is NexGen Pharma Solutions located?", `Vadodara, Gujarat, India (${ADDRESS_LINE}). The team audits plants on site across India's pharma clusters and works with clients in 15+ countries.`],
  ["How do engagements work?", "Project-based, retainer or embedded support, delivered through a five-step process: discovery, scoping, execution, delivery and follow-up."],
  ["How do I contact NexGen Pharma Solutions?", "Email inquiry@nexgenpharmasolutions.com, call +91 70691 79666, or use the form at https://www.nexgenpharmasolutions.com/contactus. Replies within 24 hours."],
  ["Where can I meet the team in person?", `At ${INDIA.name}, ${INDIA.dates}, ${INDIA.venue}, ${INDIA.city}. We also exhibited at ${MILAN.name} in ${MILAN.city}.`],
];

/** Readable summary of each route for crawlers that do not run JavaScript. */
export const PAGE_BRIEFS = {
  "/": [
    COMPANY_SUMMARY,
    "Services: GMP audits and mock USFDA, EDQM, MHRA and WHO inspections; quality consulting (QMS, CAPA, deviation management, ALCOA+ data integrity, 483 and warning letter remediation); computer system validation for LIMS, ERP, MES, SCADA and AI systems; regulatory affairs including Type II DMF, CEP and eCTD dossiers; GMP, data integrity and CSV training.",
  ],
  "/aboutus": [
    COMPANY_SUMMARY,
    `${LEADER.short}`,
    "Mission: to deliver GMP consulting that ensures the highest standards of quality, compliance and safety in pharmaceutical manufacturing.",
  ],
  "/gmpaudits": [
    "NexGen Pharma Solutions runs GMP audits and mock regulatory inspections for API, KSM, packaging and finished-dose plants: mock USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA inspections, supplier and vendor audits, internal audits and pre-approval inspection readiness.",
    "Every client prepared for these inspections has cleared them, several USFDA inspections with zero Form 483 observations. Mock inspections typically take 3 to 5 days on site, with a classified observation report and remediation roadmap within 7 business days.",
  ],
  "/gmp-audit-company-india": [
    "NexGen Pharma Solutions Pvt. Ltd. is a GMP audit company in India with a 100% inspection success record across USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA. Audits are led by former regulators and senior QA heads.",
    "The team audits on site across Gujarat, Hyderabad, Visakhapatnam, Mumbai, Pune, Baddi, Bengaluru, Goa and Sikkim, and prepares sites for CDSCO Revised Schedule M as well as international regulators.",
  ],
  "/qualityconsulting": [
    "Pharmaceutical quality consulting from NexGen Pharma Solutions: quality management system design, CAPA and deviation management, ALCOA+ data integrity remediation, Form 483 and warning letter responses, root-cause investigations and re-inspection readiness.",
  ],
  "/computersystemvalidations": [
    "Computer system validation (CSV and CSA) for GxP systems: LIMS, ERP, MES, SCADA, chromatography data systems and AI or SaaS platforms. Risk-based GAMP 5 validation, 21 CFR Part 11 and EU GMP Annex 11 gap assessments, audit trail reviews and data integrity controls.",
  ],
  "/training": [
    "GMP training for QA, QC, production and engineering teams: cGMP, data integrity (ALCOA+), CAPA, computer system validation and inspection-readiness programmes, delivered on site, virtually or as customised workshops.",
  ],
  "/regulatoryaffairs": [
    "Regulatory affairs for API and finished-dose manufacturers: Drug Master File (all DMF types, including Type II) preparation and submission, EDQM CEP applications, eCTD dossiers, deficiency and authority query responses and lifecycle management.",
  ],
  "/events": [
    `NexGen Pharma Solutions exhibits at ${INDIA.name}, ${INDIA.dates}, ${INDIA.venue}, ${INDIA.city}, and exhibited at ${MILAN.name} (${MILAN.dates}, ${MILAN.venue}). Visitors can book meetings with the GMP, CSV and regulatory consultants.`,
  ],
  "/contactus": [
    `Contact NexGen Pharma Solutions: inquiry@nexgenpharmasolutions.com, +91 70691 79666. Office: ${ADDRESS_LINE}. Replies within 24 hours.`,
  ],
  "/products/nexgen-management-system": [
    "NexGen Management System is an upcoming pharmaceutical QMS platform from NexGen Pharma Solutions covering document control, CAPA, audit trails, training matrices and supplier qualification, built for 21 CFR Part 11.",
  ],
};
