import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddDestination({ addDestination }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDestination = {
      name,
      location,
      description,
    };
    addDestination(newDestination);
    setName("");
    setLocation("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Destination
      </Button>
    </Form>
  );
}

export default AddDestination;

//     // <div>
//     //   <form onSubmit={handleSubmit}>
//     //     <input
//     //       type="text"
//     //       placeholder="Name"
//     //       value={name}
//     //       onChange={(e) => setName(e.target.value)}
//     //     />
//     //     <input
//     //       type="text"
//     //       placeholder="Location"
//     //       value={location}
//     //       onChange={(e) => setLocation(e.target.value)}
//     //     />
//     //     <input
//     //       type="text"
//     //       placeholder="Description"
//     //       value={description}
//     //       onChange={(e) => setDescription(e.target.value)}
//     //     />
//     //     <button type="submit">Add Destination</button>
//     //   </form>
//     // </div>
//   );
// }
