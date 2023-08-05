import React from "react";
import { Link } from "react-router-dom";

function BucketList({ bucketList, setBucketList }) {
  const bucketListCard = bucketList.map((places) => (
    <div key={places.id} className="card col-4">
      <img src={places.image_url} className="card-img-top" alt=".." />
      <div className="card-body">
        <h4 className="card-title">{places.name}</h4>
        <p className="card-text">{places.location}</p>
        <p ClassName="card-text">{places.more}</p>
        <p className="card-text">{places.description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/destination/${places.id}`}>View Details</Link>
        {/* <button className="btn btn-sm btn-success">More details</button> */}
      </div>
    </div>
  ));
  // <div key={places.id} className="card col-6">
  //   <img src={places.image_url} className="card-img-top" alt={places.name} />
  //   <div className="card-body">
  //     <h5 className="card-title">{places.name}</h5>
  //     <p className="card-text">{places.description}</p>
  //   </div>
  //   <div className="card-footer">
  //     <small className="text-body-secondary">{places.more}</small>
  //   </div>
  // </div>;

  return (
    <div className="row">
      <div className="card col-10 bot-army-section ">
        <h2>My Bucketlist</h2>
        {bucketListCard}
      </div>
    </div>
  );
}

export default BucketList;

// import React from "react";
// import { Link } from "react-router-dom";

// function BucketListComponent({ bucketlist }) {
//   if (bucketlist.length === 0) {
//     return <div>Your bucket list is empty</div>;
//   }

//   return (
//     <div className="bucket-list">
//       <h2>My Bucket List</h2>
//       <ul>
//         {bucketlist.map((destination) => (
//           <li key={destination.id}>
//             <Link to={`/bucketlist/${destination.id}`}>Add to bucketlist</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BucketListComponent;

// import React from "react";
// import DestinationCard from "./DestinationCard";

// function BucketList({ bucketList }) {
//   return (
//     <div>
//       <h2>Bucket List</h2>
//       <div className="row">
//         {bucketList.map((place) => (
//           <DestinationCard key={place.id} place={place} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BucketList;
