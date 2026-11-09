// Exhibitions. Dates are the organiser's published dates (cphi.com).
// `status` is computed from today's date so the site never says "upcoming"
// about a show that has already happened.

export const EVENTS = [
  {
    id: "cphi-india-2026",
    name: "CPHI India 2026",
    city: "New Delhi, India",
    venue: "Yashobhoomi (IICC), Dwarka",
    start: "2026-11-23",
    end: "2026-11-25",
    dates: "23–25 November 2026",
    // Fill in once the organiser confirms the stand, e.g. { hall: "Hall 5", stall: "5.B12" }.
    booth: { hall: null, stall: null },
    // Daily show hours used for meeting slots (IST).
    hours: { open: 10, close: 18 },
    blurb:
      "We are exhibiting at CPHI India 2026. Book a slot with our consultants to talk GMP audits, CSV, data integrity and DMF/CEP strategy.",
    image: "/CPhI india .jpg",
  },
  {
    id: "cphi-milan-2026",
    name: "CPHI Milan 2026",
    city: "Milan, Italy",
    venue: "Fiera Milano",
    start: "2026-10-06",
    end: "2026-10-08",
    dates: "6–8 October 2026",
    blurb:
      "We were at CPHI Milan 2026, around the new Pharma & Tech zone, meeting manufacturers and technology vendors who need their MES, ERP and AI systems to clear Annex 11, Part 11 and GAMP 5.",
    image: null, // add a Milan stand photo here when available
  },
  {
    id: "cphi-worldwide-2025",
    name: "CPHI Worldwide 2025",
    city: "Frankfurt, Germany",
    venue: "Messe Frankfurt",
    start: "2025-10-28",
    end: "2025-10-30",
    dates: "October 2025",
    blurb: "Meetings with API manufacturers and quality leaders from across Europe.",
    image: "/CPhI germany.jpg",
  },
  {
    id: "cphi-india-2024",
    name: "CPHI India 2024",
    city: "Delhi, India",
    venue: "India Expo Mart, Greater Noida",
    start: "2024-11-26",
    end: "2024-11-28",
    dates: "November 2024",
    blurb: "Engagement with Indian API and FDF manufacturers preparing for USFDA and EDQM inspections.",
    image: "/CPhI india .jpg",
  },
];

export function eventStatus(ev, now = new Date()) {
  const start = new Date(`${ev.start}T00:00:00+05:30`);
  const end = new Date(`${ev.end}T23:59:59+05:30`);
  if (now < start) return "upcoming";
  if (now <= end) return "live";
  return "past";
}

export const getEvent = (id) => EVENTS.find((e) => e.id === id);

/** "Hall 5 · Stall 5.B12", or null while the stand is not yet confirmed. */
export function boothLabel(ev) {
  const b = ev?.booth;
  if (!b || (!b.hall && !b.stall)) return null;
  return [b.hall, b.stall && `Stall ${b.stall}`].filter(Boolean).join(" · ");
}

/** Show days as [{ value: "2026-11-23", label: "Mon, 23 Nov" }]. */
export function eventDays(ev) {
  const out = [];
  const d = new Date(`${ev.start}T12:00:00+05:30`);
  const end = new Date(`${ev.end}T12:00:00+05:30`);
  while (d <= end) {
    out.push({
      value: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", timeZone: "Asia/Kolkata" }),
    });
    d.setDate(d.getDate() + 1);
  }
  return out;
}

/** 30-minute meeting slots across show hours, e.g. "10:00–10:30". */
export function eventSlots(ev) {
  const { open = 10, close = 18 } = ev?.hours ?? {};
  const pad = (n) => String(n).padStart(2, "0");
  const out = [];
  for (let m = open * 60; m < close * 60; m += 30) {
    const a = `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
    const b = `${pad(Math.floor((m + 30) / 60))}:${pad((m + 30) % 60)}`;
    out.push(`${a}–${b}`);
  }
  return out;
}
