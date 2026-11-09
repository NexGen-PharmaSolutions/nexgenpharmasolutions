import { CONTACT_EMAIL } from "./seo";

/** Opens the visitor's mail client with the enquiry pre-filled. Used as a fallback. */
export function sendViaMail(subject, fields) {
  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

/**
 * Sends an enquiry through /api/contact (emailed to the inbox server-side).
 * If the API is unavailable or not yet configured, falls back to the mail client
 * so the enquiry still reaches us.
 *
 * @returns {Promise<"sent" | "mailto">}
 */
export async function submitEnquiry({ form, subject, replyTo, fields, website = "" }) {
  let res = null;
  try {
    res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form, subject, replyTo, fields, website }),
    });
  } catch {
    res = null; // offline or blocked: fall back below
  }
  if (res?.ok) return "sent";
  if (res?.status === 400) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Please check the form and try again.");
  }
  // 404 (local dev), 429, 503 (not configured) or 5xx: use the mail client instead.
  sendViaMail(subject, fields);
  return "mailto";
}

export { CONTACT_EMAIL };
