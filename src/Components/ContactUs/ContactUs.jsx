import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import Line from '../Line/Line'
import { HelmetProvider } from 'react-helmet-async'
import Transition from '../Transition/Transition';
function ContactUs() {
   return (
      <>
         <HelmetProvider>
            <Helmet>
               <meta charSet="utf-8" />
               <title>ContactUs</title>
            </Helmet>
            <div className="2xl:max-w-[73rem] xl:max-w-[65rem] lg:max-w-[65rem] 2xl:mb-0 xl:mb-10  mx-auto   heights 2xl:mt-36 xl:mt-32 mt-36  2xl:px-5 xl:px-14 lg:px-16 px-5    ">
               <div className='grid grid-cols-1 '>
                  <p className=" lg:text-5xl text-4xl   text-green-950 mb-5 lg:text-left md:text-left text-center ">Contact </p>
                  <div className='lg:grid lg:grid-cols-6  '>
                     <div className=" col-span-3  ">
                        <div className="grid grid-cols-6 2xl:space-x-0  space-x-5">
                           <p className="text-yellow-700 lg:text-xl text-lg col-span-1 ">Address</p>
                           <p className="2xl:text-xl xl:lg  text-green-950 col-span-5">: 4587 Scenic Vista Dr
                           Folsom,  <br /> <span className='ml-3'> CA 95630</span></p>
                        </div>
                        <div className="grid grid-cols-6  2xl:space-x-0  space-x-5 ">
                           <p className="text-yellow-700 lg:text-xl text-lg col-span-1">Email</p>
                           <p className="2xl:text-xl xl:lg  text-green-950 col-span-4">: info@oaksee.net</p>
                        </div>
                        <div className="grid grid-cols-6  2xl:space-x-0  space-x-5 ">
                           <p className="text-yellow-700 lg:text-xl text-lg col-span-1">Phone</p>
                           <p className="2xl:text-xl xl:lg text-green-950 col-span-4">: 804-349-4836</p>
                        </div>
                        <div className="flex gap-1 mt-5">
                           <a href='https://in.linkedin.com/' target='_blank' >  <img className="w-8 h-8" src=' /Images/LinkedIn 2.png' alt='linkedin' /> </a>
                           <a href='https://twitter.com/?lang=en' target='_blank' ><img className="w-8 h-8" src='/Images/TwitterX.png ' alt='twitter' /> </a>
                           <a href='https://www.facebook.com/' target='_blank' ><img className="w-8 h-8" src='/Images/Facebook F.png ' alt='facebook' />  </a>

                        </div>
                        <div className="mt-10">
                           <form className='pr-5 space-y-8'>
                              <div className="">
                                 <input className="focus:outline-none w-full border-b-2" placeholder='Name' /><br />
                              </div>
                              <div className="">
                                 <input className="focus:outline-none w-full border-b-2" placeholder='Email' /><br />
                              </div>
                              <div className="">
                                 <input className="focus:outline-none w-full border-b-2" placeholder='Subject' /><br />
                              </div>
                              <div className="">
                                 <textarea className="  w-full   border-b-2  focus:outline-none" rows={4} placeholder='Message' /><br />
                              </div>
                              <div className='flex justify-center'>
                                 <button className="bg-green-950 text-white w-fit h-fit py-2 px-6 rounded-md mt-5  hover:bg-green-900"> Submit</button>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="  col-span-3  lg:mt-0 mt-5"     >
                        <iframe className=" w-full h-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3312.8844631949823!2d-117.55050800314665!3d33.86686832749506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1725017305347!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </HelmetProvider>
         <Line />
      </>
   )
}
export default Transition(ContactUs);