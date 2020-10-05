import React, { useContext, useEffect, useState } from "react";
import { UserDetails } from "../../App";
import Userinfo from "../UserInfo/Userinfo";

const Profile = () => {
  const [loginUser, setLoginUser] = useContext(UserDetails);
  const [myEvent, setMyEvent] = useState([]);
  const [again, setAgain] = useState();
  useEffect(() => {
    fetch(
      "https://mighty-journey-19202.herokuapp.com/myEvents?email=" +
        loginUser.email
    )
      .then((response) => response.json())
      .then((data) => setMyEvent(data));
  }, [again]);

  console.log(myEvent);
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <col-md-4>
          <h5>Name:{loginUser.displayName}</h5>
        </col-md-4>
        <col-md-4>
          <h5>Email:{loginUser.email}</h5>
        </col-md-4>
      </div>
      <h2 style={{ textAlign: "center", color: "blue" }}>
        You are registration : {myEvent.length} events
      </h2>
      <div>
        {myEvent.map((event) => (
          <Userinfo again={again} setAgain={setAgain} event={event}></Userinfo>
        ))}
      </div>
    </div>
  );
};

export default Profile;
