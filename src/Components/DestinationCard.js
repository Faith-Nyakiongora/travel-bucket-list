import React, { useState } from "react";
import { Link } from "react-router-dom";

function DestinationCard({ place, destination, addToBucketList }) {
  const { id, name, image_url, description, location, more } = place;

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
        {showDescription && (
          <p className="card-text">
            {description}
            {more}
            <button
              className="btn btn-sm btn-success"
              onClick={addToBucketList}
            >
              Add to bucketlist
            </button>
          </p>
        )}
        <p ClassName="card-text">{location}</p>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/destination/${id}`}>View Details</Link>
        {/* <button className="btn btn-sm btn-success">More details</button> */}
      </div>
    </div>
  );
}

export default DestinationCard;
