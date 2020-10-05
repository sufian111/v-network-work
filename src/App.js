import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddEvent from "./Component/AddEvent/AddEvent";
import Admin from "./Component/Admin/Admin";
import Error from "./Component/Error/Error";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Profile from "./Component/Profile/Profile";
import Registration from "./Component/Registration/Registration";

export const UserDetails = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <UserDetails.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <PrivateRoute path="/rg/:title">
            <Registration></Registration>
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserDetails.Provider>
  );
}

export default App;
