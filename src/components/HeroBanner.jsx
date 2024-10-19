import React from "react";
import LLL from './LLL.png';

function HeroBanner() {
  return (
    <div
      className='relative bg-black flex flex-col md:flex-row font-[Outfit] items-center justify-between px-6 py-16 md:px-60'
      style={{
        backgroundImage: "url('src/assets/HS2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section (Text and Buttons) */}
      <div className='text-white max-w-xl space-y-6 text-center md:text-left'>
        <p className='text-lg font-bold'>Software That Will</p>
        <h1 className='text-3xl md:text-5xl font-semibold uppercase leading-snug'>
          Elevate Your <br /> Limousine Business <br /> To <br /> Exquisite
          Height
        </h1>
        <div className='flex justify-center md:justify-start space-x-4'>
          <button className='bg-red-900 text-white font-bold py-3 px-10 md:px-12 rounded-full shadow-lg hover:bg-red-700 transition duration-300'>
            Watch Video
          </button>
          <button
            onClick={() => (window.location.href = "/signup")}
            className='border-2 border-red-900 text-white font-bold py-3 px-10 md:px-12 rounded-full shadow-lg hover:bg-red-700 transition duration-300'
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section (Logo) */}
      <div className='hidden md:block mt-10 md:mt-0 md:ml-10'>
        <img
          src={LLL}
          alt='Logo'
          className='w-72 md:w-[400px] lg:w-[500px] object-contain'
        />
      </div>
    </div>
  );
}

export default HeroBanner;
