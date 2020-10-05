import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

const AddEvent = () => {
  const [eventName, setEventName] = useState({});
  const [imgUrl, setImageUrl] = useState({});
  const hadleEventName = (e) => {
    const title = e.target.value;
    const fullName = { title };
    setEventName(fullName);
  };
  const handleImageUrl = (e) => {
    const img = e.target.value;
    const fullUrl = { img };
    setImageUrl(fullUrl);
  };
  const history = useHistory();
  const handleSubmit = () => {
    const information = { ...eventName, ...imgUrl };

    fetch("https://mighty-journey-19202.herokuapp.com/addEvent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(information),
    });
    history.push("/admin");
  };

  return (
    <div className="container">
      <Form>
        <Form.Group controlId="formBasicEventName">
          <Form.Label>Event</Form.Label>
          <Form.Control
            onBlur={hadleEventName}
            type="text"
            placeholder="Event Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control type="text" placeholder="enter Date" />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            onBlur={handleImageUrl}
            placeholder="please your image url write here"
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default AddEvent;
