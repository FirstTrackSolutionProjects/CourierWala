import React from 'react';
import { FaThumbsUp, FaLock, FaClock, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaThumbsUp className="text-blue-700 text-3xl mb-4" />,
    title: 'Trusted Reputation',
    description: 'Proven excellence backed by customer satisfaction.',
    bg: 'bg-red-100 hover:bg-red-200'
  },
  {
    icon: <FaLock className="text-purple-700 text-3xl mb-4" />,
    title: 'Advanced Security',
    description: 'Protecting packages with state-of-the-art systems.',
    bg: 'bg-blue-100 hover:bg-blue-200'
  },
  {
  icon: <FaClock className="text-[#7C4585] text-3xl mb-4" />,
title: 'On-Time Commitment',
description: "Deliveries that arrive when they're supposed to.",
bg: 'bg-[#f3e8f9] hover:bg-[#ecdaf4]'


  },
  {
    icon: <FaHeadset className="text-yellow-700 text-3xl mb-4" />,
    title: 'Live Assistance',
    description: 'Real-time help whenever you need it.',
    bg: 'bg-yellow-100 hover:bg-yellow-200'
  }
];

const Choosus = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all`}
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choosus;
