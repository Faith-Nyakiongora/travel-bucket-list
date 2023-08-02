// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
import BucketList from "./Components/BucketList";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div>
      <h1>Destinations:</h1>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id} onClick={() => handleDestinationClick(destination)}>
            {destination.name}
          </li>
        ))}
      </ul>
      {selectedDestination && (
        <div>
          <h2>{selectedDestination.name}</h2>
          <p>{selectedDestination.description}</p>
          <img src={selectedDestination.image_url} alt={selectedDestination.name} />
        </div>
      )}
      <BucketList />
    </div>
  );
}

export default App;
