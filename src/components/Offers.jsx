import React from 'react';
// Note: In a real project, you would import icons here (e.g., from react-icons)

// Helper Component for a single benefit card
const BenefitCard = ({ icon, title, description, color }) => (
  <div className={`bg-white p-8 rounded-xl border border-gray-200 shadow-lg transition duration-500 transform hover:scale-[1.03] hover:shadow-xl hover:border-${color}-400`}>
    {/* Icon Area */}
    <div className={`text-6xl mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-${color}-100 text-${color}-600`}>
      {/* Placeholder Icon */}
      {icon} 
    </div> 
    
    <h4 className="text-2xl font-bold mb-3 text-gray-800">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

function Offers() {
  // Define your benefits data outside the return statement
  const benefits = [
    {
      icon: '🛡️', // Example icon for Security/Reliability
      title: '99.9% On-Time Reliability',
      description: 'Our advanced routing algorithms ensure your shipments meet their deadlines, every time, guaranteed.',
      color: 'teal',
    },
    {
      icon: '🛰️', // Example icon for Tracking/Technology
      title: 'Advanced GPS Tracking',
      description: 'Monitor your cargo minute-by-minute via our intuitive dashboard, providing complete transparency and peace of mind.',
      color: 'indigo',
    },
    {
      icon: '🤝', // Example icon for Support/Service
      title: 'Dedicated 24/7 Support',
      description: 'Access a team of logistics specialists ready to assist you around the clock, worldwide.',
      color: 'red',
    },
    {
      icon: '⚡', // Example icon for Speed/Efficiency
      title: 'Optimized Delivery Speed',
      description: 'Leverage our vast network for the fastest last-mile delivery and freight movement across continents.',
      color: 'amber',
    },
    {
      icon: '🌍', // Example icon for Global Reach
      title: 'Seamless Global Coverage',
      description: 'We handle complex customs and international regulations so your business can truly operate without borders.',
      color: 'green',
    },
    {
      icon: '🔒', // Example icon for Insurance/Safety
      title: 'Full Cargo Insurance',
      description: 'Comprehensive insurance coverage protects your assets against unforeseen events, ensuring zero loss.',
      color: 'purple',
    },
  ];

  return (
    // Main container: Light gray background for a clean, professional look
    <div className="bg-gray-50 text-gray-800 py-16 md:py-24">
      
      {/* Page Header */}
      <header className="text-center mb-16 md:mb-24 px-4">
        <span className="text-sm font-medium uppercase tracking-widest text-teal-600">
          Seamlessly Connected
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-3 mb-4 text-gray-900">
          Our Cutting-Edge Logistics Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          We leverage technology and expertise to deliver your goods with unmatched speed, security, and global coverage.
        </p>
      </header>
      
      {/* Primary Feature Grid (The two main offers) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        
        {/* 1. International Shipping Card (Image on Left) */}
        <section className="group flex flex-col md:flex-row items-center bg-white rounded-3xl p-6 md:p-10 shadow-2xl transition duration-500 ease-in-out hover:shadow-teal-300/50 hover:shadow-3xl hover:border-teal-400 border border-gray-100">
          
          {/* Image Container */}
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <img
              src="./image/q3.png"
              alt="International Shipping"
              className="w-full h-auto object-cover rounded-2xl shadow-xl transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
              International Shipping
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Expand your business globally with confidence. Our tailored international logistics services expertly navigate complex shipping challenges, guaranteeing **prompt and secure deliveries**. From seamless customs compliance to live tracking updates, we simplify cross-border shipping to keep your operations smooth and stress-free.
            </p>
            
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-lg shadow-teal-500/40 hover:from-teal-600 hover:to-teal-700 transition duration-300 transform hover:-translate-y-1">
              Start Global Delivery
            </button>
          </div>
        </section>

        {/* 2. Domestic Shipping Card (Image on Right) */}
        <section className="group flex flex-col md:flex-row-reverse items-center bg-white rounded-3xl p-6 md:p-10 shadow-2xl transition duration-500 ease-in-out hover:shadow-indigo-300/50 hover:shadow-3xl hover:border-indigo-400 border border-gray-100">
          
          {/* Image Container */}
          <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
            <img
              src="./image/q1.png"
              alt="Domestic Shipping"
              className="w-full h-auto object-cover rounded-2xl shadow-xl transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
              Domestic Shipping
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We enhance your local supply chain with customized logistics solutions designed for **speed and dependability**. From quick last-mile drop-offs to consistent freight handling and optimized delivery schedules, our domestic shipping services are crafted to support your business operations with precision and ease.
            </p>
            
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/40 hover:from-indigo-600 hover:to-indigo-700 transition duration-300 transform hover:-translate-y-1">
              Request Local Quote
            </button>
          </div>
        </section>
      </div>

      {/* --- The Improved "Why Choose Our Service" Section (Light Theme) --- */}
      <div className="mt-24 pt-12 border-t border-gray-200">
        <header className="text-center mb-12">
            <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-600 mb-2">
                The Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Why Choose <span className="text-teal-600">Our Service?</span>
            </h3>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We're more than just shipping; we're your dedicated logistics partner committed to precision and excellence.
            </p>
        </header>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
            />
          ))}
          
        </div>
      </div>
      {/* --- End of Improved "Why Choose Our Service" Section --- */}

    </div>
  );
}

export default Offers;