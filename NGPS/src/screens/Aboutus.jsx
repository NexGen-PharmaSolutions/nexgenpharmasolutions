import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  ClipboardCheck,
  Clock,
  Eye,
  FileText,
  Globe,
  Lightbulb,
  Monitor,
  PenTool,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand, IconTile } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, TiltCard, GlowCard } from "../components/ui/motion";
import { CONTACT_EMAIL } from "../lib/seo";
import { Leadership } from "../components/Leadership";

const SERVICES = [
  {
    to: "/gmpaudits",
    icon: ClipboardCheck,
    title: "GMP Audits",
    body: "Comprehensive GMP audits to ensure your operations meet regulatory standards and international compliance requirements.",
    span: "",
  },
  {
    to: "/qualityconsulting",
    icon: ShieldCheck,
    title: "Quality Consulting",
    body: "Expert consulting for deviation management, CAPA optimization, and quality system remediation to strengthen compliance.",
    span: "",
  },
  {
    to: "/regulatoryaffairs",
    icon: FileText,
    title: "Regulatory Affairs",
    body: "DMF preparation, IND/NDA/ANDA submissions, and strategic regulatory guidance for global market approvals.",
    span: "",
  },
  {
    to: "/computersystemvalidations",
    icon: Monitor,
    title: "Computer System Validation",
    body: "GAMP 5 compliant CSV services for GxP systems, ensuring data integrity and 21 CFR Part 11 compliance.",
    span: "",
  },
  {
    to: "/training",
    icon: BookOpen,
    title: "Training Programs",
    body: "Comprehensive GMP, data integrity, CAPA, and compliance training programs for pharmaceutical professionals.",
    span: "",
  },
];

const REASONS = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    body: "Cutting-edge GMP consultation leveraging latest technologies and creative problem-solving for compliance and efficiency.",
  },
  {
    icon: Users,
    title: "Distinguished Expertise",
    body: "Unparalleled expertise and proven track record in GMP regulations, providing top-tier consultation for enhanced quality.",
  },
  {
    icon: Award,
    title: "Pristine Quality",
    body: "Maintaining highest quality standards in GMP processes, ensuring meticulous compliance and audit-readiness for all operations.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    body: "Supporting internal and external audits globally, helping clients prepare and respond effectively to regulatory requirements.",
  },
  {
    icon: Clock,
    title: "Efficiency & Value",
    body: "Identifying compliance gaps and implementing practical corrective actions that deliver lasting value and sustainable growth.",
  },
  {
    icon: PenTool,
    title: "Tailored Solutions",
    body: "Custom quality systems, process optimization, and data integrity solutions designed specifically for your operations.",
  },
];

