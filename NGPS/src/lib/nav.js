import { ClipboardCheck, ShieldCheck, Cpu, GraduationCap, FileStack, LayoutDashboard } from "lucide-react";

export const SERVICES = [
  {
    to: "/gmpaudits",
    label: "GMP Audits",
    blurb: "USFDA, EDQM & WHO mock inspections",
    icon: ClipboardCheck,
    image: "/gmpaudits.png",
  },
  {
    to: "/qualityconsulting",
    label: "Quality Consulting",
    blurb: "QMS, CAPA & data integrity remediation",
    icon: ShieldCheck,
    image: "/qualityconsult.png",
  },
  {
    to: "/computersystemvalidations",
    label: "Computer System Validation",
    blurb: "GAMP 5, Part 11 & Annex 11 assurance",
    icon: Cpu,
    image: "/computersysval.png",
  },
  {
    to: "/training",
    label: "Training",
    blurb: "GMP & inspection-readiness programmes",
    icon: GraduationCap,
    image: "/training.png",
  },
  {
    to: "/regulatoryaffairs",
    label: "Regulatory Affairs",
    blurb: "DMF, CEP & eCTD submissions",
    icon: FileStack,
    image: "/regbg.png",
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
