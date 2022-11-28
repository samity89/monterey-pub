import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import Food from "./food";
import Drinks from "./drinks";
import Contact from "./contact";


function App() {
  const [food, setFood] = useState([])
  const [cocktails, setCocktails] = useState([])
  const [beer, setBeer] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/menu")
    .then((response) => response.json())
    .then((data) => {
      setFood(data.food)
      setBeer(data.beer)
      setCocktails(data.cocktails)
    })}, [])
  
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