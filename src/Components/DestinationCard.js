import React, { useState } from "react";

function DestinationCard({ place }) {
  const { id, name, image_url, description, location, more } = place;

  const [showDescription, setShowDescription] = useState(false);

  const handleCardClick = () => {
    setShowDescription(!showDescription);
  };

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
          </p>
        )}
        {showDescription && (
          <p className="card-text">
            {description}
            {more}
          </p>
        )}
      </div>
      <div className="card-footer">
        {/* <button className="btn btn-sm btn-success">More details</button> */}
      </div>
    </div>
  );
}

export default DestinationCard;
