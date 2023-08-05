// import logo from './logo.svg';
// import './App.css';

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationList from "./Components/DestinationList";
import Navbar from "./Components/Navbar";
import Search from "./Components/SearchComponent";
import AddDestination from "./Components/AddDestination.js";
import DestinationDetailsComponent from "./Components/DestinationDetailsComponent";
import BucketList from "./Components/BucketList";
// import BucketListComponent from "./Components/BucketListComponent";

function App() {
  const [destination, setDestination] = useState([]);
  const [bucketList, setBucketList] = useState([]);

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
      <BucketList bucketList={bucketList} setBucketList={setBucketList} />
      {/* <Search destinations={destination} /> */}
      <DestinationList
        destination={destination}
        setDestination={setDestination}
        bucketList={bucketList}
        setBucketList={setBucketList}
      />
      <AddDestination addDestination={addDestination} />

      {/* <DestinationDetailsComponent destinations={destination} /> */}
    </div>
  );
}

export default App;
