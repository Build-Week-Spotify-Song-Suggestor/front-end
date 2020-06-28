import React, { useState } from "react";
import NavToggle from "./NavToggle";
import "./Navigation.css";

// React Router
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navigation(props) {
  return (
    <nav className="nav">
      <div className="brand">
        <Link to="/">WaveS</Link>
      </div>
      <div className="nav-links">
        {props.isLoggedIn ? (
          <a>Log Out</a>
        ) : (
          <Link to="/register">Sign Up</Link>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Navigation);
