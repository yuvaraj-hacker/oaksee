import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Header/Header.css'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  function handleClick() {
    closeMenu();
    scrollToTop();
  }
  return (<>
    <div className="w-screen bg-green-950 h-10  right fixed right-0 z-50 top-0      xl:hidden   lg:block       block    ">
      <ul className="flex space-x-2 px-5">
        <Link to="https://in.linkedin.com/"  > <img className="w-6 h-6 mt-2   " src='Images/white2.png' alt='whitelinkedin' /></Link>
        <Link to="https://twitter.com/?lang=en"  > <img className="w-6 mt-2 h-6  " src='Images/white3.png' alt='whitetwitter' /></Link>
        <Link to="https://www.facebook.com/"  > <img className="w-6  h-6 mt-2  " src='Images/white1.png' alt='whitefacebook' /></Link>
        <Link to="/contact"  > <img className="w-6 h-6 fixed right-3  mt-2 " src='Images/Letter.png' alt='mail' /></Link>
      </ul>
    </div>
    <header className=" flex    flex-wrap md:justify-start md:flex-nowrap w-full text-sm py-3 z-50 lg:bg-white bg-gray-100  fixed lg:top-0 top-10">
      <nav className=" mx-auto max-w-[80rem]     px-4 flex items-center justify-between  2xl:gap-80 xl:gap-16 gap-14 ">
        <div className="flex items-center justify-center gap-28  ">
          <Link to="/"> <img className="w-48" src="Images/Logo3 (6).png" alt="Logo" /> </Link>
          <div className="xl:hidden lg:hidden  ">
            <button
              type="button"
              className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 "
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className={`${isOpen ? 'block z-50' : 'hidden'
            } absolute top-full left-0 right-0 bg-gray-300 opacity-95 lg:border-none border  rounded-md  transition-all duration-300 lg:relative md:top-20 lg:top-0 md:left-0 md:right-0 lg:block      lg:bg-transparent xl:block md:z-auto`}
          aria-labelledby="hs-navbar-example-collapse   "
        >
          <div className="flex flex-col gap-5 mt-10 six lg:flex-row  lg:my-0 my-10 md:my-10 text-center  md:items-center md:justify-end   ">
            <Link
              className={`lg:font-medium lg:text-sm text-lg font-bold focus:text-green-950 lg:active:text-green-950   lg:text-gray-400 text-black  hover:text-green-950    focus:outline-none ${isActive('/') ? ' lg:text-green-950 text-green-950 ' : ''}`}
              to="/"
              aria-current="page"
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              className={`lg:font-medium lg:text-sm text-lg font-bold focus:text-green-950   active:text-green-950 lg:text-gray-400 text-black hover:text-green-950   focus:outline-none  ${isActive('/about') ? ' lg:text-green-950 text-green-950 ' : ''}`}
              to="/about"
              onClick={handleClick}
            >
              About Us
            </Link>
            <Link
              className={` lg:font-medium lg:text-sm text-lg  font-bold focus:text-green-950 active:text-green-950 lg:text-gray-400 text-black hover:text-green-950   focus:outline-none  ${isActive('/services') ? ' lg:text-green-950 text-green-950 ' : ''}`}
              to="/services"
              onClick={handleClick}
            >
              Services
            </Link>
            <Link
              className={` lg:font-medium lg:text-sm text-lg font-bold focus:text-green-950 active:text-green-950 lg:text-gray-400 text-black hover:text-green-950   focus:outline-none  ${isActive('/whychooseus') ? ' lg:text-green-950 text-green-950 ' : ''}`}
              to="/whychooseus"
              onClick={handleClick}
            >
              Why Choose Us
            </Link>
            <Link
              className={`lg:font-medium lg:text-sm text-lg font-bold focus:text-green-950 active:text-green-950 lg:text-gray-400 text-black hover:text-green-950   focus:outline-none  ${isActive('/ourprocess') ? ' lg:text-green-950 text-green-950 ' : ''}`}
              to="/ourprocess"
              onClick={handleClick}
            >
              Our Process
            </Link>
            <Link
              className={`lg:font-medium  lg:text-sm text-lg font-bold  focus:text-green-950 active:text-green-950 lg:text-gray-400 text-black hover:text-green-950   focus:outline-none  ${isActive('/successstories') ? ' lg:text-green-950 text-green-950 ' : ''}`}
              to="/successstories"
              onClick={handleClick}
            >
              Success Stories
            </Link>
            <Link
              className={`lg:font-medium lg:text-sm text-lg font-bold focus:text-green-950 active:text-green-950  lg:text-gray-400 text-black hover:text-green-950   focus:outline-none    ${isActive('/contact') ? ' lg:text-green-950 text-green-950 ' : ''}`}
              to="/contact"
              onClick={handleClick}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  </>
  );
}
export default Header;







