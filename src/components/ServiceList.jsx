import React from "react";
import { Link } from "react-router-dom";

// Service Data
const services = [
  {
    icon: "src/assets/DispatchSystem.png",
    title: "Dispatch System",
    description:
      "Experience seamless booking, scheduling, dispatch, and reservation management on both desktop and mobile with LimoLead. Boasting an extensive range of features, unparalleled flexibility, and easy accessibility, this all-in-one platform is essential for any livery service. Elevate your productivity and foster business growth with LimoLead.",
    buttonLabel: "Learn More",
    link: "/S1_DispatchSystem",
  },
  {
    icon: "src/assets/BookingSystem.png",
    title: "Booking Software",
    description:
      "Designed specifically for the limo industry, LimoLead offers a swift and intuitive booking process alongside a feature-packed dashboard. This empowers you to compete with national brands, all while maintaining your unique business branding.",
    buttonLabel: "Learn More",
    link: "/S2_BookingSoftware",
  },
  {
    icon: "src/assets/DriverApplication.png",
    title: "Driver Application",
    description:
      "Efficiently oversee your fleet using our cutting-edge driver app, available at no cost. This app empowers your drivers to handle trip assignments, manage ongoing journeys, and complete their tasks in real-time, ensuring optimal operational efficiency.",
    buttonLabel: "Learn More",
    link: "/S3_DriverApplication",
  },
  {
    icon: "src/assets/WebsiteDevelopment.png",
    title: "Website CMS",
    description:
      "LimoLead's mobile-responsive website templates, driven by our sophisticated Content Management System, empower you to create and launch a professional website with ease and efficiency. These templates are designed to ensure a seamless user experience across all devices, allowing you to establish a compelling online presence quickly and cost-effectively.",
    buttonLabel: "Learn More",
    link: "/S4_WebsiteCMS",
  },
  {
    icon: "src/assets/AddonModules.png",
    title: "Customizable Addons",
    description:
      "LimoLead offers customizable add-ons at competitive prices, empowering you to run your business seamlessly and efficiently. Tailor these enhancements to your specific needs and enjoy a streamlined, effective operation.",
    buttonLabel: "Learn More",
    link: "/S5_CustomizableAddons",
  },
  {
    icon: "src/assets/PassengerApplication.png",
    title: "Passenger Web App & Mobile App",
    description:
      "LimoLead's Passenger Web App (LPA) offers a seamless experience for travelers, allowing them to effortlessly book rides, manage their accounts, and monitor their journeys with real-time status updates and driver GPS locations. All of these features are readily accessible on any mobile device, just a tap away.",
    buttonLabel: "Learn More",
    link: "/S6_PassengerApp",
  },
  {
    icon: "src/assets/ps.png",
    title: "Payment Solutions",
    description:
      "At LimoLead, we believe that software and payments work best in unison. That's why we've introduced LimoLead Pay, a comprehensive payment solution designed to meet all your business needs seamlessly.",
    buttonLabel: "Learn More",
    link: "/S7_PaymentSolution",
  },
  {
    icon: "src/assets/am.png",
    title: "Affiliate Network",
    description:
      "Join the world's largest ground transportation network by enhancing your presence on Lead Net. Position yourself as the preferred supplier for other LimoLead customers within your local market and expand your reach.",
    buttonLabel: "Learn More",
    link: "/S8_AffiliateNetwork",
  },
];

function ServiceList() {
  return (
    <div className='relative bg-white font-[Outfit] font-bold min-h-screen py-10 sm:py-20'>
      {/* Background Images */}
      <img
        src='src/assets/Circles 1.png'
        alt='Top Left Design'
        className='absolute top-0 left-0 w-1/2 opacity-100 z-0 hidden sm:block'
      />
      <img
        src='src/assets/Circles 2.png'
        alt='Bottom Right Design'
        className='absolute bottom-0 right-0 w-1/2 opacity-100 z-0 hidden sm:block'
      />

      {/* Services Container */}
      <div className='relative container mx-auto px-4 sm:px-20 md:px-40 lg:px-60 z-10'>
        {/* Services List */}
        <div className='space-y-10 md:space-y-14 max-w-full'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center sm:items-start bg-gray-100 shadow-lg p-4 sm:p-6 md:p-8 rounded-xl max-w-full sm:max-w-[75%] ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
              style={{
                backgroundColor: "#D9D9D9",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Conditional Layout for Odd/Even Items */}
              {index % 2 === 0 ? (
                <>
                  {/* Icon on the Left, Text Left-Aligned */}
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className='w-20 h-20 mx-8 sm:mr-14 self-center sm:self-center '
                    data-aos='fade-up'
                  />
                  <div className='text-left' data-aos='fade-up'>
                    <h2 className='text-lg sm:text-xl font-bold mb-2 text-black'>
                      {service.title}
                    </h2>
                    <p className='text-gray-700 mb-4 text-xs sm:text-sm'>
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <button className='bg-transparent text-black font-semibold border-2 border-[#630607] px-4 sm:px-6 py-1.5 rounded-full hover:bg-[#630607] hover:text-white transition duration-300'>
                        {service.buttonLabel}
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Right-Aligned, Icon on the Right */}
                  <div className='text-right' data-aos='fade-up'>
                    <h2 className='text-lg sm:text-xl font-bold mb-2 text-black'>
                      {service.title}
                    </h2>
                    <p className='text-gray-700 mb-4 text-xs sm:text-sm'>
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <button className='bg-transparent text-black font-semibold border-2 border-[#630607] px-4 sm:px-6 py-1.5 rounded-full hover:bg-[#630607] hover:text-white transition duration-300'>
                        {service.buttonLabel}
                      </button>
                    </Link>
                  </div>
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className='w-20 h-20 mx-8 sm:ml-14 self-center sm:self-center'
                    data-aos='fade-up'
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className='text-center mt-10 sm:mt-12'>
          <button
            onClick={() => (window.location.href = "/pricing")}
            className='relative mt-8 px-12 py-2 md:px-24 lg:px-32 border-4 border-red-900 text-black font-bold rounded-full bg-transparent overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:shadow-xl hover:text-white'
            data-aos='fade-up'
          >
            <span className='relative z-10'>See Our Plans</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
