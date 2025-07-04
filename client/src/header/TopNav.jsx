import React from "react";
import { Link } from "react-router-dom";
import "./header.css";


export default function TopNav() {
  return (
    <div className="topnav">
      <div className="topnav-wrapper">
        <Link className="navbutton" to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <Link className="navbutton textbutton" to="#aboutus">
          <p>Why Choose Us</p>
        </Link>
        <Link className="navbutton textbutton" to="#destinations">
          <p>Destinations</p>
        </Link>
        <Link className="navbutton textbutton" to="#activities">
          <p>Activities</p>
        </Link>
        <Link className="navbutton textbutton" to="#contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
} 