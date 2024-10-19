import React from "react";

function Footer() {
  return (
    <footer className='bg-black text-white font-[Outfit] py-0'>
      {/* Top Section */}
      <div
        className='bg-[#1E1E1E] py-5 px-6 md:px-16 lg:px-32 w-full flex flex-col md:flex-row justify-between items-center rounded-xl'
        data-aos='fade-up'
      >
        {/* Left Side Text */}
        <p className='text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left leading-snug md:leading-tight mb-4 md:mb-0'>
          INTERESTED IN TAKING YOUR BLACK CAR <br className='hidden md:block' />{" "}
          BUSINESS TO THE NEXT LEVEL? GET A QUICK QUOTE!
        </p>
        <button className='bg-transparent border-2 border-[#9C0A0A] text-white py-2 px-6 md:px-10 lg:px-14 rounded-full hover:bg-red-900 mt-4 md:mt-0'>
          Get a Quote
        </button>
      </div>

      {/* Footer Links */}
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between py-10 px-6 md:px-16 lg:px-60 space-y-8 lg:space-y-0'>
        {/* Left Links */}
        <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-24 text-center md:text-left '>
          {/* Products Section */}
          <div>
            <p className='font-bold text-lg mb-4'>Products</p>
            <ul className='space-y-1'>
              <li>
                <a href='#dispatch' className='hover:text-red-500'>
                  Dispatch Software
                </a>
              </li>
              <li>
                <a href='#booking' className='hover:text-red-500'>
                  Booking Software
                </a>
              </li>
              <li>
                <a href='#payment' className='hover:text-red-500'>
                  Payment Solutions
                </a>
              </li>
              <li>
                <a href='#driver' className='hover:text-red-500'>
                  Driver App
                </a>
              </li>
              <li>
                <a href='#passenger' className='hover:text-red-500'>
                  Passenger App
                </a>
              </li>
              <li>
                <a href='#addons' className='hover:text-red-500'>
                  Addon Modules
                </a>
              </li>
              <li>
                <a href='#pricing' className='hover:text-red-500'>
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <p className='font-bold text-lg mb-4'>Explore</p>
            <ul className='space-y-1'>
              <li>
                <a href='#partners' className='hover:text-red-500'>
                  Partners
                </a>
              </li>
              <li>
                <a href='#testimonials' className='hover:text-red-500'>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo Section */}
        <div className='flex justify-center my-2'>
          <div className='text-center'>
            <img
              src='src/assets/FLogo.png'
              alt='LimoLead Logo'
              className='mx-auto'
            />
          </div>
        </div>

        {/* Right Links */}
        <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-24 text-center md:text-right'>
          {/* About Us Section */}
          <div>
            <p className='font-bold text-lg mb-4'>About Us</p>
            <ul className='space-y-1'>
              <li>
                <a href='#company' className='hover:text-red-500'>
                  Company
                </a>
              </li>
              <li>
                <a href='#careers' className='hover:text-red-500'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#blog' className='hover:text-red-500'>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Need Help Section */}
          <div>
            <p className='font-bold text-lg mb-4'>Need Help?</p>
            <ul className='space-y-1'>
              <li>
                <a href='tel:+1' className='hover:text-red-500'>
                  Call Us (+1)
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:text-red-500'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#support' className='hover:text-red-500'>
                  Support
                </a>
              </li>
              <li>
                <a href='#faqs' className='hover:text-red-500'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#sitemap' className='hover:text-red-500'>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700 py-5'>
        <div className='container mx-auto px-2 md:px-20 flex flex-col md:flex-row justify-between'>
          <p className='text-center md:text-left mb-4 md:mb-0'>
            © 2024 LimoLead LLC. All Rights Reserved
          </p>
          <div className='flex justify-center md:justify-end space-x-6'>
            <a href='#privacy' className='hover:text-red-500'>
              Privacy Policy
            </a>
            <a href='#terms' className='hover:text-red-500'>
              Terms Of Service
            </a>
            <a href='#legal' className='hover:text-red-500'>
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
