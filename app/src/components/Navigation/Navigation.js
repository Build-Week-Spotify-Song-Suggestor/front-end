import React, { useState } from "react";
import NavToggle from "./NavToggle";
import "./Navigation.css";

// React Router
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <div className="brand">Wave Suggester</div>
      <Link to="/register">Sign Up</Link>
    </nav>
  );
}

export default Navigation;
