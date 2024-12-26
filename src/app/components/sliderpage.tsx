'use client';

import React, { useState } from 'react';

interface Slide {
  name: string;
  image: string;
  id?: number;
  subtitle?: string;
}

const Slider: React.FC = () => {
  const slides: Slide[] = [
    { name: 'Syltherine', image: '/17.jpg' },
    { name: 'Leviosa', image: '/3.jpg' },
    { name: 'Lolito', image: '/4.jpg' },
    { name: 'Respira', image: '/(2).png' },
    { name: 'Grifo', image: '/(3).png' },
    { name: 'Muggo', image: '/15.jpg' },
    { name: 'Pingky', image: '/16.jpg' },
    { name: 'Potty', image: '/2.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-between items-center bg-[#FCF8F3] px-8 py-4 mx-auto absolute top-[2763px] w-full h-[670px]  ">
      {/* Left Section */}
      <div className="w-1/3">
        <h1 className="text-4xl font-bold mb-4">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you
        </p>
        <button className="px-6 py-3 bg-[#b88e2f] text-white font-medium rounded hover:bg-yellow-500">
          Explore More
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative w-2/3 flex items-center">
        {/* Previous Button */}
        <button
          className="absolute left-4 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-[#b88e2f]"
          onClick={handlePrev}
        >
          ❮
        </button>

        {/* Slides Container */}
        <div className="flex w-full gap-4 bg-[#FCF8F3]">
          {/* Slim Slide */}
          <div className="flex-shrink-0 w-[404px] h-[582px]  overflow-hidden rounded-md">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-md shadow-md">
              <p className="text-sm text-gray-500">
                0{currentIndex + 1} — {slides[currentIndex].subtitle || 'Room'}
              </p>
              <h2 className="text-xl font-bold mt-2">{slides[currentIndex].name}</h2>
            </div>
          </div>

          {/* Large Slide */}
          <div className="flex-shrink-0 w-[372px] h-[486px] overflow-hidden rounded-md relative">
            <img
              src={slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1].image}
              alt= {slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1].name}
              className="w-full h-full object-cover"
            />
            
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-4 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-[#b88e2f]"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
