import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'
import About from "./pages/About/About";
import OurFounder from "./pages/OurFounder/OurFounder";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseTimeLine from "./pages/CourseTimeLine/CourseTimeLine";
import PlansAndPrices from "./pages/PlansAndPrices/PlansAndPrices";
import Contact from "./pages/Contact/Contact";
import './components/Chatbot/Chatbot.css';
import SignUp from "./pages/SignUp/SignUp";
import Blog from "./pages/Blog/Blog";


function App() {
  return (
    <div className="rootComponent">
      <Navbar />
      
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/about-us" element={<About />} />
         <Route path="/our-founder" element={<OurFounder/>} />
         <Route path="/courses" element={<Courses />} />
         <Route path="/courses/course-details" element={<CourseDetails />} />
         <Route path="/courses/course-time-line" element={<CourseTimeLine />} />
         <Route path="/plans-prices" element={<PlansAndPrices />} />
         <Route path="/contact-us" element={<Contact />} />
         <Route path="/sign-up" element={<SignUp />} />
         <Route path="/blogs" element={<Blog />} />
      </Routes> 

      <Footer /> 
    </div>
  );
}

export default App;
