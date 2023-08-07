import React from "react";
import { useNavigate } from "react-router-dom";

function DestinationDetails({ place }) {

    const navigate = useNavigate()

  return (
    <div>
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <img src={place.image_url} alt={place.name} />
      {/* Add more inaformation here if needed */}
    </div>
  );
}

export default DestinationDetails;
