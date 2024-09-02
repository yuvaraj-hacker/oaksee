import React from "react";
import { Helmet } from "react-helmet";
import '../About/About.css';
import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";

import Transition from "../Transition/Transition";

function About() {


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
        </Helmet>
        <div className="flex justify-center lg:mt-32   top items-center   media about ">
          <div>
            <p className="text-5xl mb-5 text-green-950 z-50">About Us</p>
            <div>
              <p className="lg:w-[1200px] md:w-[900px] text-green-950 text-justify">
                Oaksee LLC is a premier IT consulting firm dedicated to delivering
                innovative and effective technology solutions. Our team of seasoned
                professionals brings a wealth of experience in various IT
                disciplines, ensuring your business harnesses the power of
                technology to achieve its goals.
              </p>
            </div>
            <div>
              <img className="lg:w-[1200px] lg:h-[550px] pages md:w-[900px] mt-5" src="Images/about.jpg" alt="about" />
            </div>
           
          </div>
         
        </div>
      </HelmetProvider>
      <Line />
    
    </>
  );
}

export default Transition(About);

