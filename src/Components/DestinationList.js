import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "./DestinationCard";

function DestinationList({
  destination,
  setDestination,
  bucketList,
  setBucketList,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((data) => data.json())
      .then((data) => {
        setDestination(data);
      });
  }, []);

  useEffect(() => {
    const filteredPlaces = destination.filter(
      (place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDestinations(filteredPlaces);
  }, [destination, searchTerm]);

  function addToBucketList(place) {
    if (!bucketList.some((addDestination) => addDestination.id === place.id)) {
      setBucketList((bucketList) => [...bucketList, place]);
    }
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="row">
        {filteredDestinations.map((place) => (
          <DestinationCard
            key={place.id}
            place={place}
            addToBucketList={() => addToBucketList(place)}
          />
        ))}
      </div>
    </div>
  );
}

export default DestinationList;