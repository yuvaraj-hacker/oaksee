import React from "react";
import { Helmet } from "react-helmet";
import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";
import Transition from "../Transition/Transition";
import { Link } from "react-router-dom";
import '../About/About.css'


function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
        </Helmet>
        <section className="2xl:max-w-[75rem] xl:max-w-[64rem] lg:max-w-[66rem]   mx-auto heights 2xl:mt-36 xl:mt-32 mt-36  2xl:px-5 xl:px-14 lg:px-16 px-5 ">
          <div className="grid grid-cols-1  ">
            <div className="">
              <p className="lg:text-5xl text-4xl mb-5 text-green-950 z-50">About Us</p>
              <p className=" text-green-950 text-justify">
                Oaksee LLC is a premier IT consulting firm dedicated to delivering
                innovative and effective technology solutions. Our team of seasoned
                professionals brings a wealth of experience in various IT
                disciplines, ensuring your business harnesses the power of
                technology to achieve its goals.
              </p>
              <img className=" mt-5" src="Images/about.jpg" alt="about" />
            </div>
          </div>
        </section>
       
      </HelmetProvider>
      <Line />
    </>
  );
}
export default Transition(About);
