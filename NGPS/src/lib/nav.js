import { ClipboardCheck, ShieldCheck, Cpu, GraduationCap, FileStack, LayoutDashboard } from "lucide-react";

export const SERVICES = [
  {
    to: "/gmpaudits",
    label: "GMP Audits",
    blurb: "USFDA, EDQM & WHO mock inspections",
    icon: ClipboardCheck,
    image: "/images/gmp-audit.webp",
  },
  {
    to: "/qualityconsulting",
    label: "Quality Consulting",
    blurb: "QMS, CAPA & data integrity remediation",
    icon: ShieldCheck,
    image: "/images/quality-consulting.webp",
  },
  {
    to: "/computersystemvalidations",
    label: "Computer System Validation",
    blurb: "GAMP 5, Part 11 & Annex 11 assurance",
    icon: Cpu,
    image: "/images/computer-system-validation.webp",
  },
  {
    to: "/training",
    label: "Training",
    blurb: "GMP & inspection-readiness programmes",
    icon: GraduationCap,
    image: "/images/gmp-training.webp",
  },
  {
    to: "/regulatoryaffairs",
    label: "Regulatory Affairs",
    blurb: "DMF, CEP & eCTD submissions",
    icon: FileStack,
    image: "/images/regulatory-affairs.webp",
  },
];

export const PRODUCTS = [
  {
    to: "/products/nexgen-management-system",
    label: "NexGen Management System",
    blurb: "Pharma eQMS, built for Part 11",
    icon: LayoutDashboard,
    badge: "Coming soon",
  },
];

export const LEGAL = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-conditions", label: "Terms & Conditions" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/cookie-notice", label: "Cookie Notice" },
];
