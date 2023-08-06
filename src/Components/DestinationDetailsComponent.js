import React from "react";
import { useParams } from "react-router-dom";

function DestinationDetailsComponent({ destinations }) {
  const { id } = useParams();
  const destination = destinations.find((place) => place.id === parseInt(id));

  if (!destination) {
    return <div>Destination not found.</div>;
  }

  const {
    name,
    description,
    location,
    more,
    best_time_to_visit,
    traveling_tips,
    attractions,
  } = destination;

  return (
    <div
      className="container mt-4"
      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
    >
      <h2 className="display-4 mb-4">{name}</h2>
      <h4 className="mb-3" style={{ color: "brown" }}>
        Location: {location}
      </h4>
      <div className="card bg-light">
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">{more}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4 style={{ color: "brown" }}>Best Time To Visit</h4>
            <p>{best_time_to_visit}</p>
          </li>
          <li className="list-group-item">
            <h4 style={{ color: "brown" }}>Traveling Tips</h4>
            <p>{traveling_tips}</p>
          </li>
          <li className="list-group-item">
            <h4 style={{ color: "brown" }}>Popular Attractions</h4>
            <p>{attractions}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DestinationDetailsComponent;
