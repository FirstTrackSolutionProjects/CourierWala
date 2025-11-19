import React from 'react';

function Offers() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-10 md:py-16 lg:py-20 bg-white">
      {/* First Offer */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">What We Offer</h2>
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl w-full mx-auto">
          <img
            src="./image/q3.png"
            alt="International Shipping"
            className="w-[400px] h-auto rounded shadow-lg mb-6 mx-auto"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-orange-800 mb-4">
          International Shipping
        </h3>
        <p className="text-blue-900 text-sm font-serif max-w-9xl mx-auto">
          Expand your business globally with confidence. Our tailored international logistics services expertly navigate complex shipping challenges, guaranteeing prompt and secure deliveries. From seamless customs compliance to live tracking updates, we simplify cross-border shipping to keep your operations smooth and stress-free.
        </p>
      </div>

      {/* Second Offer - same content */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">What We Offer</h2>
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl w-full mx-auto">
          <img
            src="./image/q1.png"
            alt="Domestic Shipping"
            className="w-[400px] h-auto rounded shadow-lg mb-6 mx-auto"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-orange-800 mb-4">
          Domestic Shipping
        </h3>
        <p className="text-blue-900 text-sm font-serif max-w-9xl mx-auto">
         We enhance your local supply chain with customized logistics solutions designed for speed and dependability. From quick last-mile drop-offs to consistent freight handling and optimized delivery schedules, our domestic shipping services are crafted to support your business operations with precision and ease.
        </p>
      </div>
    </div>
  );
}

export default Offers;
