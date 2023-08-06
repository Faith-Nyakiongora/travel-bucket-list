import React from "react";
// import { Link } from "react-router-dom";

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
        {/* <Link to={`/destination/${places.id}`}>View Details</Link> */}
        {/* <button className="btn btn-sm btn-success">More details</button> */}
      </div>
    </div>
  ));

  return (
    <div className="row">
      <div className="card col-10">
        <h2>My Bucketlist</h2>
        {bucketListCard}
      </div>
    </div>
  );
}

export default BucketList;
