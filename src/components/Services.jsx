import React from 'react';

function Services() {
  return (
    <div className="bg-gray-300 py-10 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {/* Supply Chain Optimization */}
        <div className="bg-blue-50 hover:bg-blue-100 transition duration-300 shadow-md rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Supply Chain Optimization</h3>
          <p className="text-gray-600">Enhance efficiency across your supply chain with smart analytics and expert planning.</p>
        </div>

        {/* Real-Time Tracking */}
        <div className="bg-red-50 hover:bg-red-100 transition duration-300 shadow-md rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M5 10h14M5 6h14M5 14h14" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
          <p className="text-gray-600">Monitor shipments with GPS and IoT for complete visibility and faster deliveries.</p>
        </div>

        {/* Customs & Compliance */}
        <div className="bg-yellow-50 hover:bg-yellow-100 transition duration-300 shadow-md rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm2 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm0 0V5.5M6 17h12" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Customs & Compliance</h3>
          <p className="text-gray-600">Simplify global shipping with automated compliance checks and customs documentation.</p>
        </div>

        {/* Warehouse Solutions */}
        <div className="bg-purple-50 hover:bg-purple-100 transition duration-300 shadow-md rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Warehouse Solutions</h3>
          <p className="text-gray-600">Maximize space and streamline fulfillment with intelligent warehouse management.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
