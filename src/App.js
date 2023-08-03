// import logo from './logo.svg';
// import './App.css';

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationList from "./Components/DestinationsList";
import Navbar from "./Components/Navbar";
import Search from "./Components/SearchComponent";
import AddDestination from "./Components/AddDestination.js";
import BucketList from "./Components/BucketListComponent";
import DestinationDetails from "./Components/DestinationDetailsComponent";

function App() {
  const [destination, setDestination] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((data) => setDestination(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const addDestination = (newDestination) => {
    // Assuming the server generates the ID, set a temporary ID for the new destination
    const tempId = destination.length + 1;
    const updatedDestinations = [
      ...destination,
      { ...newDestination, id: tempId },
    ];
    setDestination(updatedDestinations);
  };

  return (
    <div className="container">
      <Navbar />
      <h1>Travel Bucketlist</h1>
      <Search destinations={destination} />
      <AddDestination addDestination={addDestination} />
      <BucketList />
      <Routes>
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/bucketlist/:id" element={<DestinationDetails />} />
        <Route
          path="/DestinationList"
          element={
            <DestinationList
              destination={destination}
              setDestination={setDestination}
            />
          }
        />
        <Route path="/Home" />
      </Routes>
    </div>
  );
}

export default App;
