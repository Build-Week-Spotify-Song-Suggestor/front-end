import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Dashboard from "./components/Dashboard/Dashboard";

// State Management
import { connect } from "react-redux";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App({ isLoggedin }) {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <PrivateRoute component={Dashboard} isLoggedin={isLoggedin} />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Signup />
        </Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.user.isLoggedin,
  };
};

export default connect(mapStateToProps, {})(App);
