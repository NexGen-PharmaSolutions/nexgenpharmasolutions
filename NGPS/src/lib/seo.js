// Single source of truth for per-route SEO. Used at runtime by <Seo /> and at
// build time by scripts/prerender-head.mjs, which bakes these tags into a
// static index.html for every route so crawlers and link unfurlers see the
// right title, description, canonical and structured data without running JS.

import { INDIA_FAQ, OTHER_INSPECTIONS } from "./inspections.js";

export const SITE_URL = "https://www.nexgenpharmasolutions.com";
export const SITE_NAME = "NexGen Pharma Solutions";
export const LEGAL_NAME = "NexGen Pharma Solutions Pvt. Ltd.";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const CONTACT_EMAIL = "inquiry@nexgenpharmasolutions.com";
export const CONTACT_PHONE = "+91 75748 85488";

import { LEADER } from "./leadership.js";
import { HOME_FAQ, SAME_AS, COMPANY_SUMMARY } from "./answers.js";

export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "NexGen Pharma Solutions Private Limited",
  alternateName: LEGAL_NAME,
  url: SITE_URL,
  legalName: "NexGen Pharma Solutions Private Limited",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/nexgen-logo.png`,
    width: 350,
    height: 249,
  },
  image: OG_IMAGE,
  description: COMPANY_SUMMARY,
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pharmaceutical GMP and regulatory consulting services",
    itemListElement: [
      ["GMP Audits & Mock Regulatory Inspections", "/gmpaudits"],
      ["Pharmaceutical Quality Consulting", "/qualityconsulting"],
      ["Computer System Validation", "/computersystemvalidations"],
      ["Regulatory Affairs, DMF & CEP Submissions", "/regulatoryaffairs"],
      ["GMP Training", "/training"],
    ].map(([name, path]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, url: `${SITE_URL}${path}` },
    })),
  },
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "413 & 420 Prince Cube, Beside Gangotri Exotica, Laxmipura Char Rasta, Narayan Garden, 30 Mtr Road, Gotri",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390021",
    addressCountry: "IN",
  },
  slogan: "100% inspection success: USFDA, EDQM, KFDA, MHRA, WHO-GMP, EU GMP, PMDA, ANVISA",
  foundingLocation: "Vadodara, Gujarat, India",
  areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
  employee: { "@id": `${SITE_URL}/aboutus#ashwani-shrivastav` },
  knowsAbout: [
    "USFDA inspections with zero Form 483 observations",
    "KFDA (MFDS) GMP inspections",
    "MHRA GMP inspections",
    "WHO-GMP and WHO prequalification inspections",
    "EU GMP inspections",
    "PMDA GMP inspections",
    "ANVISA GMP inspections",
    ...OTHER_INSPECTIONS.map((o) => `${o.agency} inspection readiness`),
    "GMP audits",
    "USFDA inspection readiness",
    "EDQM inspections",
    "Computer system validation",
    "GAMP 5",
    "21 CFR Part 11",
    "EU GMP Annex 11",
    "Data integrity (ALCOA+)",
    "Drug Master Files",
    "CEP submissions",
    "Pharmaceutical quality management systems",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
};

export const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/aboutus#ashwani-shrivastav`,
  name: LEADER.name,
  jobTitle: LEADER.role,
  description: LEADER.short,
  image: `${SITE_URL}${LEADER.photo}`,
  email: `mailto:${LEADER.email}`,
  url: `${SITE_URL}/aboutus#leadership`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: LEADER.expertise,
};

const service = (name, description, path, areaServed = "Worldwide") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  url: `${SITE_URL}${path}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed,
});

const faqPage = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

const crumbs = (label, path) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${path}` },
  ],
});

