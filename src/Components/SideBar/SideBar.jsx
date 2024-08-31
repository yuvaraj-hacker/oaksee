import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../SideBar/SideBar.css';

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the sidebar when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
    <div 
      className={`w-14 bg-green-950 h-screen p-4 fixed right-0 top-0 z-50 sidebar hidden md:block transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-[1500ms] ease-linear`}
    >
    
    </div>
      <ul className="fixed right-0 top-5 w-14 p-4 z-50 sidebar ">
      <Link to="https://in.linkedin.com/">
        <img src="Images/white2.png" alt="whitelinkedin" />
      </Link>
      <Link to="https://twitter.com/?lang=en">
        <img className="mt-5" src="Images/white3.png" alt="whitetwitter" />
      </Link>
      <Link to="https://www.facebook.com/">
        <img className="mt-5" src="Images/white1.png" alt="whitefacebook" />
      </Link>
      <Link to="/contact">
        <img className="mt-[700px]" src="Images/Letter.png" alt="mail" />
      </Link>
    </ul>
    </>
  );
};

export default SideBar;


