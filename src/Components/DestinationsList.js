import React, { useEffect } from "react";
// import DestinationCard from "./DestinationCard";
// import SearchComponent from "./SearchComponent";

function DestinationList({ destination, setDestination, search, data }) {
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((data) => data.json())
      .then((data) => {
        setDestination(data);

        console.log(destination);
      });
  }, []);

  return (
    <div className="row">
      {/* {destination.map((place) => (
        <DestinationCard key={place.id} place={place} />
      ))} */}
      {/* {data.filter((item) =>{
    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
    }).map(item => (
    <DestinationCard key={item.id} place={item}/>

    ))} */}

    </div>
  ); 
}

export default DestinationList;
