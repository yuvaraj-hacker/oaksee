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
      <section className="">
        <div className="flex justify-center height   items-center">
          <div className=" lg:px-0 px-10 ">
            <div className=" text-2xl ">
              <span className="text-green-950 ">Welcome To </span>
              <span className="text-yellow-600 "> OOAKSEE LLC</span>
            </div>
            <div className="2xl:text-7xl xl:text-6xl lg:text-5xl  md:text-5xl tracking-wider  text-3xl  font-semibold">
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
        </div>
      </section>
      <Line />
    </>
  );
}
export default Transition(Home);

