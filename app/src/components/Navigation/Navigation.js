import React, { useState } from "react";
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import SignUp from "../Login/signUp";
import Login from "../Login/Login";

// React Router




function Navigation() {
  const [collapsed, setCollapse] = useState(true);
  const toggleNavbar = () => setCollapse(!collapsed);

  return (
    <>
      
      <Navbar color="info" light>
        <NavbarBrand href="/" className="mr-auto">Wave Suggester</NavbarBrand>
        <Link to= {'/signUp'}>
        <Button>Sign Up</Button>
        </Link>
       
      </Navbar>
     
      
     
        

      


    
 
    </>
      
  );
};

export default Navigation;
