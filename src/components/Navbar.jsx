import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-white border-b-2 border-black font-[Outfit] font-bold rounded-xl sticky top-0 z-50'>
      <div className='container mx-auto px-5 lg:px-40 py-7 flex justify-between items-center'>
        {/* Logo Section */}
        <div className='text-4xl font-bold text-black'>
          <a href='/' className='text-black hover:text-red-900'>
            <span className='text-black'>LIMO</span>
            <span className='text-red-900'>LEAD</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Nav Links for desktop */}
        <nav className='hidden lg:flex space-x-7'>
          <a href='/pricing' className='text-black hover:text-red-900'>
            Products
          </a>
          <a href='/services' className='text-black hover:text-red-900'>
            Services
          </a>
          <a href='/aboutus' className='text-black hover:text-red-900'>
            Resources
          </a>
          <a href='/contactus' className='text-black hover:text-red-900'>
            Contact Us
          </a>
        </nav>

        {/* Action Buttons for desktop */}
        <div className='hidden lg:flex items-center space-x-5'>
          <button
            onClick={() => (window.location.href = "/adminlogin")}
            className='relative px-12 py-3 border-2 border-red-900 text-black font-bold rounded-full overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:text-white hover:shadow-xl'
          >
            <span className='relative z-10'>Log in</span>
          </button>

          <div className='relative flex items-center justify-center rounded-full border-2 border-red-900 hover:border-black p-1'>
            <button
              onClick={() => (window.location.href = "/signup")}
              className='relative px-12 py-2 bg-red-900 border-2 border-red-900 text-white font-bold rounded-full overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-black before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:border-black hover:shadow-xl'
            >
              <span className='relative z-10'>Request Demo</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className='absolute top-24 left-0 w-full bg-white flex flex-col items-center space-y-4 lg:hidden z-40 border-t-2 border-black py-4'>
            <a
              href='/pricing'
              className='text-black hover:text-red-900'
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href='/services'
              className='text-black hover:text-red-900'
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href='/aboutus'
              className='text-black hover:text-red-900'
              onClick={toggleMenu}
            >
              Resources
            </a>
            <a
              href='/contactus'
              className='text-black hover:text-red-900'
              onClick={toggleMenu}
            >
              Contact Us
            </a>
            <button
              onClick={() => (window.location.href = "/adminlogin")}
              className='relative flex rounded-full h-[45px] w-40 border-4 border-red-900 items-center justify-center overflow-hidden bg-white text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-900 before:duration-500 before:ease-out hover:shadow-red-900 hover:text-white hover:before:h-56 hover:before:w-56'
            >
              <span className='relative z-10'>Log in</span>
            </button>

            <div className='relative flex items-center justify-center rounded-full border-2 border-red-900 p-1'>
              <button
                onClick={() => (window.location.href = "/signup")}
                className='relative flex rounded-full h-[37px] w-56 border-2 border-red-900 items-center justify-center overflow-hidden bg-white text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-900 before:duration-500 before:ease-out hover:shadow-red-900 hover:text-white hover:before:h-56 hover:before:w-56'
              >
                <span className='relative z-10'>Request Demo</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
