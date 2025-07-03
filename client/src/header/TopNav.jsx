import React from "react";
import "./header.css";

export default function TopNav() {
  return (
    <div className="topnav">
      <div className="topnav-wrapper">
        <a className="navbutton" href="/">
          {/* Replace with your logo.png in public/ or src/assets/ */}
          <img src="/logo.png" alt="Logo" />
        </a>
        <a className="navbutton textbutton" href="#aboutus">
          <p>Why Choose Us</p>
        </a>
        <a className="navbutton textbutton" href="#destinations">
          <p>Destinations</p>
        </a>
        <a className="navbutton textbutton" href="#activities">
          <p>Activities</p>
        </a>
        <a className="navbutton textbutton" href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
} 