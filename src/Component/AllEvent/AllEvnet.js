import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllEvnet = (props) => {
  const { id, img, title } = props.event;

  return (
    <Card className="d-inline-flex m-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Link to={"/rg/" + title}>
          <Button variant="primary">Registration</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default AllEvnet;
