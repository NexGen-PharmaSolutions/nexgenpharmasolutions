/* global process */
// Vercel serverless function: POST /api/contact
// Emails website enquiries to the company inbox over SMTP (Zoho Mail).
//
// Required environment variables (Vercel → Project → Settings → Environment Variables):
//   SMTP_USER   mailbox that sends, e.g. inquiry@nexgenpharmasolutions.com
//   SMTP_PASS   Zoho app-specific password for that mailbox
// Optional:
//   SMTP_HOST   default smtp.zoho.in   (use smtp.zoho.com for a non-India Zoho account)
//   SMTP_PORT   default 465 (SSL)
//   CONTACT_TO  default inquiry@nexgenpharmasolutions.com (comma-separated for several)
//
// Until SMTP_USER and SMTP_PASS are set the endpoint answers 503 and the site
// falls back to opening the visitor's email app, so no enquiry is lost.

import nodemailer from "nodemailer";

const MAX_FIELD = 4000;
const MAX_FIELDS = 20;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FORMS = {
  consultation: "Consultation request",
  contact: "Website enquiry",
  meeting: "Meeting request",
  waitlist: "NMS waitlist",
};

// Best-effort, per-instance throttle: 5 submissions per IP per 10 minutes.
const hits = new Map();
function throttled(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const clean = (s) => String(s ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, 200);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: "Invalid JSON" });
    }
  }
  const { form = "contact", subject = "", replyTo = "", fields = {}, website = "" } = body || {};

  // Honeypot: real visitors never fill the hidden "website" field.
  if (website) return res.status(200).json({ ok: true });

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (throttled(ip)) return res.status(429).json({ ok: false, error: "Too many requests" });

  if (!EMAIL_RE.test(replyTo)) return res.status(400).json({ ok: false, error: "A valid email is required" });
  const entries = Object.entries(fields || {})
    .filter(([k, v]) => typeof k === "string" && v != null && String(v).trim() !== "")
    .slice(0, MAX_FIELDS)
    .map(([k, v]) => [clean(k), String(v).trim().slice(0, MAX_FIELD)]);
  if (entries.length === 0) return res.status(400).json({ ok: false, error: "Empty submission" });

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(503).json({ ok: false, error: "Mail is not configured", fallback: "mailto" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.in",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const label = FORMS[form] || FORMS.contact;
  const subj = `[Website] ${label}${subject ? `: ${clean(subject)}` : ""}`;
  const text = entries.map(([k, v]) => `${k}: ${v}`).join("\n\n");
  const html = `<h2 style="font-family:sans-serif">${esc(label)}</h2><table style="font-family:sans-serif;border-collapse:collapse">${entries
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;vertical-align:top;color:#666;white-space:nowrap">${esc(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join("")}</table><p style="font-family:sans-serif;color:#999;font-size:12px">Sent from nexgenpharmasolutions.com · reply to answer the visitor directly.</p>`;

  try {
    await transporter.sendMail({
      from: `"NexGen Website" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO || "inquiry@nexgenpharmasolutions.com",
      replyTo,
      subject: subj,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact: send failed", err?.message);
    return res.status(502).json({ ok: false, error: "Could not send", fallback: "mailto" });
  }
}
