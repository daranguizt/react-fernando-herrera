import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRouter = ({
  isLoggedIn,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

PrivateRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
