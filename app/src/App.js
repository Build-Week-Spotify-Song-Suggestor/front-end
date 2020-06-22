import React from "react";
import "./App.css";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

// State Management
import { connect } from "react-redux";

function App({ name }) {
  return <Login />;
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
  };
};

export default connect(mapStateToProps, {})(App);
