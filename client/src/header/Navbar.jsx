import React from "react";
import "./header.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SeeTheWorld</div>
      <ul className="navbar-links">
        <li><a >Home</a></li>
        <li><a >Why Choose Us</a></li>
        <li><a >Destinations</a></li>
        <li><a >Activities</a></li>
        <li><a >Contacts</a></li>
      </ul>
    </nav>
  );
};