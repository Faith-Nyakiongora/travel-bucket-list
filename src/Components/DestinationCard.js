import React from "react";
import { Link } from "react-router-dom";

function DestinationCard({ place }) {
  const { id, name, image_url, description, location } = place;
  return (
    <div key={id} className="card col-4">
      <img src={image_url} className="card-img-top" alt=".." />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p ClassName="card-text">{location}</p>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-success">
          <Link to={`/place/${id}`} className="btn btn-sm btn-success">
            More Details
          </Link>
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;
