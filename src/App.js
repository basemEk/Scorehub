import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'


function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
         <Route exact path="/" element={<Home />} />    
      </Routes> 

      {/* <Footer />  */}
    </div>
  );
}

export default App;
