import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { CalendarDays, ExternalLink, Info, Mail, MapPin, Navigation, Phone, Send } from "lucide-react";
import { PageHero, IconTile } from "../components/ui/blocks";
import { Reveal, Stagger, StaggerItem, GlowCard, Magnetic } from "../components/ui/motion";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../lib/seo";
import { submitEnquiry } from "../lib/mailto";
import { getEvent, eventStatus, eventDays, eventSlots, boothLabel } from "../lib/events";
import FormStatus, { Honeypot } from "../components/ui/FormStatus";

const MAPS_URL = "https://maps.app.goo.gl/JVyzYr2iMCrMq6XEA";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=22.2909475,73.1623589&destination_place_id=ChIJS-8LbM_8X0ER-FZwGwf-RuE";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.499!2d73.1623589!3d22.2909475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cf97bb1f8b%3A0x9c4db4ec4e5c3db5!2sPrince%20Cube%2C%20Gotri%2C%20Vadodara%2C%20Gujarat%20390023!5e0!3m2!1sen!2sin!4v1738080000000!5m2!1sen!2sin&markers=color:red%7C22.2909475,73.1623589";

const REQUESTS = [
  ["new audit", "Request a new audit"],
  ["consultation", "Request for quality consultation"],
  ["DMF filing", "Request for DMF filing"],
  ["training", "Request for industrial training"],
  ["CSV", "Request for CSV"],
  ["others", "Others"],
];

