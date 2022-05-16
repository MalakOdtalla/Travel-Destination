import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Navbar from './Components/Navbar/Navbar';
import TourDetails from "./Components/TourDetails/TourDetails"



function App() {

  return (
    
 <>    
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      
      </Routes>
   
      
  </>
  );
}

export default App;
