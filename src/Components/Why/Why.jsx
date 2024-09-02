import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import '../Why/Why.css'

import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";

import Transition from "../Transition/Transition";

function Why() {



  return (
    <>
      <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Why Choose Us</title>
      </Helmet>

      <div className="flex justify-center lg:mt-32  media  service  about  top">
      <div className="flex choose flex-col lg:gap-3  z-30">
        <h1 className="text-green-950 text-5xl lg:mb-14   ">
          {" "}
          Why <br />
          Choose Us?
        </h1>
        
        <div   className="  sm:[150px] z-40  border experience  lg:w-[1200px]  flex flex-wrap    flex-1  lg:gap-20 lg:p-4 md:p-2 rounded-md bg-green-950  text-white hover:bg-white hover:text-green-950  hover:transition-colors hover:duration-1000  shadow-md  ">

          <div className="lg:w-[270px] md:[200px]  z-50   border-0   text-xl text-yellow-500">
            Expertise & Experience
          </div>
          <div className="text-justify z-40">
            <div className="flex ">

              <p className=" lg:w-[800px]  lg:h-[40px] md:h-[50px] z-40">
                {" "}
                Our consultants are industry veterans with a deep understanding of the latest technology trends and best practices.
                <br />
              </p>
            </div>


          </div>
        </div>
        <div  className="  rounded-md    lg:w-[1200px]   experience  z-40  h-fit border   flex flex-wrap    flex-1  lg:gap-20 lg:p-4 md:p-2  bg-green-950  text-white hover:bg-white hover:text-green-950  hover:transition-colors hover:duration-1000   shadow-md ">
          <div className="lg:w-[270px] md:[200px] h-fit z-50   border-0   text-xl text-yellow-500">
            Custom Centric Approach
          </div>
          <div className="text-justify z-40">
            <div className="flex ">

              <p className=" lg:w-[800px]  lg:h-[40px] md:h-[50px]   z-40">
                {" "}
                We prioritize your business objectives and tailor our solutions to
                meet your unique needs.
                <br />
              </p>
            </div>


          </div>
        </div>
        <div     className="  rounded-md  lg:w-[1200px]  sm:[150px] experience  z-40  h-[2-] border  flex flex-wrap    flex-1  lg:gap-20 lg:p-4 md:p-2  bg-green-950  text-white hover:bg-white hover:text-green-950  hover:transition-colors hover:duration-1000    shadow-md ">
          <div className="lg:w-[270px] md:[200px] h-fit z-50   border-0   text-xl text-yellow-500">
            Proven Track Record
          </div>
          <div className="text-justify z-40">
            <div className="flex ">

              <p className=" lg:w-[700px]  lg:h-[40px] md:h-[50px]   z-40">
                {" "}
                Our successful projects and satisfied clients speak volumes about
                our commitment to excellence.
                <br />
              </p>
            </div>


          </div>
        </div>
        <div     className=" rounded-md   lg:w-[1200px] sm:[150px] experience  z-40  h-1/2 border  flex flex-wrap  hover   flex-1  lg:gap-20 lg:p-4 md:p-2  bg-green-950  text-white hover:bg-white hover:text-green-950  hover:transition-colors hover:duration-1000     shadow-md ">
          <div className="lg:w-[270px] md:[200px] h-fit z-50   border-0   text-xl text-yellow-500">
            Cutting-Edge Technology
          </div>
          <div className="text-justify z-40">
            <div className="flex ">

              <p className=" lg:w-[700px]  lg:h-[40px] md:h-[50px]   z-40">
                {" "}
                We leverage the latest tools and technologies to deliver solutions
                that drive innovation and efficiency.
                <br />
              </p>
            </div>


          </div>
        </div>
        </div>




       

      
      </div>
      </HelmetProvider>
     
      <Line/>
    </>
  );
}

export default Transition(Why);
