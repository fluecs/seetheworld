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
      </div>
    </div>
  );
} 