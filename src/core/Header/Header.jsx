import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

  return ( <>
   <div className="w-screen bg-green-950 h-10  right fixed right-0 z-50 top-0  block class  md:hidden">
    
    <ul className="flex">
      <Link to="https://in.linkedin.com/"  > <img className="w-6 h-6 mt-2   ml-3 "  src='Images/white2.png' alt='whitelinkedin'/></Link>
      <Link to="https://twitter.com/?lang=en"  > <img className="w-6 mt-2 h-6  ml-3" src='Images/white3.png' alt='whitetwitter'/></Link>
      <Link to="https://www.facebook.com/"  > <img  className="w-6  h-6 mt-2   ml-3"  src='Images/white1.png' alt='whitefacebook'/></Link>
      <Link to="/contact"  > <img  className="w-6 h-6 fixed right-3  mt-2 "  src='Images/Letter.png' alt='mail'/></Link>
     
    </ul>
  </div>
  
    <header className=" flex right1 flex-wrap md:justify-start md:flex-nowrap w-full text-sm py-3 white z-50   dark:bg-neutral-800 fixed md:top-0 top-10">
      <nav className="max-w-[85rem] lg:justify-center mx-auto gap-24 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-center gap-20  ">
         <Link to="/"> <img className="w-48" src="Images/Logo3 (6).png" alt="Logo" /> </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
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
                  <line   x1="3" x2="21" y1="6" y2="6" />
                  <line  x1="3" x2="21" y1="12" y2="12" />
                  <line  x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className={`${
            isOpen ? 'block z-50' : 'hidden'
          } absolute top-full left-0 right-0 bg-green-950 dark:bg-green-950 transition-all duration-300 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:block md:z-auto`}
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-2 mt-10 six md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5 large lg:text-lg">
            <Link
              className="font-medium focus:text-green-950 text-gray-400 hover:text-gray-300  focus:outline-none py-2 px-4"
              to="/"
              aria-current="page"
              onClick={ handleClick}
             
            >
              Home
            </Link>
            <Link
              className="font-medium focus:text-green-950 text-gray-400 hover:text-gray-300  focus:outline-none py-2 px-4"
              to="/about"
              onClick={ handleClick}
            >
             About Us
            </Link>
            <Link
              className="font-medium focus:text-green-950 text-gray-400 hover:text-gray-300  focus:outline-none py-2 px-4"
              to="/services"
              onClick={ handleClick}
            >
              Services
            </Link>
            <Link
              className="font-medium focus:text-green-950 text-gray-400 hover:text-gray-300  focus:outline-none py-2 px-4"
              to="/whychooseus"
              onClick={ handleClick}
            >
              Why Choose Us
            </Link>
            <Link
              className="font-medium focus:text-green-950 text-gray-400 hover:text-gray-300  focus:outline-none py-2 px-4"
              to="/ourprocess"
              onClick={ handleClick}
            >
              Our Process
            </Link>
            <Link
              className="font-medium focus:text-green-950 text-gray-400 hover:text-gray-300  focus:outline-none py-2 px-4"
              to="/successstories" 
              onClick={ handleClick}
            >
              Success Stories
            </Link>
            <Link
              className="font-medium focus:text-green-950 text-gray-400 hover:text-gray-300  focus:outline-none    py-2 px-4"
              to="/contact"
              onClick={ handleClick}
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

