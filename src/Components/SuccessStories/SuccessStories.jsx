import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";
import Transition from "../Transition/Transition";
import { Link } from "react-router-dom";
function SuccessStories() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>success Stories</title>
        </Helmet>
        <section className="2xl:max-w-[75rem] xl:max-w-[65rem] lg:max-w-[66rem]  mx-auto  2xl:px-5 xl:px-14 lg:px-16 px-5  " >
          <div className="grid grid-cols-1  ">
            <p className="text-5xl text-green-950 ml-5">Success Stories</p>
            <div className="lg:grid lg:grid-cols-6 items-center ">
              <img className=" col-span-3 " src='/Images/successs.jpg' alt='success' />
              <div className="  col-span-3 space-y-7 ">
                <div className=" z-50  " >
                  <div className="  ">
                    <div className="flex  flex-wrap gap-1  ">
                      <p className=" text-yellow-600 lg:text-xl font-medium ">Client A:</p>
                      <p className="text-green-950 lg:text-xl font-medium">Digital Transformation</p>
                    </div>
                    <p className="text-green-950 text-justify    ">
                      Oaksee LLC transfomed cient A's operations by implementing a comprehensive digital strategy, resulting in a 30% increase in efficiency and a 20% reduction in costs. </p>
                  </div>
                </div>
                <div className=" z-50 ">
                  <div className="">
                    <div className="flex  flex-wrap gap-1   ">
                      <p className=" text-yellow-600  lg:text-xl  font-medium">Client B:</p>
                      <p className="text-green-950  lg:text-xl  font-medium">Cybersecurity Enhancement </p>
                    </div>
                    <p className="text-green-950  text-justify ">
                      We helped a client B fortify their cybersecurity defenses, reducing the risk of data breaches and ensuring compliance with industry regulations. </p>
                  </div>
                </div>
                <div className="  z-50 ">
                  <div className=" ">
                    <div className="flex  flex-wrap gap-1   ">
                      <p className=" text-yellow-600  lg:text-xl  font-medium">Client C:</p>
                      <p className="text-green-950  lg:text-xl  font-medium">Cloud Migration</p>
                    </div>
                    <p className="text-green-950 text-justify ">
                      By migrating client C's systems to the cloud, we improved their scalability and flexibility, enabling them to expand their services globally. </p>
                  </div>
                </div>
                <div className=" z-50 ">
                  <div className="">
                    <div className="flex flex-wrap gap-1   ">
                      <p className=" text-yellow-600  lg:text-xl  font-medium">Client D:</p>
                      <p className="text-green-950  lg:text-xl  font-medium">Manpower Supply</p>
                    </div>
                    <p className="text-green-950 text-justify   ">
                      We provided client D with a team of highly skilled IT professionals for a major project, resulting in timely completion and exceeding client expectations. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       

        <section className="  2xl:max-w-[80rem] xl:max-w-[60rem]  md:max-w-[55rem] mx-auto px-5 lg:text-lg text-sm 2xl:mt-[7.7rem] my-4 " >
          <div className=" grid grid-cols-1 text-center ">
            <div className="">
              <span className="text-green-950">Copyright © 2024 All Right Reserved by</span>
              <Link to='/'> <span className="text-yellow-700">OAKSEE. </span></Link>
              <span>
                Website Designed By <a href="http://arrowthought.com/" target="_blank"><span className="underline">Arrow Thought.</span></a>
              </span>
            </div>
          </div>
        </section>
      </HelmetProvider>
      <Line />
    </>
  );
}
export default Transition(SuccessStories);
