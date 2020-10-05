import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { UserDetails } from "../../App";
const Registration = () => {
  const { title } = useParams();
  const [userBio, setUserBio] = useState({});
  const [eventTime, setEventTime] = useState({});
  const [eventTitle, setEventTitle] = useState({ title });
  const history = useHistory();
  const handleBio = (e) => {
    const fullBio = e.target.value;
    const bio = { fullBio };
    setUserBio(bio);
  };
  const hadleTime = (e) => {
    const fullTime = e.target.value;
    const time = { fullTime };
    setEventTime(time);
  };
  const handleSubmit = () => {
    const information = {
      ...userBio,
      ...loginUser,
      ...eventTime,
      ...eventTitle,
    };

    fetch("https://mighty-journey-19202.herokuapp.com/addRegistration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(information),
    });
    history.push("/profile");
  };
  const [loginUser, setLoginUser] = useContext(UserDetails);

  return (
    <div className="container">
      <Form>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>User</Form.Label>
          <Form.Control
            type="text"
            value={loginUser.displayName}
            placeholder="User name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={loginUser.email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            onBlur={hadleTime}
            type="text"
            placeholder="enter Date"
          />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onBlur={handleBio}
            type="text"
            value="I am a hard working person."
            placeholder="write something about you"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEventName">
          <Form.Label>Event</Form.Label>
          <Form.Control type="text" value={title} placeholder="Event Name" />
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Registration;
