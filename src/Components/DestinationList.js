import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "./DestinationCard";

function DestinationList({
  destination,
  setDestination,
  bucketList,
  setBucketList,
}) {
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((data) => data.json())
      .then((data) => {
        setDestination(data);
      });
  }, []);

  function addToBucketList(place) {
    if (!bucketList.some((addDestination) => addDestination.id === place.id)) {
      setBucketList((bucketList) => [...bucketList, place]);
    }
  }

  return (
    <div className="row">
      {destination.map((place) => (
        <DestinationCard
          key={place.id}
          place={place}
          addToBucketList={() => addToBucketList(place)}
          // addToBucketList={addToBucketList} // Make sure you are passing it here as well
        />
      ))}
    </div>
  );
}

export default DestinationList;
