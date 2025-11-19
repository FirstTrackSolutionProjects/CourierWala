import React from "react";

function Mission() {
  return (
    <div className="bg-[#e7fdfd] px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 space-y-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-blue-900 text-xl font-bold mb-2">Our Mission</h2>
        <p className="text-gray-800 text-base mb-6">
          Our goal is to transform the logistics landscape through cutting-edge technology, delivering smart, scalable solutions that adapt to the evolving needs of global enterprises.
        </p>
        <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="./image/q2.png"
            alt="Mission"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-blue-900 text-xl font-bold mb-2">Our Vision</h2>
        <p className="text-gray-800 text-base mb-6">
          To build the most reliable and intelligent global logistics ecosystem, driven by data and empowered by seamless, connected technologies.


        </p>
        <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="./image/q5.png"
            alt="Mission"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-blue-900 text-xl font-bold mb-2">Our Values</h2>
        <p className="text-gray-800 text-base mb-6">
         To transform global logistics through advanced technology, delivering smart and scalable solutions customized for the needs of modern enterprises.
        </p>
        <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="./image/q4.png"
            alt="Mission"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission;
