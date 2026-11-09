import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";

// Home ships in the main bundle for the fastest LCP; every other route is
// split into its own chunk.
const Aboutus = lazy(() => import("./screens/Aboutus"));
const Gmp = lazy(() => import("./screens/Gmp"));
const GmpAuditIndia = lazy(() => import("./screens/GmpAuditIndia"));
const QualCon = lazy(() => import("./screens/QualCon"));
const Comsysval = lazy(() => import("./screens/Comsysval"));
const Training = lazy(() => import("./screens/Training"));
const Contactus = lazy(() => import("./screens/Contactus"));
const Regaff = lazy(() => import("./screens/Regaff"));
const Events = lazy(() => import("./screens/Events"));
const NexGenManagementSystem = lazy(() => import("./screens/NexGenManagementSystem"));
const PrivacyPolicy = lazy(() => import("./screens/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./screens/TermsConditions"));
const Disclaimer = lazy(() => import("./screens/Disclaimer"));
const CookieNotice = lazy(() => import("./screens/CookieNotice"));
const NotFound = lazy(() => import("./screens/NotFound"));

function PageLoader() {
  return (
    <div className="grid min-h-[80vh] place-items-center" role="status" aria-label="Loading">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 rounded-full border border-copper-400/30" />
        <span className="absolute inset-0 animate-spin rounded-full border-t border-copper-300" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/gmpaudits" element={<Gmp />} />
            <Route path="/gmp-audit-company-india" element={<GmpAuditIndia />} />
            <Route path="/qualityconsulting" element={<QualCon />} />
            <Route path="/computersystemvalidations" element={<Comsysval />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/regulatoryaffairs" element={<Regaff />} />
            <Route path="/events" element={<Events />} />
            <Route path="/products/nexgen-management-system" element={<NexGenManagementSystem />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookie-notice" element={<CookieNotice />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
