import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import Tours from './Components/Tours/Tours';



function App() {

  return (
    
 <>
 
      
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
      <Home/>
    </>
  );
}

export default App;
