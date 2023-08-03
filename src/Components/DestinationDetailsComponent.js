import React from "react";

const DestinationDetails = ({ place }) => {
  return (
    <div>
      <h2>{place.name}</h2>
      <img src={place.image_url} alt={place.name} />
      <p>{place.description}</p>
      <p>{place.location}</p>
      <p>{place.more}</p>
    </div>
  );
};

export default DestinationDetails;