export const ROUTES = {
  "/": {
    title: "NexGen Pharma Solutions | GMP Audit & Consulting Company in India",
    description:
      "GMP audit and pharma consulting company in India with a 100% inspection success record: USFDA (zero-483 outcomes), EDQM, KFDA, MHRA, WHO-GMP, EU GMP, PMDA and ANVISA. Mock inspections, CSV, DMF/CEP and training.",
    keywords:
      "best GMP audit company in India, best GMP consultant India, GMP audit services India, pharma consulting company India, USFDA mock audit, zero 483, EDQM audit, KFDA audit, MFDS GMP inspection, MHRA inspection, WHO GMP audit, EU GMP audit, PMDA audit, ANVISA audit, computer system validation, GAMP 5, 21 CFR Part 11, DMF, CEP, GMP training, Vadodara, Gujarat",
    priority: "1.0",
    changefreq: "weekly",
    schema: [ORGANIZATION, WEBSITE],
  },
  "/aboutus": {
    title: "About NexGen Pharma Solutions | Former Regulators & QA Leaders",
    description:
      "Meet the consultancy behind NexGen Pharma Solutions: former regulators, QA heads and validation specialists with 25+ years helping pharma manufacturers pass global inspections.",
    keywords: "about NexGen Pharma Solutions, pharma consultants India, GMP experts, QA consultants",
    label: "About Us",
    extraSchema: [PERSON],
    priority: "0.8",
  },
  "/gmpaudits": {
    title: "GMP Audits & Mock USFDA, EDQM, MHRA Inspections | 100% Success",
    description:
      "GMP audit services with a 100% inspection success record across USFDA, EDQM, KFDA, MHRA, WHO-GMP, EU GMP, PMDA and ANVISA. Mock inspections, vendor and internal audits for API, KSM, packaging and finished-dose plants.",
    keywords: "GMP audit services, GMP auditing company, mock USFDA inspection, zero 483, EDQM audit, KFDA audit, WHO GMP audit, EU GMP audit, MHRA inspection readiness, PMDA audit, ANVISA audit, supplier audit, API audit, FDF audit, 483 remediation",
    label: "GMP Audits",
    service: "GMP Audits",
    priority: "0.9",
  },
  "/gmp-audit-company-india": {
    title: "Best GMP Audit Company in India | 100% Inspection Success",
    description:
      "Looking for the best GMP audit company in India? NexGen Pharma Solutions Pvt. Ltd. has a 100% inspection success record across USFDA (zero-483), EDQM, KFDA, MHRA, WHO-GMP, EU GMP, PMDA and ANVISA. Former regulators, on site across India.",
    keywords:
      "best GMP audit company in India, best auditing company in India pharma, best GMP consultant in India, top GMP consultants India, GMP audit company India, pharma audit company India, USFDA consultant India, zero 483 USFDA, EDQM consultant India, KFDA MFDS audit India, MHRA consultant India, WHO GMP consultant India, EU GMP consultant India, PMDA audit India, ANVISA audit India, mock USFDA inspection India",
    label: "GMP Audit Company in India",
    service: "GMP Audit & Inspection Readiness Consulting in India",
    areaServed: "India",
    faq: INDIA_FAQ,
    priority: "0.95",
    changefreq: "monthly",
  },
  "/qualityconsulting": {
    title: "Pharmaceutical Quality Consulting | QMS, CAPA & Data Integrity",
    description:
      "Quality consulting for pharma manufacturers: QMS design, CAPA and deviation management, ALCOA+ data integrity remediation and inspection readiness programmes.",
    keywords: "pharma quality consulting, QMS, CAPA, deviation management, data integrity, ALCOA+, warning letter remediation",
    label: "Quality Consulting",
    service: "Pharmaceutical Quality Consulting",
    priority: "0.9",
  },
  "/computersystemvalidations": {
    title: "Computer System Validation (CSV) | GAMP 5, Part 11 & Annex 11",
    description:
      "GxP computer system validation for LIMS, ERP, MES, SCADA and AI systems. GAMP 5 risk-based CSV, 21 CFR Part 11 and EU Annex 11 gap assessments, audit trail reviews.",
    keywords: "computer system validation, CSV, CSA, GAMP 5, 21 CFR Part 11, Annex 11, LIMS validation, MES validation, AI validation GxP",
    label: "Computer System Validation",
    service: "Computer System Validation",
    priority: "0.9",
  },
  "/training": {
    title: "GMP Training for Pharma Teams | NexGen Pharma Solutions",
    description:
      "Expert-led GMP, data integrity, CSV and inspection-readiness training for QA, QC, production and engineering teams. On-site, virtual and customised programmes.",
    keywords: "GMP training, data integrity training, GAMP 5 training, pharma QA training, inspection readiness training",
    label: "Training",
    service: "GMP Training",
    priority: "0.8",
  },
  "/regulatoryaffairs": {
    title: "Regulatory Affairs, DMF & CEP Submissions | NexGen Pharma",
    description:
      "Drug Master File (DMF) and CEP preparation, eCTD dossiers, deficiency responses and lifecycle management for API and finished-dose manufacturers.",
    keywords: "regulatory affairs, DMF submission, Type II DMF, CEP, EDQM, eCTD, dossier preparation, deficiency response",
    label: "Regulatory Affairs",
    service: "Regulatory Affairs & DMF Submissions",
    priority: "0.9",
  },
  "/events": {
    title: "CPHI India 2026 & CPHI Milan 2026 | NexGen Pharma Solutions Events",
    description:
      "Meet NexGen Pharma Solutions at CPHI India 2026, 23–25 November, Yashobhoomi (IICC) New Delhi. We also exhibited at CPHI Milan 2026, CPHI Worldwide and CPHI India.",
    keywords:
      "CPHI India 2026, CPHI India 2026 exhibitors, Yashobhoomi CPHI, CPHI Milan 2026, CPHI Pharma & Tech zone, pharma consultant CPHI, NexGen Pharma events",
    label: "Events",
    priority: "0.8",
    changefreq: "weekly",
    events: true,
  },
  "/contactus": {
    title: "Contact NexGen Pharma Solutions | Request a GMP Consultation",
    description:
      "Talk to NexGen Pharma Solutions about GMP audits, validation, regulatory submissions or training. Response within 24 hours. Vadodara, Gujarat, serving clients worldwide.",
    keywords: "contact pharma consultant, GMP consultation, request audit quote",
    label: "Contact Us",
    priority: "0.8",
  },
  "/products/nexgen-management-system": {
    title: "NexGen Management System | GMP Compliance Platform (Coming Soon)",
    description:
      "An all-in-one pharma QMS: document control, CAPA, audit trails, training matrix and supplier qualification, built for 21 CFR Part 11 from day one. Join the waitlist.",
    keywords: "pharma QMS software, eQMS, 21 CFR Part 11 software, CAPA software, document control pharma",
    label: "NexGen Management System",
    priority: "0.7",
  },
  "/privacy-policy": {
    title: "Privacy Policy | NexGen Pharma Solutions",
    description: "How NexGen Pharma Solutions Pvt. Ltd. collects, uses and protects your personal information.",
    label: "Privacy Policy",
    priority: "0.3",
    changefreq: "yearly",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | NexGen Pharma Solutions",
    description: "Terms and conditions governing use of the NexGen Pharma Solutions website and services.",
    label: "Terms & Conditions",
    priority: "0.3",
    changefreq: "yearly",
  },
  "/disclaimer": {
    title: "Disclaimer | NexGen Pharma Solutions",
    description: "Legal disclaimer for information published on the NexGen Pharma Solutions website.",
    label: "Disclaimer",
    priority: "0.3",
    changefreq: "yearly",
  },
  "/cookie-notice": {
    title: "Cookie Notice | NexGen Pharma Solutions",
    description: "How the NexGen Pharma Solutions website uses cookies and similar technologies.",
    label: "Cookie Notice",
    priority: "0.3",
    changefreq: "yearly",
  },
};

