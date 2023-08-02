import React, { useState, useEffect } from "react";

const BucketList = () => {
  const [bucketList, setBucketList] = useState([]);

  useEffect(() => {
    // Fetch data from the json-server API
    fetch("http://localhost:3000/bucketlist")
      .then((response) => response.json())
      .then((data) => setBucketList(data))
      .catch((error) => console.error("Error fetching bucket list data:", error));
  }, []);

  return (
    <div>
      <h2>My Travel Bucket List</h2>
      <ul>
        {bucketList.map((destination) => (
          <li key={destination.id}>
            <span>{destination.name}</span>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;