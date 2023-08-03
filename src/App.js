// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationList from "./Components/DestinationsList";
import Navbar from "./Components/Navbar";

function App() {
  const [destination, setDestination] = useState([]);

  return (
    <div className="container">
      <Navbar />
      <h1>Destinations:</h1>
      <Routes>
        <Route
          path="/DestinationList"
          element={
            <DestinationList
              destination={destination}
              setDestination={setDestination}
            />
          }
        />
        {/* Add other routes if needed */}
      </Routes>
    </div>
  );
}

export default App;