// Exhibition schema so "CPHI India 2026" searches can surface us with dates.
const exhibition = (name, start, end, venue, locality, country, status) => ({
  "@context": "https://schema.org",
  "@type": "ExhibitionEvent",
  name: `NexGen Pharma Solutions at ${name}`,
  startDate: start,
  endDate: end,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: venue,
    address: { "@type": "PostalAddress", addressLocality: locality, addressCountry: country },
  },
  organizer: { "@type": "Organization", name: "Informa Markets (CPHI)", url: "https://www.cphi.com" },
  performer: { "@id": `${SITE_URL}/#organization` },
  description: status,
  image: OG_IMAGE,
  url: `${SITE_URL}/events`,
});

export const EVENT_SCHEMA = [
  exhibition("CPHI India 2026", "2026-11-23", "2026-11-25", "Yashobhoomi (IICC)", "New Delhi", "IN",
    "NexGen Pharma Solutions exhibits at CPHI India 2026. Meet our GMP, CSV and regulatory consultants."),
  exhibition("CPHI Milan 2026", "2026-10-06", "2026-10-08", "Fiera Milano", "Milan", "IT",
    "NexGen Pharma Solutions at CPHI Milan 2026 and the Pharma & Tech zone."),
];

export function schemaFor(path) {
  const r = ROUTES[path];
  if (!r) return [];
  if (r.schema) return path === "/" ? [...r.schema, faqPage(HOME_FAQ), ...EVENT_SCHEMA] : r.schema;
  const out = [crumbs(r.label, path)];
  if (r.service) out.push(service(r.service, r.description, path, r.areaServed));
  if (r.faq) out.push(faqPage(r.faq));
  if (r.events) out.push(...EVENT_SCHEMA);
  if (r.extraSchema) out.push(...r.extraSchema);
  return out;
}
