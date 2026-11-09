import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { ROUTES, SITE_URL, SITE_NAME, OG_IMAGE, schemaFor } from "../lib/seo";

// The build bakes route-specific tags into each static HTML file. Remove those
// static copies only after Helmet has written its own, so the head is never
// left without a canonical/description, and never holds duplicates.
const STATIC_SEO =
  'head link[rel="canonical"]:not([data-rh]), head meta[name="description"]:not([data-rh]), head meta[name="keywords"]:not([data-rh]), head meta[name="robots"]:not([data-rh]), head meta[property^="og:"]:not([data-rh]), head meta[name^="twitter:"]:not([data-rh]), head script[type="application/ld+json"]:not([data-rh])';
const dropStatic = () => document.querySelectorAll(STATIC_SEO).forEach((el) => el.remove());

/**
 * Per-route head tags. Defaults come from src/lib/seo.js so the runtime tags
 * match exactly what the build bakes into each route's static HTML.
 */
export default function Seo({ title, description, path, noindex = false }) {
  const { pathname } = useLocation();
  const key = path ?? pathname.replace(/\/+$/, "") ?? "/";
  const route = ROUTES[key || "/"] ?? ROUTES["/"];
  const t = title ?? route.title;
  const d = description ?? route.description;
  const url = `${SITE_URL}${key === "/" ? "/" : key}`;

  return (
    <Helmet prioritizeSeoTags onChangeClientState={dropStatic}>
      <title>{t}</title>
      <meta name="description" content={d} />
      {route.keywords && <meta name="keywords" content={route.keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {schemaFor(key || "/").map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
