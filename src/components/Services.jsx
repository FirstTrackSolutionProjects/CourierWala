import React from 'react';

// The main component, utilizing a modern, clean light-mode aesthetic with enhanced card styling.
const Services = () => {

  // Define services with completely different, vibrant light background colors
  const services = [
    {
      title: "Supply Chain Optimization",
      description: "Enhance efficiency across your supply chain with smart AI-driven analytics and expert planning.",
      icon: (
        // Trending Up Icon (Lucide style)
        <svg className="w-10 h-10 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4-4-4 4M12 11V3m0 18h7a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7z" />
        </svg>
      ),
      color: "text-teal-600", // Teal accent color
      iconBg: "bg-teal-100",
      cardBg: "bg-teal-50", // Light Teal card background
      shadowColor: "hover:shadow-teal-300/60",
    },
    {
      title: "Real-Time Tracking",
      description: "Monitor shipments globally with GPS and IoT for complete visibility and faster, predictable deliveries.",
      icon: (
        // Package/Box Icon (Lucide style)
        <svg className="w-10 h-10 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      color: "text-violet-600", // Violet accent color
      iconBg: "bg-violet-100",
      cardBg: "bg-violet-50", // Light Violet card background
      shadowColor: "hover:shadow-violet-300/60",
    },
    {
      title: "Customs & Compliance",
      description: "Simplify global shipping with automated regulatory checks and seamless customs documentation.",
      icon: (
        // Shield Check Icon (Lucide style)
        <svg className="w-10 h-10 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
        </svg>
      ),
      color: "text-amber-600", // Amber accent color
      iconBg: "bg-amber-100",
      cardBg: "bg-amber-50", // Light Amber card background
      shadowColor: "hover:shadow-amber-300/60",
    },
    {
      title: "Warehouse Solutions",
      description: "Maximize space and streamline fulfillment with intelligent, automated warehouse management systems.",
      icon: (
        // Building/Warehouse Icon (Lucide style)
        <svg className="w-10 h-10 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 10v11M19 10v11M9 15h6M9 11h6M12 3L2 9v11M12 3l10 6v11" />
        </svg>
      ),
      color: "text-rose-600", // Rose accent color
      iconBg: "bg-rose-100",
      cardBg: "bg-rose-50", // Light Rose card background
      shadowColor: "hover:shadow-rose-300/60",
    },
  ];

  return (
    // Main container: Light background, dark text
    <div className="min-h-screen bg-gray-50 text-gray-800 py-20 px-4 md:px-12 lg:px-24 font-inter">
      
      {/* Header Section */}
      <header className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
          What We Offer
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Our Comprehensive Logistics Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Driving efficiency and connectivity across your entire operation, from fulfillment to final mile delivery.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          // Individual Service Card with unique light background color and stylish transitions
          <div 
            key={index}
            className={`
              ${service.cardBg}
              border border-gray-100 
              rounded-3xl p-8 
              text-center 
              shadow-xl 
              transition-all 
              duration-500 
              ease-in-out
              transform 
              hover:-translate-y-2 
              hover:scale-[1.01]
              ${service.shadowColor} 
              group
            `}
          >
            {/* Icon Area */}
            <div className="flex justify-center mb-6">
              <div 
                className={`
                  p-5 
                  rounded-full 
                  ${service.iconBg} 
                  ${service.color} 
                  transition-all 
                  duration-500
                  group-hover:bg-white
                  group-hover:ring-4
                  group-hover:ring-opacity-50
                  group-hover:ring-current
                `}
              >
                {service.icon}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Example */}
      <div className="text-center mt-24">
          {/* Main CTA is set to a strong Blue for contrast */}
          <a 
              href="#" 
              className="inline-block px-10 py-4 text-xl font-semibold rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/40 transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/60 transform hover:scale-105"
          >
              Start Your Journey
          </a>
      </div>

    </div>
  );
}

export default Services;