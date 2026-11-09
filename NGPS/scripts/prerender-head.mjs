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

function render(path, r) {
  const head = headFor(path, r);
  const noscript = `<noscript><main><h1>${esc(r.label ?? SITE_NAME)}</h1><p>${esc(
    r.description
  )}</p><nav><ul>${navLinks}</ul></nav></main></noscript>`;
  return template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->${head}\n    <!--seo:end-->`)
    .replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscript}`);
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
await writeFile(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);

console.log(`SEO: wrote ${Object.keys(ROUTES).length} route documents, sitemap.xml, robots.txt, 404.html`);
