
import React, { useState } from 'react'
import DestinationList from './Components/DestinationsList'
// import Navbar from './Components/Navbar';
import SearchComponent from './Components/SearchComponent';
import AddDestinationComponent from './Components/AddDestinationComponent';

function App() {
  const [destination, setDestination] = useState([]);

  return (
    <div className="container">
    {/* <Navbar /> */}
    <h1>Destinations:</h1>
    <SearchComponent />

    <DestinationList
      destination={destination}
      setDestination={setDestination}
    />

    <AddDestinationComponent />

  </div>
  );
}

export default App;
