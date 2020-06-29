import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom"

// State Management
import { connect } from "react-redux";
import SignUp from "./components/Login/signUp";

function App({ name }) {
  return (
    <>
    
      <Navigation />
      <Switch>
      <Route exact path='/'>
      <Login />
      </Route>
      <Route>
      <SignUp/>
      </Route>
      </Switch>
      
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
  };
};

export default connect(mapStateToProps, {})(App);
