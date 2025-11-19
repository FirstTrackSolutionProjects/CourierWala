import React from "react";
import { Users, PackageCheck, Truck } from "lucide-react";

function Info() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-[#E3F2FD] via-white to-[#F3E5F5]">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-14 text-center drop-shadow-sm">
        First Track Superiority
      </h2>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">

        {/* Card 1 – Blue */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-10 shadow-2xl text-white text-center transform hover:scale-110 hover:shadow-blue-400/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 opacity-10 blur-2xl"></div>
          <Users className="w-14 h-14 mx-auto mb-5" />
          <h3 className="text-4xl font-extrabold">20K+</h3>
          <p className="mt-2 text-lg font-medium">Our Trusted Clients</p>
        </div>

        {/* Card 2 – Red */}
        <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-10 shadow-2xl text-white text-center transform hover:scale-110 hover:shadow-red-400/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 opacity-10 blur-2xl"></div>
          <PackageCheck className="w-14 h-14 mx-auto mb-5" />
          <h3 className="text-4xl font-extrabold">40K+</h3>
          <p className="mt-2 text-lg font-medium">Orders Delivered</p>
        </div>

        {/* Card 3 – Purple */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-10 shadow-2xl text-white text-center transform hover:scale-110 hover:shadow-purple-400/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 opacity-10 blur-2xl"></div>
          <Truck className="w-14 h-14 mx-auto mb-5" />
          <h3 className="text-4xl font-extrabold">35+</h3>
          <p className="mt-2 text-lg font-medium">Suppliers Connected</p>
        </div>

      </div>
    </div>
  );
}

export default Info;
