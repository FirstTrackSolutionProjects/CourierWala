import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
    <div className="flex flex-col items-center w-full px-4 py-8 space-y-8">
      {/* Top Image */}
      <img
        src="./image/q10.png" // Replace with actual path
        alt="Teamwork"
        className="w-full max-w-4xl rounded shadow-md"
      />

      {/* About Us Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
        <p className="text-sm md:text-base text-gray-600">
          Delivering Excellence in Domestic Logistics
        </p>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-4xl bg-blue-50 border border-blue-200 rounded-md p-4 shadow-sm">
        <h2 className="font-semibold text-lg mb-2">Our Mission</h2>
        <p className="text-sm text-gray-700">
          To revolutionize domestic logistics by connecting businesses and customers through innovative technology and exceptional service. We ensure efficiency, transparency, and reliability in every shipment.
        </p>
      </div>

      {/* Vision Section */}
      <div className="w-full max-w-4xl bg-green-50 border border-green-200 rounded-md p-4 shadow-sm">
        <h2 className="font-semibold text-lg mb-2">Our Vision</h2>
        <p className="text-sm text-gray-700">
          To be the leading domestic logistics aggregator, empowering businesses and individuals with seamless, cost-effective, and eco-friendly delivery solutions.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full max-w-4xl bg-blue-900 text-indigo-100 text-center rounded-md p-6">
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-sm">
          We bring together a network of trusted logistics providers, cutting-edge tracking systems, and unparalleled customer support to ensure your parcels are delivered on time, every time.
        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
