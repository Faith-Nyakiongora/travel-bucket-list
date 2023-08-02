import React from "react";
import DestinationCard from "./DestinationCard";

function DestinationDetails({ place }) {
  const { id, name, image_url, description, location } = place;

  return (
    <div className="row">
      {destination.map((place) => (
        <DestinationCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default DestinationDetails;
