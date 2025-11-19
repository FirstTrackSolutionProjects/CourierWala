import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-green-100 flex flex-col items-center justify-center text-center px-4 
                 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/image/m1.png')" }} // Ensure image is in public/image/
    >
      <p className="text-red-200 text-lg md:text-xl mb-6 font-bold">
        Your Trusted Logistics Partner
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/blog">
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
            LEARN MORE
          </button>
        </Link>
        <Link to="/contect">
          <button className="bg-white text-black px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 transition">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
