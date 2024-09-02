import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import '../Services/Services.css'

import 'aos/dist/aos.css';
import Line from '../Line/Line';
import { HelmetProvider } from 'react-helmet-async';

import Transition from '../Transition/Transition';

function Services() {
   
   
    return (
        <>
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>services</title>
            </Helmet>
          
           <div className= "lg:h-screen top flex justify-center  media items-center   about" >

          
            <div className="flex  flex-col justify-center   gap-3 service  ">
                <div>
                   
                    <h1 className="text-green-950   text-5xl z-40  lg:mt-14"> Services</h1>
                  
                </div>

                <div  className="  lg:w-[1200px] service-section  items-center hover:border hover:shadow-md bg-white border hover:shadow-yellow-100  md:w-[600px] sm:[150px] z-40    mx-auto flex flex-wrap    flex-1  gap-10 lg:p-4 md:p-2 ">

                    <div className="lg:w-[260px] md:[200px] h-fit z-40  resize   border-0  bg-green-950 p-5 text-lg text-yellow-500">
                        IT Strategy & Consulting
                    </div>
                    <div className="text-justify z-40 strategy">
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950  z-40"> Digital transformation: Guiding your business through the process of digital evolution.<br /></p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950 z-40"> IT Roadmap Development: Crafting strategic plans that align IT initiatives with business objectives. <br /></p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950 z-40">   Technology Assessment: Evaluating current systems and recommending improvements.</p>
                        </div>





                    </div>
                </div>
              
                <div    className="lg:w-[1200px]  items-center z-40 border  hover:border hover:shadow-md bg-white hover:shadow-yellow-100 md:w-[600px] sm:[150px]  h-fit  mx-auto flex  flex-wrap flex-1  gap-10 lg:p-4 md:p-2 ">
                    <div className="lg:w-[260px] md:[200px] h-fit  border-0 resize   bg-green-950 p-5 text-lg text-yellow-500">
                        Cybersecurity Solutions
                    </div>
                    <div className="text-justify strategy">
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">   Risk Assessment: identifying vulnerabilities and implementing robust security measures.  <br /></p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">    Compliance Management: Ensuring adherence to industry standards and regulations. <br /></p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">    Incident response: Rapidly addressing and mitigating security breaches.</p>
                        </div>



                    </div>
                </div>
              
                <div  className="lg:w-[1200px]  items-center border  hover:border hover:shadow-md bg-white hover:shadow-yellow-100 z-40 md:w-[600px] sm:[150px]  h-fit  mx-auto flex flex-wrap  flex-1  gap-10 lg:p-4 md:p-2 ">
                    <div className="lg:w-[260px] md:[200px] h-fit  border-0  resize  bg-green-950 p-5 text-lg text-yellow-500">
                        Cloud Services
                    </div>
                    <div className="text-justify  strategy ">
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">     Cloud migration: Seamlessly moving your data and applications to the cloud.<br /></p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">     Cloud Management: Providing ongoing support and optimization for cloud environments.<br /></p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Hybrid Solutions: Integrating cloud services with existing on-premises infrastructure.</p>
                        </div>

                    </div>
                </div>
                <div  className="lg:w-[1200px]  items-center border  hover:border hover:shadow-md bg-white hover:shadow-yellow-100  z-40 md:w-[600px] sm:[150px]  h-fit   mx-auto flex  flex-wrap   flex-1  gap-10 lg:p-4 md:p-2 ">
                    <div className="lg:w-[260px] md:[200px] h-fit  border-0 resize   bg-green-950 p-5 text-lg text-yellow-500">
                        Managed IT Services
                    </div>
                    <div className="text-justify  strategy">
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                24/7 IT Support: Offering around-the-clock technical assistance.</p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Network Management: Monitoring and maintaining network performance.</p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Data Backup & Recovery: Ensuring data integrity and availability in case of disasters.</p>
                        </div>
                    </div>
                </div>
                <div    className="lg:w-[1200px]  items-center  border hover:border  hover:shadow-md bg-white hover:shadow-yellow-100 z-40 md:w-[600px] sm:[150px]  h-fit mx-auto flex flex-wrap  flex-1  gap-10 lg:p-4 md:p-2 ">
                    <div className="lg:w-[260px] md:[200px] h-fit  border-0  resize  bg-green-950 p-5 text-lg text-yellow-500">
                        Software Development
                    </div>
                    <div className="text-justify  strategy">
                        <div className="flex gap-2 ">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Custom Applications: Developing tailored software solutions to meet specific business needs.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                System Integration: Connecting disparate systems for seamless operations.</p>
                        </div>
                        <div className="flex gap-2 ">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Mobile App Development: Creating engaging and functional mobile applications.</p>
                        </div>
                    </div>
                </div>
                <div  className="lg:w-[1200px]  items-center  border hover:border hover:shadow-md bg-white hover:shadow-yellow-100 z-40 md:w-[600px] sm:[150px]  h-fit  mx-auto flex flex-wrap  flex-1  gap-10 lg:p-4 md:p-2 ">
                    <div className="lg:w-[260px] md:[200px] h-fit  border-0  resize  bg-green-950 p-5 text-lg text-yellow-500">
                        Manpower Supply
                    </div>
                    <div className="text-justify  strategy">
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Qualified IT Professionals: Providing skilled IT personnel to meet your project needs.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Temporary & Permanent Staffing: Offering flexible staffing solutions to suit your business requirements.</p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                            <p className="text-green-950">
                                Talent Management: Ensuring the right fit for your company culture and technical needs.</p>
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

export default Transition(Services);
