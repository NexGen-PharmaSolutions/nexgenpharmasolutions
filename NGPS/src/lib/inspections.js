// Inspection track record and the authorities we prepare sites for.
// Plain JS (no JSX) so scripts/prerender-head.mjs can import it via seo.js.

export const TRACK_RECORD = [
  {
    agency: "USFDA",
    full: "U.S. Food & Drug Administration",
    region: "United States",
    value: "100%",
    label: "Inspection success",
    note: "Every USFDA inspection our clients faced after a NexGen readiness programme was cleared, several with zero Form 483 observations.",
    badge: "Zero-483 outcomes",
  },
  {
    agency: "EDQM",
    full: "European Directorate for the Quality of Medicines",
    region: "Europe · CEP",
    value: "100%",
    label: "Inspection success",
    note: "Every EDQM inspection supported by NexGen cleared, protecting the client's Certificate of Suitability (CEP).",
    badge: "CEP protected",
  },
  {
    agency: "KFDA",
    full: "Korea Ministry of Food & Drug Safety (MFDS)",
    region: "South Korea",
    value: "100%",
    label: "Inspection success",
    note: "Every KFDA (MFDS) GMP inspection supported by NexGen cleared, keeping Korean market access open.",
    badge: "Market access kept",
  },
  {
    agency: "MHRA",
    full: "Medicines and Healthcare products Regulatory Agency",
    region: "United Kingdom",
    value: "100%",
    label: "Inspection success",
    note: "Every MHRA GMP inspection supported by NexGen cleared, keeping UK supply and licences intact.",
    badge: "UK licence kept",
  },
  {
    agency: "WHO-GMP",
    full: "World Health Organization GMP & Prequalification",
    region: "Global · WHO PQ",
    value: "100%",
    label: "Inspection success",
    note: "Every WHO-GMP and prequalification inspection supported by NexGen cleared, opening global tender markets.",
    badge: "Tender ready",
  },
  {
    agency: "EU GMP",
    full: "EMA & EU national competent authorities",
    region: "European Union",
    value: "100%",
    label: "Inspection success",
    note: "Every EU GMP inspection supported by NexGen cleared, with GMP certificates issued for EU supply.",
    badge: "EU certificate",
  },
  {
    agency: "PMDA",
    full: "Pharmaceuticals and Medical Devices Agency",
    region: "Japan",
    value: "100%",
    label: "Inspection success",
    note: "Every PMDA GMP inspection supported by NexGen cleared, keeping accreditation for the Japanese market.",
    badge: "Japan accredited",
  },
  {
    agency: "ANVISA",
    full: "Agência Nacional de Vigilância Sanitária",
    region: "Brazil",
    value: "100%",
    label: "Inspection success",
    note: "Every ANVISA inspection supported by NexGen cleared, securing GMP certification for Brazil.",
    badge: "GMP certified",
  },
];

/** Other regulatory and partner audits we run mock inspections and readiness programmes for. */
export const OTHER_INSPECTIONS = [
  { agency: "PIC/S", region: "50+ member authorities" },
  { agency: "TGA", region: "Australia" },
  { agency: "Health Canada", region: "Canada" },
  { agency: "COFEPRIS", region: "Mexico" },
  { agency: "SAHPRA", region: "South Africa" },
  { agency: "NMPA", region: "China" },
  { agency: "SFDA", region: "Saudi Arabia" },
  { agency: "Swissmedic", region: "Switzerland" },
  { agency: "CDSCO · Revised Schedule M", region: "India" },
  { agency: "Customer & partner audits", region: "Global pharma, CDMO & licensing partners" },
];

export const INDIA_HUBS = [
  ["Gujarat", "Vadodara, Ahmedabad, Ankleshwar, Vapi, Dahej"],
  ["Telangana & Andhra Pradesh", "Hyderabad, Visakhapatnam"],
  ["Maharashtra", "Mumbai, Pune, Aurangabad"],
  ["Himachal Pradesh", "Baddi"],
  ["Karnataka", "Bengaluru"],
  ["Goa & Sikkim", "Formulation clusters"],
];

export const INDIA_FAQ = [
  [
    "Which is the best GMP audit company in India?",
    "The best GMP audit partner is the one with a verifiable inspection record. NexGen Pharma Solutions Pvt. Ltd., based in Vadodara, Gujarat, has a 100% success rate across the USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA inspections it has prepared clients for, including USFDA inspections closed with zero Form 483 observations. Audits are led by former regulators and senior industry QA heads.",
  ],
  [
    "Have your clients cleared USFDA inspections with zero 483s?",
    "Yes. Several clients prepared through our mock USFDA inspections and remediation programmes cleared the actual USFDA inspection with zero Form 483 observations, and every client we prepared has cleared.",
  ],
  [
    "Which regulatory inspections can you prepare us for?",
    "USFDA, EDQM, KFDA (MFDS), MHRA, WHO-GMP, EU GMP, PMDA and ANVISA, all with a 100% success record, plus PIC/S, TGA, Health Canada, COFEPRIS, SAHPRA, NMPA, SFDA, Swissmedic, CDSCO Revised Schedule M and customer or partner audits.",
  ],
  [
    "Do you audit pharma plants across India?",
    "Yes. We run on-site GMP audits and mock inspections across India's pharma clusters, including Gujarat, Hyderabad, Visakhapatnam, Mumbai, Pune, Baddi, Bengaluru, Goa and Sikkim, and for clients in 15+ countries.",
  ],
  [
    "Can you help after a Form 483 or warning letter?",
    "Yes. We write and implement 483 and warning letter responses, root-cause investigations, CAPA plans, data integrity remediation and re-inspection readiness.",
  ],
  [
    "How long does a mock USFDA inspection take?",
    "Typically 3 to 5 days on site, with a classified observation report and remediation roadmap within 7 business days.",
  ],
];
