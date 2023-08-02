import React, { useState, useEffect } from "react";
import '../Search.css'
import AddDestinationComponent from "./AddDestinationComponent";

function SearchComponent(){   
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);
  
useEffect(() => {
  fetchData();
}, []); 

const fetchData = () => {
  fetch('http://localhost:8000/destinations')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};



    return(
        <>           
            <div className='nav'>Navbar</div>
            <div className="search-container">
                <input type="search" className="search-input" onChange={(e) => setSearch(e.target.value)} placeholder="Search city" />
            </div>


            
            <div className='table-container'>
                <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((item) =>{
                    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                    }).map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.image}</td>
                        <td>{item.more}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </>
    )

}

export default SearchComponent