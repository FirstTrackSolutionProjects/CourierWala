import React from 'react'
import Footer from '../components/Footer';
const Trc = () => {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Track your Parcel</h1>
        <div className="flex items-center border border-blue-400 rounded overflow-hidden">
          <span className="px-3 py-2 text-blue-500 font-medium text-sm border-r border-blue-400">AWB</span>
          <input
            type="text"
            placeholder="Enter Tracking Id/AWB"
            className="flex-grow px-3 py-2 outline-none text-sm"
          />
          <button className="px-4 py-2 bg-blue-900 text-blue-500 hover:bg-blue-100 border-l border-blue-400 text-sm">
            TRACK
          </button>
        </div>
      </div>
    </div>
     <Footer />
    </div>
  );
}

export default Trc