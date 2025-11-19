import React from 'react';

function Info() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{ backgroundColor: '#F1EFEC' }}
    >
      <h2 className="text-blue-900 text-3xl md:text-4xl font-bold mb-10 text-center">
        First Track Superiority
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="bg-blue-200 rounded-xl shadow-md py-6 px-4 text-center hover:scale-105 transition-transform">
          <div className="text-2xl font-bold text-blue-900">20K+</div>
          <div className="text-blue-800 mt-1">Our Trusted Clients</div>
        </div>

        <div className="bg-red-100 rounded-xl shadow-md py-6 px-4 text-center hover:scale-105 transition-transform">
          <div className="text-2xl font-bold text-red-900">40K+</div>
          <div className="text-red-800 mt-1">Orders Successfully Delivered</div>
        </div>

        <div className="bg-purple-200 rounded-xl shadow-md py-6 px-4 text-center hover:scale-105 transition-transform">
          <div className="text-2xl font-bold text-purple-900">35+</div>
          <div className="text-purple-800 mt-1">Suppliers</div>
        </div>
      </div>
    </div>
  );
}

export default Info;
