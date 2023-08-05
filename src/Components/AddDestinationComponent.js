// import React, { useState } from "react";
// // import SearchComponent from "./SearchComponent";

// function AddDestinationComponent() {
//   const [data, setData] = useState([]);
//   const [name, setName] = useState([]);
//   const [description, setDescription] = useState([]);
//   const [image, setImage] = useState([]);
//   const [details, setDetails] = useState([]);
//   const [search, setSearch] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     const bucketlist = { name, description, image, details };

//     fetch("http://localhost:8000/bucketlist", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(bucketlist),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setData((oldData) => [...oldData, data]);
//         setName("");
//         setDescription("");
//         setImage("");
//         setDetails("");
//       });
//   }

//   return (
//     <>
//       <h3>Bucket List</h3>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter Name of City"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <input
//               type="text"
//               id="description"
//               placeholder="Description of the City"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />

//             <input
//               type="text"
//               id="image"
//               placeholder="Image of the City"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               required
//             />

//             <input
//               type="text"
//               id="details"
//               placeholder="Details about the City"
//               value={details}
//               onChange={(e) => setDetails(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <button className="button">Add City to Bucket List</button>
//           </div>
//         </form>
//       </div>

//       <div className="search-container">
//         <input
//           type="search"
//           className="search-input"
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search your Bucket List"
//         />
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Image</th>
//               <th>Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data
//               .filter((item) => {
//                 return search.toLowerCase() === ""
//                   ? item
//                   : item.name.toLowerCase().includes(search);
//               })
//               .map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.description}</td>
//                   <td>{item.image}</td>
//                   <td>{item.more}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }
// export default AddDestinationComponent;
