import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/food">Food</NavLink>
    <NavLink exact to="/drinks">Drinks</NavLink>
    <NavLink exact to="/contact">Contact Us</NavLink>
  </div>
)}

export default NavBar;
