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
      <section className="flex justify-center  2xl:px-5 xl:px-10 lg:px-16 2xl:max-w-[75rem] xl:max-w-[65rem] lg:max-w-[66rem]  items-center mx-auto h-[95vh]">
        <div className=" grid grid-cols-1 text-center lg:text-left   ">
          <div className=" 2xl:text-2xl text-xl">
            <span className="text-green-950 ">Welcome To </span>
            <span className="text-yellow-600 "> OOAKSEE LLC</span>
          </div>
          <div className="2xl:text-7xl text-4xl font-bold lg:p-0 px-10">
            <span className=" text-green-950 ">Your Partner In</span>
            <span className=" text-yellow-600"> IT Excellence</span>
          </div>
          <div>
          </div>
          <Link to='/services' onClick={scrollToTop}>
            <div className="animation lg:flex gap-2 lg:text-2xl text-xl  flex lg:justify-start lg:ml-0 md:ml-56 sm:ml-56 ml-[4.4rem]">
              <span>
                <img className="min-w-8 w-8 h-9 " src="/Images/Right Arrow.png" alt="rightarrow" /></span>
              <span className="text-green-950  whitespace-nowrap lg:mt-0 mt-1">See Our Services</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="  max-w-[80rem]  mx-auto px-5 lg:text-lg text-sm lg:my-0 my-3">
        <div className="lg:grid lg:grid-cols-1 grid grid-cols-1 text-center ">
          <div className="">
            <span className="text-green-950">Copyright © 2024 All Right Reserved by</span>
            <Link to='/'> <span className="text-yellow-700">OAKSEE. </span></Link>
            <span>
              Website Designed By <a href="http://arrowthought.com/" target="_blank"><span className="underline">Arrow Thought.</span></a>
            </span>
          </div>
        </div>
      </section>
      <Line />
    </>
  );
}
export default Transition(Home);
