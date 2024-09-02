import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../SideBar/SideBar.css';

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
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
      <ul className="fixed right-0 top-10 w-14 p-4 z-50 sidebar ">
        <a  href='https://in.linkedin.com/'  target="_blank">
     

        <img className="cursor-pointer mt-5" src="Images/white2.png" alt="whitelinkedin" />
     
      </a>
      <a href='https://twitter.com/?lang=en' target="_blank">

      
      
        <img className="mt-5" src="Images/white3.png" alt="whitetwitter" />
     
      </a>
      <a href='https://www.facebook.com/'  target="_blank">

     
     
        <img className="mt-5" src="Images/white1.png" alt="whitefacebook" />
    
      </a>
      <Link to="/contact">
        <img className="mt-[700px]" src="Images/Letter.png" alt="mail" />
      </Link>
    </ul>
    </>
  );
};

export default SideBar;


