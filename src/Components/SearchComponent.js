import React, { useState, useEffect } from "react";
import '../Search.css'
// import DestinationList from "./DestinationsList";
import DestinationCard from "./DestinationCard";

function SearchComponent(){   
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);
  
useEffect(() => {
  fetchData();
}, []); 

const fetchData = () => {
  fetch('http://localhost:3000/places')
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
            {/* <div className='nav'>Navbar</div> */}
            <div className="search-container">
                <input type="search" className="search-input" onChange={(e) => setSearch(e.target.value)} placeholder="Search city" />
            </div>

            <div>
             {data.filter((item) =>{
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                }).map(item => (
                <DestinationCard key={item.id} place={item}/>

                ))}
            </div>
            
        </>
    )

}

export default SearchComponent