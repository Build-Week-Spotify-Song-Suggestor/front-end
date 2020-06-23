import React from "react";
import "./NavToggle.css";
// Router Links
import { Link } from "react-router-dom";

function NavToggle() {
  return (
    <>
      <div className="nav-toggle">
        <span className="patty"></span>
        <span className="patty"></span>
        <span className="patty"></span>
      </div>
      <div className="links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/about">About</Link>
      </div>
    </>
  );
}

export default NavToggle;
