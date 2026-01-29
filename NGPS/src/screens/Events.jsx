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
    blue: "from-[#3B82F6] to-[#2563EB]",
    green: "from-[#3B82F6] to-[#2563EB]",
    purple: "from-[#3B82F6] to-[#2563EB]",
    orange: "from-[#3B82F6] to-[#2563EB]",
    red: "from-[#3B82F6] to-[#2563EB]",
    indigo: "from-[#3B82F6] to-[#2563EB]"
  };

  const badgeColorMap = {
    blue: "from-[#3B82F6] to-[#2563EB]",
    green: "from-[#3B82F6] to-[#2563EB]",
    purple: "from-[#3B82F6] to-[#2563EB]",
    orange: "from-[#3B82F6] to-[#2563EB]",
    red: "from-[#3B82F6] to-[#2563EB]",
    indigo: "from-[#3B82F6] to-[#2563EB]"
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
    <div className="min-h-screen bg-[#FFFEF7]">
      <Helmet>
        <title>Events & Industry Engagement | NexGen Pharma Solutions Pvt. Ltd.</title>
        <meta
          name="description"
          content="NexGen Pharma Solutions' participation in CPHI, regulatory forums, and global pharmaceutical events. Active engagement with industry leaders and regulatory authorities."
        />
      </Helmet>

      <header className="p-2 sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 outfit">
            Events & Industry Engagement
          </h1>
          <div className="w-24 h-1 mx-auto my-4 bg-[#3B82F6]"></div>
          <p className="text-lg text-gray-700 outfit">
            Active participants in global pharmaceutical forums, regulatory conferences, and industry events. 
            Staying connected to shape the future of pharma compliance.
          </p>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 outfit">
              Meet Us at Upcoming Events
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Schedule a meeting with our team at CPHI or other industry events to discuss your compliance challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactus"
                className="bg-white hover:bg-gray-100 text-[#3B82F6] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg outfit"
              >
                Contact Us
              </Link>
              <a
                href="mailto:inquiry@nexgenpharmasolutions.com"
                className="bg-white hover:bg-gray-100 text-[#111827] font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg outfit"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111827] mb-12 text-center outfit">
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
                    <span className="inline-block bg-[#3B82F6] text-white px-4 py-1 rounded-full text-sm font-semibold outfit">
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
            <h2 className="text-3xl font-bold text-[#111827] mb-6 outfit text-center">
              Why Industry Engagement Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Regulatory Foresight</h3>
                  <p className="text-gray-600 text-sm">
                    Early insights into upcoming regulatory changes and inspection trends
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Global Best Practices</h3>
                  <p className="text-gray-600 text-sm">
                    Learning from international quality leaders and technology innovators
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Strategic Partnerships</h3>
                  <p className="text-gray-600 text-sm">
                    Building relationships with technology and solution providers for clients
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#DBEAFE] p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#111827] mb-2 outfit">Continuous Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Staying updated on data integrity, CSV, and validation methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#111827] mb-4 outfit">
            Ready to Discuss Your Compliance Needs?
          </h3>
          <p className="text-gray-700 mb-6">
            Whether at an event or via direct consultation, we're here to help you achieve regulatory excellence.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg outfit"
          >
            Get in Touch
          </Link>
        </div>
      </main>

      <footer className="p-2 mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Events;
