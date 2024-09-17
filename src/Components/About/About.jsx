import React from "react";
import { Helmet } from "react-helmet";
import '../About/About.css';
import 'aos/dist/aos.css';
import Line from "../Line/Line";
import { HelmetProvider } from "react-helmet-async";
import Transition from "../Transition/Transition";
function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
        </Helmet>
        <section className="max-w-[78rem] mx-auto   2xl:px-5 xl:px-14 lg:px-16 px-5 ">
          <div className="grid grid-cols-1   ">
            <div className="">
              <p className="text-5xl mb-5 text-green-950 z-50">About Us</p>
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
        <section className="  max-w-[100rem] mx-auto px-5 lg:text-lg text-sm mt-28  my-4 " >
          <div className="lg:grid lg:grid-cols-2  grid grid-cols-1 text-center ">
            <div className="gap-2">
              <span className="text-green-950">Copyright © 2024 All Right Reserved by</span>
              <span className="text-yellow-700">OAKSEE</span>
            </div>
          </div>
        </section>
      
      </HelmetProvider>
      <Line />
    </>
  );
}
export default Transition(About);
