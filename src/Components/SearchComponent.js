import React, { useState } from "react";
import DestinationCard from "./DestinationCard";

function Search({ destinations }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredDestinations = destinations.filter(
    (place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <DestinationCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}

export default Search;
