import { BrowserRouter, Route,  Routes, useLocation } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import About from "../Components/About/About";
import Why from "../Components/Why/Why";
import OurProcess from "../Components/OurProcess/OurProcess";
import SuccessStories from "../Components/SuccessStories/SuccessStories";
import ContactUs from "../Components/ContactUs/ContactUs";
import SideBar from "../Components/SideBar/SideBar";
import Line from "../Components/Line/Line";

import { AnimatePresence } from "framer-motion";
import Header from "../core/Header/Header";
import Footer from "../core/Footer/Footer";




function Approuter() {
    return (
        <BrowserRouter>
            <Header />
           <SideBar/>
           
           <Line/>
            <RouterContent /> 
        </BrowserRouter>
    );
}

function RouterContent() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/whychooseus" element={<Why />} />
                    <Route path="/ourprocess" element={<OurProcess />} />
                    <Route path="/successstories" element={<SuccessStories />} />
                    <Route path="/contact" element={<ContactUs />} />
            
                    
               
                    
                </Route>
               
               
               
            </Routes>
        </AnimatePresence>
    );
}

export default Approuter;