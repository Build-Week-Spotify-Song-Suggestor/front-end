import React from "react";
import "./App.css";

// State Management
import { connect } from "react-redux";

function App({ name }) {
  return <div className="App" data-testid="username">{`Hey, ${name}!`}</div>;
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
  };
};

export default connect(mapStateToProps, {})(App);
