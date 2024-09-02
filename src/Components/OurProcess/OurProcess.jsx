import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import '../OurProcess/Process.css'


import Line from '../Line/Line';
import { HelmetProvider } from 'react-helmet-async';

import Transition from '../Transition/Transition';


function OurProcess() {
  
 

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Process</title>
      </Helmet>
    <div className="flex flex-wrap  justify-center lg:mt-32 lg:gap-3   items-center media  about  ">
        <div >
             <p   className="text-5xl text-green-950 lg:ml-2  mb-20">Our Process</p>
             <img   className="lg:w-[500px] lg:h-[500px] sized" src='/Images/process.jpg' alt='ourprocess'/>
        </div>
        <div        className="process ">
            <div className="lg:mt-16">
                <div className="flex "> 
                    <p className="text-8xl p-2 font-semibold text-gray-200">1</p>
                   <div className="p-7 mx-4">
                    <p className=" text-yellow-600 text-xl ">Discovery & Analysis</p>
                    <p className="text-green-950">We start by understanding your business needs, challenges, and goals. </p>
                   </div>
                </div>
                <div className="flex"> 
                <p className="text-8xl p-1 font-semibold text-gray-200">2</p>
                   <div className="p-7">
                    <p className=" text-yellow-600  text-xl">Strategy Development </p>
                    <p className="text-green-950">We create a customized IT strategy that aligns with your objectives. </p>
                   </div>
                </div>
                <div className="flex"> 
                <p className="text-8xl p-1 font-semibold text-gray-200">3</p>
                   <div className="p-7">
                    <p  className=" text-yellow-600  text-xl">Implementation</p>
                    <p className="text-green-950">We deploy the right solutions, ensuring a smooth transition with minimal disruption. </p>
                   </div>
                </div>
                <div className="flex"> 
                <p className="text-8xl  font-semibold text-gray-200">4</p>
                   <div className="p-7">
                    <p  className=" text-yellow-600  text-xl">Support & Maintenance</p>
                    <p className="text-green-950">We provide ongoing support to keep your IT infrastructure running smoothly and efficiently. </p>
                   </div>
                </div>
                
            </div>
          
        </div>
       
    </div>
    </HelmetProvider>
    
    <Line/>
    </>
  )
}

export default Transition(OurProcess);