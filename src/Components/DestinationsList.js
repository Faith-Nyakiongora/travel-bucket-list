import React, { useEffect } from "react";
import DestinationCard from "./DestinationCard";

function DestinationList({ destination, setDestination }) {
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((data) => data.json())
      .then((data) => {
        setDestination(data);

        console.log(destination);
      });
  }, []);

  return (
    <div className="row">
      {destination.map((place) => (
        <DestinationCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default DestinationList;
