import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DestinationList from "./Components/DestinationList";
import NavbarComp from "./Components/Navbar";
import AddDestination from "./Components/AddDestination.js";
import BucketList from "./Components/BucketList";
// import DestinationDetails from "./Components/DestinationDetails";
import "bootstrap/dist/css/bootstrap.min.css";
// import DestinationDetailsComponent from "./Components/DestinationDetailsComponent";
import { BucketListProvider } from "./Components/BucketListContext";
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
    fetch("http://localhost:3000/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDestination),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response or update your state if needed
        console.log("Destination added:", data);
      })
      .catch((error) => {
        console.error("Error adding destination:", error);
      });
  };

  return (
    <BucketListProvider>
      <div className="container">
        <NavbarComp />
        <h1>Destinations</h1>
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
              <BucketList
                bucketList={bucketList}
                setBucketList={setBucketList}
              />
            }
          />
          <Route
            path="/destination/:id"
            element={<DestinationDetailsComponent destinations={destination} />}
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
    </BucketListProvider>
  );
}

export default App;
