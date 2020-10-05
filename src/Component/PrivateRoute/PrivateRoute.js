import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserDetails } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loginUser, setLoginUser] = useContext(UserDetails);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
