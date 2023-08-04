import React, { useState } from "react";
// import SearchComponent from "./SearchComponent";
import DestinationCard from "./DestinationCard";
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function AddDestinationComponent(){
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);
    const [image, setImage] = useState([]);
    const [details, setDetails] = useState([]);
    const [search, setSearch] = useState('')


    function handleSubmit(e){

        e.preventDefault()

        const bucketlist = { name, description, image, details }

        fetch('http://localhost:3000/bucketlist',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bucketlist)
        })
        .then(res => res.json())
        .then(data => {
            setData((prevDestinations) => [...prevDestinations, data]);
            setName('')
            setDescription('')
            setImage('')
            setDetails('')
        })

    } 

    return(
        <>
            <h3>Bucket List</h3>
            <div>
                <form onSubmit={handleSubmit}>

                <div className="search-container">
                    <input type="search" className="search-input" onChange={(e) => setSearch(e.target.value)} placeholder="Search your Bucket List" />
                </div>

                    <div>
                    <input type="text" 
                    id="name" 
                    placeholder="Enter Name of City" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />

                    <input type="text" 
                    id="description" 
                    placeholder="Description of the City" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required />

                    <input type="text" 
                    id="image" 
                    placeholder="Image of the City" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required />

                    <input type="text" 
                    id="details" 
                    placeholder="Details about the City" 
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required />
                    </div>

                    <div>
                        <button className="button">Add City to Bucket List</button>
                    </div>
                </form>
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
export default AddDestinationComponent