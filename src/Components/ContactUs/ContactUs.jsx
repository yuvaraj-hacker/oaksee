import React  from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import '../ContactUs/Contact.css'

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
         <div className="flex flex-wrap lg:gap-28 md:gap-16  gap items-center justify-center h-screen media about  ">
            
            <div  className="   contact">
               <p className=" text-5xl mb-5 text-green-950">Contact </p>
               <div className="flex gap-1">
                  <p className="text-yellow-700 text-xl">Address:</p>
                  <p className="text-xl  text-green-950">1234 Elm Street, Suite 567, Anytown, USA</p>
               </div>
               <div className="flex gap-1">
                  <p className="text-yellow-700 text-xl">Email:</p>
                  <p className="text-xl text-green-950">info@oakseellc.com</p>
               </div>
               <div className="flex gap-1">
                  <p className="text-yellow-700 text-xl">Phone:</p>
                  <p className="text-xl text-green-950">+1 (555) 123-4567</p>
               </div>
               <div className="flex gap-1 mt-5">
             <Link to="https://in.linkedin.com/" >     <img className="w-8 h-8" src=' /Images/LinkedIn 2.png' alt='linkedin' /></Link> 
              <Link to="https://twitter.com/?lang=en"> <img className="w-8 h-8" src='/Images/TwitterX.png ' alt='twitter' /></Link> 
               <Link to="https://www.facebook.com/"><img className="w-8 h-8" src='/Images/Facebook F.png ' alt='facebook' />  </Link> 

               </div>
               <div className="mt-8">
                  <form>
                     <div className="border-b-2">
                        <input className="focus:outline-none" placeholder='Name' /><br />
                     </div>
                     <div className="border-b-2">
                        <input className="focus:outline-none border-none mt-5" placeholder='Email' /><br />
                     </div>
                     <div className="border-b-2">
                        <input className="focus:outline-none mt-5" placeholder='Subject' /><br />
                     </div>
                     <div className="border-b-2">
                        <input className=" mt-20  focus:outline-none   " placeholder='Message' /><br />
                     </div>
                     <button className="bg-green-950 text-white w-fit h-fit py-2 px-6 rounded-md mt-5 hover:bg-green-900"> Submit</button>
                  </form>
               </div>
              
            </div>
            <div >
            <iframe  className=" map  " src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3312.8844631949823!2d-117.55050800314665!3d33.86686832749506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1725017305347!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
           
         </div>
         </HelmetProvider>
       
         <Line/>
      </>
   )
}

export default Transition(ContactUs);