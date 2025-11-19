import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: './image/q7.png',
    title: 'Cosmetic Products',
    description: 'Enhance your natural beauty with our skin-friendly, high-performance cosmetics Perfect for every look—bold, subtle, or in between.'

  },
  {
    image: './image/q15.png',
    title: 'Consumer Electronics',
    description: 'Experience the future of technology with our premium consumer electronics — smart, sleek, and built for everyday life.'
  },
  {
    image: './image/q9.png',
    title: ' Healthcare & Pharma',
    description: 'Empowering healthier lives with accessible, affordable, and expert healthcare solutions Because everyone deserves quality care they can rely on.'
 },
 
  

];

const IndustryExpertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-left w-full max-w-6xl mb-8">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-700">Industry</span>{' '}
          <span className="text-yellow-500">Expertise</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700">
        <div className="w-full lg:w-1/2">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center p-8">
          <p className="text-gray-700 text-base mb-4 whitespace-pre-line">
            {currentSlide.description}
          </p>
          <h2 className="text-xl font-bold text-yellow-500">{currentSlide.title}</h2>
        </div>
      </div>

      <div className="flex space-x-2 mt-6">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default IndustryExpertise;
