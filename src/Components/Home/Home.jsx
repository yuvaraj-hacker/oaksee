import React from "react";
import { Helmet } from "react-helmet";
import '../Home/Home.css';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import Line from "../Line/Line";
import Transition from "../Transition/Transition";
function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <section className="flex justify-center  2xl:px-5 xl:px-10 lg:px-16  max-w-[120rem]  items-center mx-auto h-[95vh]">
        <div className=" grid grid-cols-1 text-center lg:text-left   ">
          <div className=" lg:text-2xl text-lg">
            <span className="text-green-950 ">Welcome To </span>
            <span className="text-yellow-600 "> OOAKSEE LLC</span>
          </div>
          <div className="lg:text-7xl text-4xl font-bold">
            <span className=" text-green-950 ">Your Partner In</span>
            <span className=" text-yellow-600"> IT Excellence</span>
          </div>
          <div>
            
          </div>
          <Link to='/services'  onClick={scrollToTop}>
            <div className="animation flex gap-2 lg:text-2xl text-xl lg:ml-0 ml-16  ">
              <span>
                <img className="min-w-8 w-8 h-9 " src="/Images/Right Arrow.png" alt="rightarrow" /></span>
              <span className="text-green-950  whitespace-nowrap lg:mt-0 mt-1">See Our Services</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="  max-w-[100rem] mx-auto px-5 lg:text-lg text-sm">
        <div className="lg:grid lg:grid-cols-2  grid grid-cols-1 text-center ">
          <div className="gap-2">
            <span className="text-green-950">Copyright © 2024 All Right Reserved by</span>
            <span className="text-yellow-700">OAKSEE</span>
          </div>
        </div>
      </section>
      <Line />
    </>
  );
}
export default Transition(Home);
