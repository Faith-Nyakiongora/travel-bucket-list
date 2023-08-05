// import React from "react";
// import { useParams } from "react-router-dom";

// function DestinationDetailsComponent({ destinations }) {
//   const { id } = useParams();
//   const destination = destinations.find((place) => place.id === parseInt(id));

//   if (!destination) {
//     return <div>Destination not found.</div>;
//   }

//   const {
//     name,
//     description,
//     location,
//     more,
//     best_time_to_visit,
//     traveling_tips,
//     attractions,
//   } = destination;

//   return (
//     <div>
//       <h2>{name}</h2>
//       <h3>
//         <p>{location}</p>
//       </h3>
//       <p>{description}</p>
//       <p>{more}</p>
//       <h5>Best Time To Visit</h5>
//       <p>{best_time_to_visit}</p>
//       <h5>Traveling Tips</h5>
//       <p>{traveling_tips}</p>
//       <h5>Attractions</h5>
//       <p>{attractions}</p>
//     </div>
//   );
// }

// export default DestinationDetailsComponent;
