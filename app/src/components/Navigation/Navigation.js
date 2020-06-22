import React, { useState } from "react";
import NavToggle from "./NavToggle";
import "./Navigation.css";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navigation() {
  const [collapsed, setCollapse] = useState(true);
  const toggleNavbar = () => setCollapse(!collapsed);

  return (
    <Router>
      <nav className="nav">
        <div className="brand">Wave Suggester</div>

        <NavToggle />
      </nav>
    </Router>
  );
}

export default Navigation;
