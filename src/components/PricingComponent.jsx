import React from "react";

function PricingComponent() {
  return (
    <div
      className='bg-cover bg-center pt-20 text-white font-[Outfit]'
      style={{
        backgroundImage: `url('src/assets/Plan hook back.png')`,
      }}
    >
      {/* Section Header */}
      <div className='text-center mb-10'>
        <h2
          className='text-4xl font-bold uppercase'
          data-aos='fade-up' // Add AOS fade-up effect
        >
          Streamline your business with our plans
          <br />
          starting at just <span className='text-[#990406]'>$119*</span>, with{" "}
          <span className='text-[#AA0002]'>
            No Upfront
            <br />
            Fee!
          </span>
        </h2>
      </div>

      {/* Pricing Cards */}
      <div
        className='flex flex-wrap justify-center p-10 space-x-10 -mb-20'
        data-aos='fade-up' //fade-left fade-right zoom-in
      >
        {/* Standard Plan */}
        <div className='bg-black text-white p-12 py-20 rounded-lg w-80 min-h-[500px] transition transform hover:scale-105 hover:border-white border-2 border-transparent custom-shadow translate-y-16'>
          <img
            src='src/assets/award 1.png'
            alt='Standard Icon'
            className='w-12 h-12 mx-auto mb-5 filter brightness-0 invert' // Makes the icon white
          />
          <h3 className='text-2xl font-bold text-center uppercase'>Standard</h3>
          <p className='text-xs text-center text-neutral-500 mb-10'>
            Everything you need to cultivate and expand your limousine business.
          </p>
          <p className='text-4xl font-semibold text-center mt-5'>$119/month</p>
          <ul className='mt-7 space-y-3 text-left list-disc list-inside'>
            <li>Unlimited Driver</li>
            <li>Unlimited Users</li>
            <li>Unlimited Booking</li>
            <li>Unlimited Vehicles</li>
          </ul>
        </div>
        {/* Premium Plan */}
        <div
          className='bg-black text-white p-12 py-20 rounded-lg w-80 min-h-[700px] transition transform hover:scale-105 hover:border-white border-2 border-transparent custom-shadow hover:shadow-2xl'
          data-aos='zoom-in'
        >
          <img
            src='src/assets/premium (1) 1.png'
            alt='Premium Icon'
            className='w-12 h-12 mx-auto mb-5 filter brightness-0 invert'
          />
          <h3 className='text-2xl font-bold text-center uppercase'>Premium</h3>
          <p className='text-xs text-center text-neutral-500 mb-10'>
            A comprehensive plan for professionals who demand only the finest.
          </p>
          <p className='text-4xl font-semibold text-center mt-5'>$599/month</p>
          <ul className='mt-7 space-y-3 text-left list-disc list-inside'>
            <li>Passenger App (LLPA)</li>
            <li>Premium Support</li>
            <li>Personalized Account Management</li>
          </ul>
        </div>
        {/* Business Plan */}
        <div className='bg-black text-white p-12 py-20 rounded-lg w-80 min-h-[500px] transition transform hover:scale-105 hover:border-white border-2 border-transparent custom-shadow translate-y-16'>
          <img
            src='src/assets/all-inclusive 1.png'
            alt='Business Icon'
            className='w-12 h-12 mx-auto mb-5 filter brightness-0 invert'
          />
          <h3 className='text-2xl font-bold text-center uppercase'>Business</h3>
          <p className='text-xs text-center text-neutral-500 mb-10'>
            Robust modules designed for businesses aiming to accelerate their
            growth.
          </p>
          <p className='text-4xl font-semibold text-center mt-5'>$289/month</p>
          <ul className='mt-7 space-y-3 text-left list-disc list-inside'>
            <li>Personalized Website and CRM System</li>
            <li>One Company Alias</li>
            <li>Prioritized Support</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className='flex justify-center'>
        <div className='w-[90vw] md:w-[40vw] z-10 h-[40vh] bg-[#D9D9D9] rounded-t-full mt-[-155px]'>
          <div className='w-full h-full flex flex-col items-center justify-center py-10'>
            <p
              className='text-2xl mb-5 text-center text-black font-bold '
              data-aos='fade-up'
            >
              INTEREST? JOIN US TODAY!
              <br />
              GET YOUR <span className='text-[#630607]'>LIMOLEAD</span> WITHIN
              <br /> <span className='text-[#AA0002]'>15 MINUTES!</span>
            </p>
            <button
              onClick={() => (window.location.href = "/pricing")}
              className='bg-transparent text-black font-semibold border-2 border-[#630607] px-8 py-3 rounded-full hover:bg-[#630607] hover:text-white transition duration-300'
              data-aos='fade-up'
            >
              See Our Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;
