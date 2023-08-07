import React, { createContext, useContext, useState } from "react";

const BucketListContext = createContext();

export function BucketListProvider({ children }) {
  const [bucketList, setBucketList] = useState([]);

  const addToBucketList = (place) => {

    fetch("http://localhost:3000/bucketlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    })
      .then((response) => {
        if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBucketList((prevBucketList) => [...prevBucketList, place]);
      })
      .catch((error) => console.error("Error adding place to bucket list:", error));
  };
  
  // You can add more functions and state here if needed

  return (
    <BucketListContext.Provider value={{ bucketList, addToBucketList }}>
      {children}
    </BucketListContext.Provider>
  );
}

export function useBucketListContext() {
  return useContext(BucketListContext);
}
