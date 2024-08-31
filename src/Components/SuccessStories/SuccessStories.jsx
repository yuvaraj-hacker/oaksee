import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import '../SuccessStories/SuccessStories.css'

import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";
import SideBars from "../SideBars/SideBars";

function SuccessStories() {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsEntered(true), 10); // Delay ensures transition runs after mount
  }, []);
 
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>success Stories</title>
      </Helmet>
      <div  className={`flex flex-wrap   md:gap-5 sm:gap-3 justify-center items-center  media h-screen  about   ${isEntered ? 'entered' : ''}`}>
        <div >
          <p className="text-5xl text-green-950 ml-7">Success Stories</p>
          <img   className="w-[500px] h-[500px] p-5" src='/Images/successs.jpg' alt='success' />
        </div>
        <div    className="lg:w-2/5 md:w-3/5 success">
          <div className="lg:mt-14 ">
            <div className="flex z-50  " >

              <div className="p-2  ">
                <div className="flex gap-1">
                  <p className=" text-yellow-600 text-xl font-medium">Client A:</p>
                  <p className="text-green-950 text-xl font-medium">Digital Transformation</p>

                </div>

                <p className="text-green-950 text-justify    ">
                  Oaksee LLC transfomed cient A's operations by implementing a comprehensive digital strategy, resulting in a 30% increase in efficiency and a 20% reduction in costs. </p>
              </div>
            </div>
            <div className="flex mt-8 z-50 ">

              <div className="p-2">
                <div className="flex gap-1">
                  <p className=" text-yellow-600  text-xl  font-medium">Client B:</p>
                  <p className="text-green-950  text-xl  font-medium">Cybersecurity Enhancement </p>

                </div>

                <p className="text-green-950  text-justify ">
                  We helped a client B fortify their cybersecurity defenses, reducing the risk of data breaches and ensuring compliance with industry regulations. </p>
              </div>
            </div>
            <div className="flex mt-8 z-50 ">

              <div className="p-2">
                <div className="flex gap-1">
                  <p className=" text-yellow-600  text-xl  font-medium">Client C:</p>
                  <p className="text-green-950  text-xl  font-medium">Cloud Migration</p>

                </div>

                <p className="text-green-950 text-justify ">
                  By migrating client C's systems to the cloud, we improved their scalability and flexibility, enabling them to expand their services globally. </p>
              </div>
            </div>
            <div className="flex mt-8 z-50 ">

              <div className="p-2">
                <div className="flex gap-1">
                  <p className=" text-yellow-600  text-xl  font-medium">Client D:</p>
                  <p className="text-green-950  text-xl  font-medium">Manpower Supply</p>

                </div>

                <p className="text-green-950 text-justify  ">
                  We provided client D with a team of highly skilled IT professionals for a major project, resulting in timely completion and exceeding client expectations. </p>
              </div>
            </div>

          </div>
         
        </div>
      
      </div>
      </HelmetProvider>
      <SideBars/>
      <Line/>
    </>
  );
}

export default SuccessStories;
