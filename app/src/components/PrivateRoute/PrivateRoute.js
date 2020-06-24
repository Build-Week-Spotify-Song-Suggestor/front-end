import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (rest.isLoggedIn ? <Component /> : <Redirect to="/login" />)}
  />
);

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);
