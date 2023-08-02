// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
import SearchComponent from "./Components/SearchComponent";
import AddDestinationComponent from "./Components/AddDestinationComponent";

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <SearchComponent />
      <AddDestinationComponent />
      <div>
        <h1>Destinations:</h1>
        <ul>
          {destinations.map((destination) => (
            <li key={destination.id}>{destination.name}</li>
          ))}
        </ul>
      </div>

    </>
  );
}

export default App;
