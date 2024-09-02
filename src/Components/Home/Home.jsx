import React from "react";
import { Helmet } from "react-helmet";
import '../Home/Home.css';
import { Link } from "react-router-dom";

import 'aos/dist/aos.css';
import Line from "../Line/Line";
import Transition from "../Transition/Transition";



function Home() {
 

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="flex  flex-wrap lg:justify-center lg:items-center media   home lg:h-screen  ">
        <div>
          <div className="flex flex-wrap gap-2">
            <p className="text-green-950 text-2xl">Welcome To</p>
            <p className="text-yellow-600 text-2xl">OOAKSEE LLC</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="lg:text-7xl md:text-7xl text-green-950 font-bold size  size ">Your Partner In  </p>
            <p className="lg:text-7xl md:text-7xl font-bold   text-yellow-600  z-30 size">IT Excellence</p>
          </div>
          <Link to="/services" >
            <div className="flex flex-shrink-0 mt-3 gap-2 animation md:mb-0 mb-72">
              <img className="min-w-8 w-8 h-9  " src="/Images/Right Arrow.png" alt="rightarrow" />
                <p className=" text-green-950 text-2xl  whitespace-nowrap">See Our Services</p>
            

            </div>
          </Link>

        </div>



      </div>
     
      <Line />




    </>
  );
}

export default Transition(Home);
