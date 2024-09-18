import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <div
        className={`w-14 bg-green-950 h-screen p-4 fixed right-0 top-0 z-50   2xl:block xl:block lg:block hidden   transform ${isVisible ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-[1500ms] ease-linear`}
      >
      </div>
      <div className=' fixed top-20 right-2 z-50  2xl:block xl:block lg:block hidden'>
        <div className=''>
          <div className='flex flex-col gap-3' >
            <a href='https://in.linkedin.com/' target="_blank">
              <img className="cursor-pointer w-10   " src="Images/white2.png" alt="whitelinkedin" />
            </a>
            <a href='https://twitter.com/?lang=en' target="_blank">
              <img className=" w-10  " src="Images/white3.png" alt="whitetwitter" />
            </a>
            <a href='https://www.facebook.com/' target="_blank">
              <img className=" w-10   " src="Images/white1.png" alt="whitefacebook" />
            </a>
            <Link to="/contact" className='2xl:my-[60vh]  my-[45vh]'>
              <img className=" w-10 " src="Images/Letter.png" alt="mail" />
            </Link>
          </div>
          </div>
      </div>
    </>
  );
};
export default SideBar;
