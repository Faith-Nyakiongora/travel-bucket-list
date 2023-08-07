import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DestinationDetailsComponent from "./DestinationDetailsComponent";

function BucketList() {
  const [bucketList, setBucketList] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bucketlist")
      .then((response) => response.json())
      .then((data) => setBucketList(data))
      .catch((error) => console.error("Error fetching bucket list data:", error));
  }, []);

  // const handleAddToBucketList = (place) => {
  //   fetch("http://localhost:3000/bucketlist", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(place),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBucketList((prevBucketList) => [...prevBucketList, data]);
  //     })
  //     .catch((error) => console.error("Error adding place to bucket list:", error));
  // };

  const handleRemoveFromBucketList = (id) => {
    fetch(`http://localhost:3000/bucketlist/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setBucketList(bucketList.filter((place) => place.id !== id));
      })
      .catch((error) =>
        console.error("Error removing place from bucket list:", error)
      );
  };

  const handleDestinationClick = (place) => {
    setSelectedDestination(place); // Update selectedDestination when a link is clicked
  };

  return (
    <div>
      <h2>My Travel Bucket List</h2>
      <div className="bucket-list-cards">
        {bucketList.map((place) => (
          <Card key={place.id} className="bucket-list-card">
            <Card.Img variant="top" src={place.image_url} />
            <Card.Body>
              <Card.Title>{place.name}</Card.Title>
              <Card.Text>{place.location}</Card.Text>
              <Card.Text>{place.description}</Card.Text>
              <Card.Text>{place.more}</Card.Text>
              <Link
                to={`/destination/${place.id}`}
                onClick={() => handleDestinationClick(place)}
              >
                <Button  variant="info" as={Link} to={`/destination/${place.id}`}>Details</Button>
              </Link>
              <Button
                variant="danger"
                onClick={() => handleRemoveFromBucketList(place.id)}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {selectedDestination && (
        <DestinationDetailsComponent place={selectedDestination} />
      )}
    </div>
  );
}

export default BucketList;
