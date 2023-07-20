import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
  const [toggle,setToggle] = useState (false) 
  return (
    <div className="navbar" >
      <ul className="ul">
        <li className="li">
          <NavLink className="link" style={{textDecoration:"none"}} to='/' >Threads</NavLink>
        </li>
        <li className="li" >
          <NavLink className="link" style={{textDecoration:"none"}} to='replies' >Create post</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
