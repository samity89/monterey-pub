import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import Food from "./food";
import Drinks from "./drinks";
import Contact from "./contact";


function App() {
  
  return ( 
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/drinks" element={<Drinks/>}/>
        <Route exact path="/food" element={<Food/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )}
  
  
  export default App;