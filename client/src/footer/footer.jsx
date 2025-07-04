import React from "react";
import "./foot.css";
const Footer = () => {
  return (
    <footer>
<nav className="footer-nav">
        <a href="/contacts">Contacts</a>
        <a href="/destinations">Destinations</a>
        <a href="/why-us">Why Us</a>
        <a href="/activities">Activities</a>
      </nav>

<div className="footer-box">
      <p>&copy; {new Date().getFullYear()} See The World. All rights reserved.</p>
      </div>
    </footer>
  );
};



export default Footer;