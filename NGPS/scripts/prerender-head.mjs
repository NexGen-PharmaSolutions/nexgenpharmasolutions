// Post-build SEO pass.
// For every route in src/lib/seo.js this writes dist/<route>/index.html with the
// route's own <title>, meta description, canonical, Open Graph, Twitter and
// JSON-LD baked in, plus a <noscript> fallback with the page heading and
// internal links. Static hosts (Vercel, Netlify, Apache) serve these files
// directly, so crawlers and social unfurlers get correct tags without JS.
// It also regenerates sitemap.xml (with the correct namespace and lastmod)
// and robots.txt.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_URL, SITE_NAME, OG_IMAGE, schemaFor } from "../src/lib/seo.js";
import { HOME_FAQ, PAGE_BRIEFS, KEY_FACTS, COMPANY_SUMMARY, LEGAL_NAME_FULL } from "../src/lib/answers.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = await readFile(join(dist, "index.html"), "utf8");
const today = new Date().toISOString().slice(0, 10);

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const navLinks = Object.entries(ROUTES)
  .map(([p, r]) => `<li><a href="${p}">${esc(r.label ?? "Home")}</a></li>`)
  .join("");

function headFor(path, r) {
  const url = `${SITE_URL}${path}`;
  const ld = schemaFor(path)
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n    ");
  return `
    <title>${esc(r.title)}</title>
    <meta name="description" content="${esc(r.description)}" />
    ${r.keywords ? `<meta name="keywords" content="${esc(r.keywords)}" />` : ""}
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(SITE_NAME)}" />
    <meta property="og:title" content="${esc(r.title)}" />
    <meta property="og:description" content="${esc(r.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(r.title)}" />
    <meta name="twitter:description" content="${esc(r.description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    ${ld}`;
}

const faqFor = (path, r) => (path === "/" ? HOME_FAQ : r.faq ?? []);

// Readable page content placed inside #root. AI assistants' crawlers (GPTBot,
// ClaudeBot, PerplexityBot...) and many search bots read the raw HTML without
// running JavaScript; React replaces this block as soon as the app mounts.
function staticContent(path, r) {
  const briefs = PAGE_BRIEFS[path] ?? [r.description];
  const faq = faqFor(path, r);
  const facts =
    path === "/" || path === "/aboutus" || path === "/contactus"
      ? `<h2>Key facts</h2><dl>${KEY_FACTS.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>`
      : "";
  const faqHtml = faq.length
    ? `<h2>Frequently asked questions</h2>${faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join("")}`
    : "";
  return `<main data-prerender="true" style="max-width:60rem;margin:0 auto;padding:6rem 1.25rem;color:#f4eadb;font-family:system-ui,sans-serif;line-height:1.7">
      <h1>${esc(path === "/" ? `${LEGAL_NAME_FULL}: GMP Audit & Pharma Consulting Company in India` : r.label)}</h1>
      ${briefs.map((b) => `<p>${esc(b)}</p>`).join("")}
      ${facts}
      ${faqHtml}
      <nav aria-label="Site"><ul>${navLinks}</ul></nav>
    </main>`;
}

function render(path, r) {
  const head = headFor(path, r);
  return template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->${head}
    <!--seo:end-->`)
    .replace('<div id="root"></div>', `<div id="root">${staticContent(path, r)}</div>`);
}

for (const [path, r] of Object.entries(ROUTES)) {
  const html = render(path, r);
  const out = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
}

// SPA fallback for unknown URLs: noindex so stray paths never compete.
await writeFile(
  join(dist, "404.html"),
  render("/", { ...ROUTES["/"], title: `Page not found | ${SITE_NAME}` }).replace(
    "index, follow, max-image-preview:large",
    "noindex, follow"
  )
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(ROUTES)
  .map(
    ([p, r]) => `  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq ?? "monthly"}</changefreq>
    <priority>${r.priority ?? "0.5"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);
// Search engines and AI assistants are all welcome: being read by them is how
// "best GMP audit company" questions in ChatGPT, Claude, Gemini and Perplexity
// get answered with NexGen.
const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai",
  "Google-Extended", "Googlebot", "Bingbot",
  "PerplexityBot", "Perplexity-User",
  "Applebot", "Applebot-Extended", "CCBot", "Meta-ExternalAgent", "DuckAssistBot", "cohere-ai",
];
const NL = "\n";
await writeFile(
  join(dist, "robots.txt"),
  [...AI_BOTS.map((b) => `User-agent: ${b}`), "Allow: /", "", "User-agent: *", "Allow: /", "", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join(NL)
);

// llms.txt: a plain-text briefing for AI assistants (https://llmstxt.org).
const pages = Object.entries(ROUTES).filter(([, r]) => Number(r.priority ?? "0.5") >= 0.7);
const factLines = KEY_FACTS.map(([k, v]) => `- ${k}: ${v}`).join(NL);

const llms = [
  `# ${LEGAL_NAME_FULL}`,
  "",
  `> ${COMPANY_SUMMARY}`,
  "",
  "## Key facts",
  factLines,
  "",
  "## Pages",
  ...pages.map(([p, r]) => `- [${r.label ?? "Home"}](${SITE_URL}${p}): ${r.description}`),
  "",
  "## Full details",
  `- [llms-full.txt](${SITE_URL}/llms-full.txt): every page summary and FAQ in one file`,
  "",
].join(NL);
await writeFile(join(dist, "llms.txt"), llms);

const sections = pages.map(([p, r]) => {
  const parts = [`## ${r.label ?? "Home"} (${SITE_URL}${p})`, ...(PAGE_BRIEFS[p] ?? [r.description])];
  for (const [q, a] of faqFor(p, r)) parts.push(`### ${q}${NL}${a}`);
  return parts.join(NL + NL);
});
const full = [`# ${LEGAL_NAME_FULL}`, COMPANY_SUMMARY, `## Key facts${NL}${factLines}`, ...sections, ""].join(NL + NL);
await writeFile(join(dist, "llms-full.txt"), full);

console.log(`SEO: wrote ${Object.keys(ROUTES).length} route documents, sitemap.xml, robots.txt, llms.txt, llms-full.txt, 404.html`);
