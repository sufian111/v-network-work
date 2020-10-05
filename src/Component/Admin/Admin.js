import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDetails } from "../../App";
import Userinfo from "../UserInfo/Userinfo";

const Admin = () => {
  const [loginUser, setLoginUser] = useContext(UserDetails);
  const [allRegistration, setAllRegistration] = useState([]);
  const [again, setAgain] = useState();
  useEffect(() => {
    fetch("https://mighty-journey-19202.herokuapp.com/admin")
      .then((response) => response.json())
      .then((data) => setAllRegistration(data));
  }, [again]);

  return (
    <div className="container">
      <div className="row mb-5 mt-3">
        <div className="col-md-10">
          <h3 style={{ textAlign: "center", color: "blue" }}>
            Control Your All Data
          </h3>
        </div>
        <div className="col-md-2">
          <Link to="/addEvent">
            <button className="btn btn-primary justify-content-center">
              Add Event
            </button>
          </Link>
        </div>
      </div>

      <div className="row d-flex justify-content-between">
        <col-md-4>
          <h5>Name:{loginUser.displayName}</h5>
        </col-md-4>
        <col-md-4>
          <h5>Email:{loginUser.email}</h5>
        </col-md-4>
      </div>
      {allRegistration.map((event) => (
        <Userinfo again={again} setAgain={setAgain} event={event}></Userinfo>
      ))}
    </div>
  );
};

export default Admin;
