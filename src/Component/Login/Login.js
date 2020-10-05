import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserDetails } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const [loginUser, setLoginUser] = useContext(UserDetails);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { email, displayName } = res.user;
        const details = { email, displayName };
        setLoginUser(details);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  return (
    <div className="container pt-5 d-flex justify-content-center">
      <Button onClick={handleGoogleLogin}>Google Login</Button>
    </div>
  );
};

export default Login;
