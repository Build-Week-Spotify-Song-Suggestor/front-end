import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Navigation() {
  const [collapsed, setCollapse] = useState(true);
  const toggleNavbar = () => setCollapse(!collapsed);

  return (
    <Navbar color="info" light>
      <NavbarBrand>Wave Suggester</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
