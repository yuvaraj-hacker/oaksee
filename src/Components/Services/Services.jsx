import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import 'aos/dist/aos.css';
import Line from '../Line/Line';
import { HelmetProvider } from 'react-helmet-async';
import Transition from '../Transition/Transition';
import { Link } from 'react-router-dom';
function Services() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>services</title>
                </Helmet>
                <section className="2xl:max-w-[73rem] xl:max-w-[65rem] lg:max-w-[64rem]  heights 2xl:mt-36 xl:mt-32 mt-36  mx-auto 2xl:px-5 xl:px-14 lg:px-16 px-5">
                    <div className="grid grid-cols-1   ">
                        <div className="">
                            <p className="lg:text-5xl text-4xl lg:text-left text-center  mb-5 text-green-950 z-50">Services</p>
                            <div className='space-y-4'>
                                <div className="     hover:border hover:shadow-md bg-white border hover:shadow-yellow-100  z-40 lg:p-2   hover:scale-105 transition-transform duration-300 ease-in-out   mx-auto    lg:grid  lg:grid-cols-4        ">
                                    <div className=" z-40     border-0  bg-green-950  2xl:text-xl text-lg items-center  lg:py-0 py-5 flex justify-center text-yellow-500">
                                        IT Strategy & Consulting
                                    </div>
                                    <div className="text-justify z-40  col-span-3  2xl:text-base xl:text-sm px-5 lg:py-0 py-3">
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950   z-40"> Digital transformation: Guiding your business through the process of digital evolution.<br /></p>
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
                                <div className="   lg:grid  lg:grid-cols-4    hover:border hover:shadow-md bg-white border hover:shadow-yellow-100  z-40 lg:p-2  2xl:py-0  hover:scale-105 transition-transform duration-300 ease-in-out      mx-auto   ">
                                    <div className=" z-40     border-0  bg-green-950   2xl:text-xl text-lg  items-center   2xl:py-0  xl:py-9 py-5 flex justify-center  text-yellow-500">
                                        Cybersecurity Solutions
                                    </div>
                                    <div className="text-justify z-40  2xl:text-base xl:text-sm col-span-3 px-5 lg:py-0  2xl:mt-0 mt-5 py-3">
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950   z-40">  Risk Assessment: identifying vulnerabilities and implementing robust security measures. <br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">  Compliance Management: Ensuring adherence to industry standards and regulations.<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">   Incident response: Rapidly addressing and mitigating security breaches.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="  lg:grid  lg:grid-cols-4    hover:border hover:shadow-md bg-white border hover:shadow-yellow-100  z-40 lg:p-2    hover:scale-105 transition-transform duration-300 ease-in-out     mx-auto   ">
                                    <div className=" z-40     border-0  bg-green-950   2xl:text-xl text-lg items-center  2xl:py-0 xl:py-8 py-5  flex justify-center     text-yellow-500">
                                        Cloud Services
                                    </div>
                                    <div className="text-justify z-40  2xl:text-base lg:text-sm col-span-3 px-5 lg:py-0 py-3 2xl:mt-0 mt-1">
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950   z-40">  Cloud migration: Seamlessly moving your data and applications to the cloud. <br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">    Cloud Management: Providing ongoing support and optimization for cloud environments.<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">   Hybrid Solutions: Integrating cloud services with existing on-premises infrastructure.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="  lg:grid  lg:grid-cols-4    hover:border hover:shadow-md bg-white border hover:shadow-yellow-100  z-40 lg:p-2  hover:scale-105 transition-transform duration-300 ease-in-out       mx-auto   ">
                                    <div className=" z-40     border-0  bg-green-950   2xl:text-xl text-lg  items-center  2xl:py-0 xl:py-9 py-5  flex justify-center  text-yellow-500">
                                        Managed IT Services
                                    </div>
                                    <div className="text-justify z-40  2xl:text-base lg:text-sm col-span-3 px-5 lg:py-0 py-3 2xl:mt-0 mt-5">
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950   z-40">   24/7 IT Support: Offering around-the-clock technical assistance.<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">     Network Management: Monitoring and maintaining network performance.<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">    Data Backup & Recovery: Ensuring data integrity and availability in case of disasters.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="  lg:grid  lg:grid-cols-4     hover:border hover:shadow-md bg-white border hover:shadow-yellow-100  z-40 lg:p-2  hover:scale-105 transition-transform duration-300 ease-in-out       mx-auto   ">
                                    <div className=" z-40     border-0  bg-green-950   2xl:text-xl text-lg  items-center   2xl:py-0 xl:py-9 py-5 flex justify-center    text-yellow-500">
                                        Software Development
                                    </div>
                                    <div className="text-justify z-40  2xl:text-base lg:text-sm col-span-3 px-5 lg:py-0 py-3 2xl:mt-0 mt-2">
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950   z-40">    Custom Applications: Developing tailored software solutions to meet specific business needs.<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">    System Integration: Connecting disparate systems for seamless operations.<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">    Mobile App Development: Creating engaging and functional mobile applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="  lg:grid  lg:grid-cols-4    hover:border hover:shadow-md bg-white border hover:shadow-yellow-100  z-40 lg:p-2   hover:scale-105 transition-transform duration-300 ease-in-out      mx-auto   ">
                                    <div className=" z-40     border-0  bg-green-950   2xl:text-xl text-lg  items-center  lg:py-0 py-5  flex justify-center  text-yellow-500">
                                        Manpower Supply
                                    </div>
                                    <div className="text-justify z-40  2xl:text-base lg:text-sm col-span-3 px-5 lg:py-0 py-3">
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950   z-40">  Qualified IT Professionals: Providing skilled IT personnel to meet your project needs.<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40 tracking-tight">Temporary & Permanent Staffing: Offering flexible staffing solutions to suit your business requirements .<br /></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img className="w-2 h-2 mt-2" src='/Images/green.png' alt='fullstop' />
                                            <p className="text-green-950 z-40">     Talent Management: Ensuring the right fit for your company culture and technical needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </HelmetProvider>
            <Line />
        </>
    )
}
export default Transition(Services);