const Aboutus = () => {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Who we are"
        title="About NexGen Pharma Solutions"
        highlight={[1, 2]}
        intro="Leading provider of GMP consulting, regulatory affairs, and quality assurance services. Empowering pharmaceutical companies to achieve excellence through expert guidance, innovative solutions, and unwavering commitment to compliance."
        scene="molecule"
        primary={{ to: "/contactus#contact-form", label: "Partner With Us" }}
        secondary={{ href: `mailto:${CONTACT_EMAIL}`, label: "Email Us" }}
      />

      <Leadership />

      {/* Mission & Vision */}
      <section className="relative py-16 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="Purpose"
                title="Our Mission & Vision"
                highlight={[1]}
                intro="Why we do this work, and the industry we are working towards."
              />
            </div>

            <Stagger className="grid gap-6">
              <StaggerItem>
                <TiltCard max={4} className="p-8 md:p-12">
                  <div className="flex items-center gap-4">
                    <IconTile icon={Target} />
                    <h3 className="text-display-sm text-champagne">Our Mission</h3>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-champagne-soft">
                    To deliver exceptional GMP consulting services that ensure the highest standards of quality,
                    compliance, and safety in pharmaceutical manufacturing. We provide expert guidance, innovative
                    solutions, and personalized support to help clients navigate complex regulatory environments,
                    optimize operations, and achieve long-term success. By fostering a culture of integrity, excellence,
                    and collaboration, we enhance product quality and safeguard public health.
                  </p>
                </TiltCard>
              </StaggerItem>
              <StaggerItem>
                <TiltCard max={4} className="p-8 md:p-12">
                  <div className="absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-copper-500/10 blur-3xl" />
                  <div className="flex items-center gap-4">
                    <IconTile icon={Eye} />
                    <h3 className="text-display-sm text-champagne">Our Vision</h3>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-champagne-soft">
                    To be the global leader in GMP consulting, driving excellence and innovation in pharmaceutical
                    manufacturing. We empower companies with the highest standards of quality and regulatory compliance,
                    fostering a safer, more efficient, and sustainable healthcare industry worldwide. Through our
                    expertise and commitment, we envision a future where every product meets uncompromising safety and
                    efficacy standards, ensuring better health outcomes for all.
                  </p>
                </TiltCard>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section className="relative py-16 md:py-32">
        <div className="absolute inset-0 -z-10 bg-grid opacity-20 mask-fade-b" />
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Our Comprehensive Services"
            highlight={[1]}
            intro="Five disciplines, one standard: work that holds up in front of an inspector."
          />

          <Stagger className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ to, icon, title, body, span }) => (
              <StaggerItem key={to} className={span}>
                <GlowCard as={Link} to={to} className="group flex h-full flex-col p-7 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <IconTile icon={icon} />
                    <ArrowUpRight className="h-5 w-5 text-champagne-faint transition-all duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-300" />
                  </div>
                  <h3 className="mt-8 text-2xl text-champagne transition-colors group-hover:text-copper-200">{title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-champagne-muted">{body}</p>
                  <span className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-copper-300">
                    Learn more about {title}
                  </span>
                </GlowCard>
              </StaggerItem>
            ))}

            <StaggerItem>
              <Link
                to="/#services"
                className="group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-copper-400/30 bg-gradient-to-br from-copper-700/40 via-obsidian-800 to-obsidian-900 p-7 transition-all duration-500 ease-expo hover:border-copper-300/60 hover:shadow-glow md:p-9"
              >
                <div className="absolute -bottom-20 -right-20 -z-10 h-56 w-56 rounded-full bg-copper-500/30 blur-3xl transition-transform duration-700 ease-expo group-hover:scale-125" />
                <span className="eyebrow">Full portfolio</span>
                <div>
                  <h3 className="mt-10 text-2xl text-champagne">View All Services</h3>
                  <p className="mt-3 leading-relaxed text-champagne-soft">
                    Explore our complete portfolio of pharmaceutical consulting solutions
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-copper-200">
                    Explore now
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-16 md:py-32">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SectionHeading
              eyebrow="Why us"
              title="Why Choose NexGen Pharma Solutions"
              highlight={[2, 3, 4]}
            />
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-champagne-muted lg:ml-auto">
                Partner with NexGen Pharma Solutions for expert GMP consulting, regulatory affairs, and quality
                assurance services that drive compliance and operational excellence.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ icon, title, body }, i) => (
              <StaggerItem key={title} className="group relative bg-obsidian-900 p-8 transition-colors duration-500 hover:bg-obsidian-800 md:p-10">
                <span className="absolute right-8 top-8 font-mono text-xs text-champagne-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconTile icon={icon} />
                <h3 className="mt-8 text-xl text-champagne">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-champagne-muted">{body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        title="Ready to Achieve GMP Excellence?"
        intro="Partner with NexGen Pharma Solutions for expert GMP consulting, regulatory affairs, and quality assurance services that drive compliance and operational excellence."
        primary={{ to: "/contactus#contact-form", label: "Send a Message" }}
        secondary={{ href: `mailto:${CONTACT_EMAIL}`, label: "Email Us" }}
      />
    </>
  );
};

export default Aboutus;
