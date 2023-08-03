// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import DestinationList from "./Components/DestinationsList";

function App() {
  const [destination, setDestination] = useState([]);

  return (
    <div className="container">
      <h1>Destinations:</h1>

      <DestinationList
        destination={destination}
        setDestination={setDestination}
      />
    </div>
  );
}

export default App;
