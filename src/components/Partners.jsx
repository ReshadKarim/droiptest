import React from "react";

const logos = [
  "src/assets/partner-1.png",
  "src/assets/partner-gridd-up.png",
  "src/assets/partner-nla 1.png",
  "src/assets/partner-granspan.png",
  "src/assets/partner-HQ-1.png",
];

function Partners() {
  return (
    <div className='bg-black py-10'>
      <div className='flex flex-col md:flex-col lg:flex-row justify-around items-center max-w-screen-xl mx-auto space-y-5 md:space-y-5 lg:space-x-10'>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className='h-8 md:h-10 opacity-95 hover:opacity-100 transition-all duration-300'
          />
        ))}
      </div>
    </div>
  );
}

export default Partners;
