import React, { useState } from "react";
import NavToggle from "./NavToggle";
import "./Navigation.css";

// React Router
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <div className="brand">
        <Link to="/">WaveS</Link>
      </div>
      <div className="nav-links">
        <Link to="/register">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navigation;
