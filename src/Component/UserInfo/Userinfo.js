import React from "react";

const Userinfo = (props) => {
  const { title, fullTime, _id, email } = props.event;
  const setAgain = props.setAgain;
  const again = props.again;
  const handleDelete = (id) => {
    fetch(`https://mighty-journey-19202.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === true) {
          alert(
            "Delete successfully.Delete item can show on display. Don't worry about it."
          );
          console.log("success");
          setAgain(again + 1);
        }
      });
  };
  return (
    <div
      style={{ border: "1px solid gray", marginTop: "10px" }}
      className="container"
    >
      <div className="row d-flex justify-content-between">
        <div className="col-md-5">
          <h2>{title} </h2>
          <h3>{fullTime} </h3>
          <h3>{email}</h3>
        </div>
        <div className="col-md-5">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-danger mt-3"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
