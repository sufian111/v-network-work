import React, { useEffect, useState } from "react";
import AllEvnet from "../AllEvent/AllEvnet";

const Home = () => {
  const [evnets, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://mighty-journey-19202.herokuapp.com/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="container">
      {evnets.map((evnet) => (
        <AllEvnet event={evnet}></AllEvnet>
      ))}
    </div>
  );
};

export default Home;
