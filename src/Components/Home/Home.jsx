import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import '../Home/Home.css';
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import Line from "../Line/Line";



function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-sine' });
  }, []);
  AOS.init();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="flex  flex-wrap justify-center items-center media   home lg:h-screen  ">
        <div>
          <div className="flex flex-wrap gap-2">
            <p className="text-green-950 text-2xl">Welcome To</p>
            <p className="text-yellow-600 text-2xl">OOAKSEE LLC</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="lg:text-7xl md:text-7xl text-green-950 font-bold size  size ">Your Partner In  </p>
            <p className="lg:text-7xl md:text-7xl font-bold   text-yellow-600  z-30 size">IT Excellence</p>
          </div>
          <Link to="/services" >
            <div className="flex flex-shrink-0 mt-3 gap-2 animation">
              <img className="min-w-8 w-8 h-9  " src="/Images/Right Arrow.png" alt="rightarrow" />
                <p className=" text-green-950 text-2xl  whitespace-nowrap">See Our Services</p>
              <div className="flex gap-2 text-green-950 text-2xl">
                
                {/* <div>
                  <span className="letter">S</span>
                  <span className="letter">e</span>
                  <span className="letter">e</span>
                </div>
                <div>
                  <span className="letter">O</span>
                  <span className="letter">u</span>
                  <span className="letter">r</span>
                </div>
                <div>
                  <span className="letter">S</span>
                  <span className="letter">e</span>
                  <span className="letter">r</span>
                  <span className="letter">v</span>
                  <span className="letter">i</span>
                  <span className="letter">c</span>
                  <span className="letter">e</span>
                  <span className="letter">s</span>
                </div> */}

              </div>

            </div>
          </Link>

        </div>



      </div>
      <SideBar />
      <Line />




    </>
  );
}

export default Home;
