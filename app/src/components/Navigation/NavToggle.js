import React from "react";
import "./NavToggle.css";
// Router Links
import { Link } from "react-router-dom";

function NavToggle() {
  return (
    <nav>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
}

export default NavToggle;
