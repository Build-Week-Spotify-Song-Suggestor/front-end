import React, { useState } from "react";
import { Navbar, NavLink, NavbarBrand } from "reactstrap";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navigation() {
  const [collapsed, setCollapse] = useState(true);
  const toggleNavbar = () => setCollapse(!collapsed);

  return (
    <div>
      <Navbar color="info" light>
        <Router>
          <NavbarBrand href="/" className="mr-auto">
            Wave Suggester
          </NavbarBrand>
          <NavLink href="/SignUp/">Sign UP</NavLink>
        </Router>
      </Navbar>
    </div>
  );
}

export default Navigation;

