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
  const [formData, setFormData] = useState({
    username: "username",
    userEmail: "your@email.com",
  });
  const [emailList, setEmailList] = useState([])
  const initializeForm = {
    username: "username",
    userEmail: "your@email.com",
  }

  useEffect(() => {
    fetch("http://localhost:3001/menu")
    .then((response) => response.json())
    .then((data) => {
      setFood(data.food)
      setBeer(data.beer)
      setCocktails(data.cocktails)
    });
    fetch("http://localhost:3001/users")
    .then((response) => response.json())
    .then((data) => setEmailList(data))
  }, [])
  
  function handleUsernameChange(event) {
    setFormData({...formData, username: event.target.value});
  }

  function handleUserEmailChange(event) {
    setFormData({...formData, userEmail: event.target.value})
  }

  function handleAddUser (newUser) {
    setEmailList([...emailList, newUser])
  }

  function handleFormSubmit (event) {
    event.preventDefault()
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
        "username": formData.username,
        "userEmail": formData.userEmail
        })
      })
    .then((response) => response.json())
    .then((newUser) => handleAddUser(newUser))
    setFormData(initializeForm)
  }

  
  return ( 
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/drinks" element={<Drinks cocktails={cocktails} beer={beer} />}/>
        <Route exact path="/food" element={<Food {...food} />}/>
        <Route exact path="/contact" 
          element={<Contact 
            handleFormSubmit={handleFormSubmit} 
            formData={formData}
            handleUserEmailChange={handleUserEmailChange}
            handleUsernameChange={handleUsernameChange}
            emailList={emailList}
            />}/>
      </Routes>
    </div>
  )}
  
  export default App;