const Contactus = () => {
  const [params] = useSearchParams();
  const { hash } = useLocation();
  const event = useMemo(() => {
    const id = params.get("event");
    return id ? getEvent(id) : undefined;
  }, [params]);
  const eventValue = event ? `meeting: ${event.name}` : "";

  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    subject: event ? `Meeting request — ${event.name}` : "",
    request: event ? eventValue : "",
    otherRequest: "",
    company: "",
    phone: "",
    day: "",
    slot: "",
    message: "",
  }));
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [hp, setHp] = useState("");

  // If the visitor arrives with ?event=..., keep the subject and request in sync.
  useEffect(() => {
    if (!event) return;
    setForm((f) => ({
      ...f,
      subject: f.subject || `Meeting request — ${event.name}`,
      request: f.request || eventValue,
    }));
  }, [event, eventValue]);

  // Bring the form into view for deep links (#contact-form or ?event=).
  useEffect(() => {
    if (hash !== "#contact-form" && !event) return;
    const t = setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
    return () => clearTimeout(t);
  }, [hash, event]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const requestLabel =
    form.request === eventValue && event
      ? `Meeting at ${event.name}`
      : REQUESTS.find(([v]) => v === form.request)?.[1] ?? form.request;

  const eventIsPast = event ? eventStatus(event) === "past" : false;
  const booking = Boolean(event) && !eventIsPast && form.request === eventValue;
  const booth = event ? boothLabel(event) : null;
  const days = useMemo(() => (event ? eventDays(event) : []), [event]);
  const slots = useMemo(() => (event ? eventSlots(event) : []), [event]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const dayLabel = days.find((d) => d.value === form.day)?.label;
    try {
      const result = await submitEnquiry({
        form: booking ? "meeting" : "contact",
        subject: form.subject,
        replyTo: form.email,
        website: hp,
        fields: {
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Company: form.company,
          Request: requestLabel,
          "Other request": form.request === "others" ? form.otherRequest : "",
          Event: event ? `${event.name}, ${event.dates}, ${event.venue}${booth ? `, ${booth}` : ""}` : "",
          "Preferred day": booking ? dayLabel : "",
          "Preferred time (IST)": booking ? form.slot : "",
          Message: form.message,
        },
      });
      setStatus(result);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        crumb="Contact Us"
        eyebrow="Contact"
        title="Get In Touch"
        highlight={[2]}
        intro="Have questions about our GMP consulting services? We're here to help you achieve pharmaceutical excellence. Reach out today."
        scene="capsules"
        primary={{ href: "#contact-form", label: "Send Us a Message" }}
        secondary={{ href: `mailto:${CONTACT_EMAIL}`, label: "Email Us" }}
      />

      <section className="relative py-24 md:py-32" aria-labelledby="contact-heading">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Contact information */}
          <div>
            <Reveal>
              <span className="eyebrow">Reach us directly</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="contact-heading" className="mt-5 text-display-md text-champagne">
                Our Contact <span className="text-gradient italic">Information</span>
              </h2>
            </Reveal>

            <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <StaggerItem className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <GlowCard className="p-7">
                  <div className="flex items-start gap-5">
                    <IconTile icon={MapPin} className="shrink-0" />
                    <div className="min-w-0">
                      <h3 className="text-xl text-champagne">Our Location</h3>
                      <address className="mt-3 not-italic leading-relaxed text-champagne-muted">
                        413 &amp; 420 PRINCE CUBE
                        <br />
                        Beside Gangotri Exotica
                        <br />
                        Laxmipura Char Rasta, Nayaran Garden
                        <br />
                        30 Mtr Road, Gotri
                        <br />
                        Vadodara, Gujarat 390023
                        <br />
                        India
                      </address>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-300 transition-colors hover:text-copper-200"
                      >
                        View on Google Maps <ExternalLink className="h-3.5 w-3.5" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>

              <StaggerItem>
                <GlowCard className="h-full p-7">
                  <IconTile icon={Mail} />
                  <h3 className="mt-5 text-xl text-champagne">Email Us</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 block break-all text-sm text-champagne-muted transition-colors hover:text-copper-300"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </GlowCard>
              </StaggerItem>

              <StaggerItem>
                <GlowCard className="h-full p-7">
                  <IconTile icon={Phone} />
                  <h3 className="mt-5 text-xl text-champagne">Call Us</h3>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="mt-2 block text-sm text-champagne-muted transition-colors hover:text-copper-300"
                  >
                    {CONTACT_PHONE}
                  </a>
                </GlowCard>
              </StaggerItem>
            </Stagger>

            {/* Map */}
            <Reveal delay={0.1} className="mt-5">
              <div className="card-lux p-3">
                <h3 className="sr-only">Find Us</h3>
                <div className="relative overflow-hidden rounded-[1.25rem]">
                  <iframe
                    title="Map showing NexGen Pharma Solutions at Prince Cube, Gotri, Vadodara"
                    className="h-72 w-full md:h-80"
                    src={MAP_EMBED}
                    style={{ border: 0, filter: "grayscale(0.6) invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-copper-400/20" />
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                    <MapPin className="h-4 w-4" /> View on Google Maps
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                    <Navigation className="h-4 w-4" /> Get Directions
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div id="contact-form" className="glass relative scroll-mt-28 overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10">
              <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-copper-500/15 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-300/60 to-transparent" />

              <h2 className="text-display-sm text-champagne">Send Us a Message</h2>
              <p className="mt-3 text-champagne-muted">
                Tell us what is on your plate. A senior consultant replies within 24 hours.
              </p>

              {event && (
                <div
                  className="mt-6 flex items-start gap-4 rounded-2xl border border-copper-400/30 bg-copper-400/[0.08] p-4 sm:p-5"
                  role="status"
                >
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-copper-300" />
                  <div className="text-sm">
                    <p className="font-semibold text-champagne">
                      {eventIsPast ? `Following up from ${event.name}` : `Booking a meeting at ${event.name}`}
                    </p>
                    <p className="mt-1 text-champagne-soft">
                      {event.dates} · {event.venue}, {event.city}
                      {booth ? ` · ${booth}` : ""}.{" "}
                      {eventIsPast
                        ? "Tell us what you would like to pick up from the show."
                        : "Pick a day and a 30-minute slot below and we will confirm by email."}
                    </p>
                    {!eventIsPast && !booth && (
                      <p className="mt-1 text-xs text-champagne-faint">Stand number will be confirmed with your meeting.</p>
                    )}
                  </div>
                </div>
              )}

              <form className="relative mt-8 grid gap-5 sm:grid-cols-2" onSubmit={onSubmit}>
                <Honeypot value={hp} onChange={(e) => setHp(e.target.value)} />
                <div>
                  <label htmlFor="cf-name" className="field-label">
                    Name <span className="text-copper-400" aria-hidden="true">*</span>
                  </label>
                  <input id="cf-name" type="text" name="name" required autoComplete="name" className="field" placeholder="Enter your name" value={form.name} onChange={update} />
                </div>

                <div>
                  <label htmlFor="cf-email" className="field-label">
                    Email <span className="text-copper-400" aria-hidden="true">*</span>
                  </label>
                  <input id="cf-email" type="email" name="email" required autoComplete="email" className="field" placeholder="Enter your email" value={form.email} onChange={update} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cf-subject" className="field-label">
                    Subject <span className="text-copper-400" aria-hidden="true">*</span>
                  </label>
                  <input id="cf-subject" type="text" name="subject" required className="field" placeholder="Enter the subject" value={form.subject} onChange={update} />
                </div>

                <div>
                  <label htmlFor="cf-request" className="field-label">
                    Request <span className="text-copper-400" aria-hidden="true">*</span>
                  </label>
                  <select id="cf-request" name="request" required className="field" value={form.request} onChange={update}>
                    <option value="">Please choose an option</option>
                    {event && <option value={eventValue}>Meeting at {event.name}</option>}
                    {REQUESTS.map(([v, l]) => (
                      <option key={v} value={v}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-company" className="field-label">
                    Your Company Name <span className="text-copper-400" aria-hidden="true">*</span>
                  </label>
                  <input id="cf-company" type="text" name="company" required autoComplete="organization" className="field" placeholder="Enter your company name" value={form.company} onChange={update} />
                </div>

                {booking && (
                  <>
                    <div>
                      <label htmlFor="cf-day" className="field-label">
                        Preferred day <span className="text-copper-400" aria-hidden="true">*</span>
                      </label>
                      <select id="cf-day" name="day" required className="field" value={form.day} onChange={update}>
                        <option value="">Choose a day</option>
                        {days.map((d) => (
                          <option key={d.value} value={d.value}>
                            {d.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cf-slot" className="field-label">
                        Preferred time (IST) <span className="text-copper-400" aria-hidden="true">*</span>
                      </label>
                      <select id="cf-slot" name="slot" required className="field" value={form.slot} onChange={update}>
                        <option value="">Choose a 30-minute slot</option>
                        {slots.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="cf-phone" className="field-label">
                        Mobile / WhatsApp
                      </label>
                      <input id="cf-phone" type="tel" name="phone" autoComplete="tel" className="field" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={update} />
                    </div>
                  </>
                )}

                {form.request === "others" && (
                  <div className="sm:col-span-2">
                    <label htmlFor="cf-other" className="field-label">
                      Other Request <span className="text-copper-400" aria-hidden="true">*</span>
                    </label>
                    <input id="cf-other" type="text" name="otherRequest" required className="field" placeholder="Please specify" value={form.otherRequest} onChange={update} />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label htmlFor="cf-message" className="field-label">
                    Your Message <span className="text-copper-400" aria-hidden="true">*</span>
                  </label>
                  <textarea id="cf-message" name="message" required rows={5} className="field resize-y" placeholder="Enter your message" value={form.message} onChange={update} />
                </div>

                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                  <Magnetic strength={0.15}>
                    <button type="submit" disabled={status === "sending"} className="btn-primary group w-full sm:w-auto disabled:opacity-60">
                      <span className="relative z-10">{status === "sending" ? "Sending…" : booking ? "Request meeting" : "Send Message"}</span>
                      <Send className="relative z-10 h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
                    </button>
                  </Magnetic>
                  <p className="flex items-start gap-2 text-sm text-champagne-muted">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
                    A senior consultant replies within 24 hours. NDA available on request.
                  </p>
                </div>

                <FormStatus
                  status={status}
                  error={error}
                  className="sm:col-span-2"
                  sentText={
                    booking
                      ? `Thank you. Your meeting request for ${event.name} is in. We will confirm the slot${booth ? "" : " and our stand number"} by email.`
                      : undefined
                  }
                />
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contactus;
