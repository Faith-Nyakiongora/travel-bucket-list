import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        {showDescription && (
          <p className="card-text">
            {place.description}
            {more}
            <br></br>
            <Link to={`/destination/${id}`}>More Details</Link>
          </p>
        )}
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-success" onClick={addToBucketList}>
          Add to bucketlist
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;
