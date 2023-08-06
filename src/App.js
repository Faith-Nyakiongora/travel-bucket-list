import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DestinationList from "./Components/DestinationList";
import NavbarComp from "./Components/Navbar";
import AddDestination from "./Components/AddDestination.js";
import BucketList from "./Components/BucketList";
import "bootstrap/dist/css/bootstrap.min.css";
import DestinationDetailsComponent from "./Components/DestinationDetailsComponent";

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
      <NavbarComp />
      <h1>Travel Bucketlist</h1>
      <Routes>
        <Route
          path="/"
          element={
            <DestinationList
              destination={destination}
              setDestination={setDestination}
              bucketList={bucketList}
              setBucketList={setBucketList}
            />
          }
        />
        <Route
          path="/bucketlist"
          element={
            <BucketList bucketList={bucketList} setBucketList={setBucketList} />
          }
        />
        <Route
          path="/adddestination"
          element={<AddDestination addDestination={addDestination} />}
        />
        <Route
            path="/destination/:id"
            element={<DestinationDetailsComponent destinations={destination} />}
          />
        
      </Routes>
    </div>
  );
}

export default App;
