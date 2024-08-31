import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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
import SideBars from "../Components/SideBars/SideBars";

export default function Approuter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  element={<Main/>}  >
                       <Route path="/" element={<Home/> }/>
                       <Route path="/services" element={<Services/> }/>
                       <Route path="/About" element={<About/> }/>
                       <Route path="/whychooseus" element={<Why/> }/>
                       <Route path="/ourprocess" element={<OurProcess/> }/>
                       <Route path="/successstories" element={<SuccessStories/> }/>
                       <Route path="/contact" element={<ContactUs/> }/>
                     
                         
                    </Route >
                    <Route path="/sidebar" element={<SideBar/> }/>
                    <Route path="line" element={<Line/> }/>
                    <Route path="/sidebars" element={<SideBars/> }/>
                </Routes>
            </BrowserRouter>
        </>
    )
}