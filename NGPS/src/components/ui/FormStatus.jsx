import { CheckCircle2, Mail, AlertTriangle } from "lucide-react";
import { CONTACT_EMAIL } from "../../lib/seo";

/**
 * Hidden honeypot field. Bots fill it; people never see it.
 * Pass its value as `website` to submitEnquiry().
 */
export function Honeypot({ value, onChange }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

/** Result message after submitting a form. status: idle | sending | sent | mailto | error */
export default function FormStatus({ status, error, sentText = "Thank you. Your message is with our team and a senior consultant will reply within 24 hours.", className = "" }) {
  if (status === "idle" || status === "sending") return null;
  const tone =
    status === "error"
      ? "border-red-400/40 bg-red-400/10"
      : "border-sage/40 bg-sage/10";
  const Icon = status === "sent" ? CheckCircle2 : status === "mailto" ? Mail : AlertTriangle;
  return (
    <div role="status" aria-live="polite" className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm text-champagne-soft ${tone} ${className}`}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-copper-300" />
      <p>
        {status === "sent" && sentText}
        {status === "mailto" && (
          <>
            Your email app should now be open with your enquiry filled in. Press send there to reach us. If nothing
            opened, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all font-semibold text-copper-300 underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            .
          </>
        )}
        {status === "error" && (error || "Something went wrong. Please try again.")}
      </p>
    </div>
  );
}
