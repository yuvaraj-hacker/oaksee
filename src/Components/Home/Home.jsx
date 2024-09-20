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
      <section className="flex justify-center  2xl:px-5 xl:px-10 lg:px-16 2xl:max-w-[75rem] xl:max-w-[40rem] lg:max-w-[44rem]   height items-center mx-auto ">
        <div className=" grid grid-cols-1  lg:text-left px-10  ">
          <div className=" text-2xl ">
            <span className="text-green-950 ">Welcome To </span>
            <span className="text-yellow-600 "> OOAKSEE LLC</span>
          </div>
          <div className="lg:text-7xl text-3xl  font-bold">
            <span className=" text-green-950 ">Your Partner In</span>
            <span className=" text-yellow-600"> IT Excellence</span>
          </div>
          <div>
          </div>
          <Link to='/services' onClick={scrollToTop}>
            <div className="animation lg:flex gap-2 lg:text-2xl text-xl flex    ">
              <span>
                <img className="min-w-8 w-8 h-9 " src="/Images/Right Arrow.png" alt="rightarrow" /></span>
              <span className="text-green-950  whitespace-nowrap lg:mt-0 mt-1">See Our Services</span>
            </div>
          </Link>
        </div>
      </section>
     
      <Line />
    </>
  );
}
export default Transition(Home);
