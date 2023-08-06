import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function DestinationCard({ place, destination, addToBucketList }) {
  const { id, name, image_url, location, more } = place;

  const [showDescription, setShowDescription] = useState(false);

  const handleCardClick = () => {
    setShowDescription(!showDescription);
  };
  // ;

  return (
    <div key={id} className="card col-4" onClick={handleCardClick}>
      <img src={image_url} className="card-img-top" alt=".." />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{location}</p>
        <p className="card-text">{description}</p>
        {showDescription && (
          <div>
            <p className="card-text">
              {place.description}
              {more}
              <br></br>
            </p>
            <button className="btn btn-sm btn-success">
              <Link to={`/destination/${id}`}>More Details</Link>
            </button>
          </div>
        )}
      </div>
      <div className="card-footer">
        <Button variant="primary" onClick={addToBucketList}>
          Add to bucketlist
        </Button>{" "}
      </div>
    </div>
  );
}

export default DestinationCard;
