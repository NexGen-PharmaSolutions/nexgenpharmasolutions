import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      year: "2025",
      name: "CPHI Worldwide 2025",
      location: "Frankfurt, Germany",
      description: "Active participation in the world's largest pharmaceutical networking event, engaging with global manufacturers, regulatory bodies, and technology providers.",
      color: "blue",
      image: "/CPhI germany.jpg"
    },
    {
      year: "2024",
      name: "CPHI India 2024",
      location: "Delhi, India",
      description: "Showcased regulatory and quality consulting expertise to Indian and international pharmaceutical manufacturers at Asia's premier pharma event.",
      color: "green",
      image: "/CPhI india .jpg"
    }
  ];

  const colorMap = {
    blue: "from-[#C67139] to-[#B2622D]",
    green: "from-[#C67139] to-[#B2622D]",
    purple: "from-[#C67139] to-[#B2622D]",
    orange: "from-[#C67139] to-[#B2622D]",
    red: "from-[#C67139] to-[#B2622D]",
    indigo: "from-[#C67139] to-[#B2622D]"
  };

  const badgeColorMap = {
    blue: "from-[#C67139] to-[#B2622D]",
    green: "from-[#C67139] to-[#B2622D]",
    purple: "from-[#C67139] to-[#B2622D]",
    orange: "from-[#C67139] to-[#B2622D]",
    red: "from-[#C67139] to-[#B2622D]",
    indigo: "from-[#C67139] to-[#B2622D]"
  };

  const ringColorMap = {
    blue: "ring-blue-200",
    green: "ring-green-200",
    purple: "ring-purple-200",
    orange: "ring-orange-200",
    red: "ring-red-200",
    indigo: "ring-indigo-200"
  };

  return (
    <div className="min-h-screen bg-[#F5EAD8]">
      <Helmet>
        <title>Events & Industry Engagement | NexGen Pharma Solutions Pvt. Ltd.</title>
        <meta
          name="description"
          content="NexGen Pharma Solutions at CPHI Milan 2026 (Pharma &amp; Tech zone), CPHI Worldwide Frankfurt and CPHI India. GxP validation, data integrity and regulatory expertise brought to the global pharma show floor."
        />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#201E1D] mb-4 outfit">
            Events & Industry Engagement
          </h1>
          <div className="w-24 h-1 mx-auto my-4 bg-[#AA5C29]"></div>
          <p className="text-lg text-gray-700 outfit">
            We exhibit where pharmaceutical manufacturing is actually bought, sold and regulated.
            Frankfurt, Delhi, and next, the Pharma &amp; Tech zone at CPHI Milan.
          </p>
        </div>

        {/* Up next: CPHI Milan campaign panel */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl bg-[#2E2B25] text-white overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 md:p-12">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F6A06B] mb-5">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#F6A06B]" aria-hidden="true" />
                  Up next
                </p>
                <h2 className="text-3xl md:text-[2.75rem] leading-[1.05] font-bold tracking-tight outfit mb-5">
                  CPHI Milan 2026
                  <span className="block font-extralight text-[#F6A06B]">Pharma &amp; Tech Zone</span>
                </h2>
                <p className="text-gray-300 font-light leading-relaxed max-w-[58ch] mb-8">
                  CPHI&rsquo;s newest zone puts pharmaceutical manufacturers alongside the MES, ERP and
                  digital systems that run their plants. We are going for a specific reason: every one
                  of those systems has to survive Annex 11, 21 CFR Part 11 and a quality unit before
                  it ships value. That is the work we do.
                </p>
                <Link
                  to="/computersystemvalidations"
                  className="inline-flex items-center gap-2 bg-[#AA5C29] hover:bg-[#8C491A] text-white font-semibold py-3.5 px-7 rounded-sm transition-colors duration-300 outfit"
                >
                  See the GxP readiness map
                  <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>

              <dl className="bg-[#3D372E] p-8 md:p-12 grid content-center gap-6">
                <div>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                    Zone
                  </dt>
                  <dd className="text-base font-medium">Pharma &amp; Tech</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                    What we bring
                  </dt>
                  <dd className="text-base font-medium">
                    GxP validation, data integrity, regulatory strategy
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                    Stand
                  </dt>
                  <dd className="text-base font-light italic text-gray-400">To be confirmed</dd>
                </div>
                <div className="pt-5 border-t border-gray-700">
                  <a
                    href="mailto:inquiry@nexgenpharmasolutions.com?subject=Meeting%20request%20at%20CPHI%20Milan"
                    className="text-sm font-semibold text-[#F6A06B] hover:text-white transition-colors duration-300"
                  >
                    Request a meeting slot
                  </a>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#201E1D] mb-12 text-center outfit">
            Our Industry Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Year Badge */}
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-br ${badgeColorMap[event.color]} rounded-full w-20 h-20 items-center justify-center z-10 shadow-2xl border-4 border-white ring-4 ${ringColorMap[event.color]} hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg outfit drop-shadow-md">{event.year}</span>
                  </div>

                  {/* Event Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      {/* Event Header */}
                      <div className={`bg-gradient-to-r ${colorMap[event.color]} p-6 text-white`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-semibold opacity-90">{event.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 outfit">{event.name}</h3>
                        <div className="flex items-center text-sm opacity-90">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      </div>

                      {/* Event Photo */}
                      {event.image ? (
                        <div className="h-64 overflow-hidden border-b">
                          <img 
                            src={event.image} 
                            alt={`${event.name} - ${event.location}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-gray-100 flex items-center justify-center border-b">
                          <div className="text-center p-6">
                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-sm text-gray-500">[Event Photo to be Added]</p>
                          </div>
                        </div>
                      )}

                      {/* Event Description */}
                      <div className="p-6">
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Year Badge */}
                  <div className="md:hidden mt-4 mb-2">
                    <span className="inline-block bg-[#AA5C29] text-white px-4 py-1 rounded-full text-sm font-semibold outfit">
                      {event.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Industry Engagement Matters */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#201E1D] mb-6 outfit text-center">
              Why Industry Engagement Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF2EB] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#201E1D] mb-2 outfit">Regulatory Foresight</h3>
                  <p className="text-gray-600 text-sm">
                    Early insights into upcoming regulatory changes and inspection trends
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF2EB] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#201E1D] mb-2 outfit">Global Best Practices</h3>
                  <p className="text-gray-600 text-sm">
                    Learning from international quality leaders and technology innovators
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF2EB] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#201E1D] mb-2 outfit">Strategic Partnerships</h3>
                  <p className="text-gray-600 text-sm">
                    Building relationships with technology and solution providers for clients
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF2EB] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C67139]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#201E1D] mb-2 outfit">Continuous Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Staying updated on data integrity, CSV, and validation methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to meet us at the show */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-[#201E1D] mb-3 outfit">
            Three ways to use twenty minutes with us
          </h2>
          <p className="text-gray-600 font-light mb-10 max-w-[64ch]">
            No slide deck. Bring the problem that is currently blocking a deployment.
          </p>

          <ol className="grid gap-8 md:grid-cols-3 mb-12">
            {[
              [
                "01",
                "Twenty minutes at the stand",
                "Bring your architecture diagram. Leave with the specific clauses that apply to it and an honest read on which gaps will hold up a sale.",
              ],
              [
                "02",
                "Joint readiness workshop",
                "Half a day after the show, on site, with your engineering team and your quality unit in the same room. The fastest way to unblock a stalled pilot.",
              ],
              [
                "03",
                "Named validation partner",
                "We sit behind your sales cycle. Your buyer's quality unit receives a documented qualification path from an independent GMP consultancy instead of a risk they have to price in.",
              ],
            ].map(([n, title, body]) => (
              <li key={n} className="pt-5 border-t-2 border-[#C67139]">
                <span className="block text-xs font-bold tracking-[0.14em] text-[#8C491A] mb-3">
                  {n}
                </span>
                <h3 className="text-xl font-semibold text-[#201E1D] mb-2 outfit leading-snug">
                  {title}
                </h3>
                <p className="text-[0.975rem] font-light leading-relaxed text-gray-600">{body}</p>
              </li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to="/contactus"
              className="inline-flex items-center justify-center self-start bg-[#AA5C29] hover:bg-[#8C491A] text-white font-semibold py-3.5 px-8 rounded-sm transition-colors duration-300 outfit"
            >
              Request a meeting
            </Link>
            <a
              href="mailto:inquiry@nexgenpharmasolutions.com"
              className="text-[0.975rem] font-medium text-[#8C491A] hover:text-[#201E1D] transition-colors duration-300"
            >
              inquiry@nexgenpharmasolutions.com
            </a>
          </div>
        </section>

      </main>

      <footer className="p-2 mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Events;
