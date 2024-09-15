import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './StarshipDetail.css';

const StarshipDetail = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        fetchStarship();
    }, [id]);

    const fetchStarship = async () => {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
        setStarship(response.data);
    };

    if (!starship) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="card">
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>Max Speed: {starship.max_atmosphering_speed}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Crew: {starship.crew}</p>
            <p>Cargo Capacity: {starship.cargo_capacity}</p>
            </div>
            <Link to="/" className="back-button">Back to Home</Link>
        </div>
    );
};

export default StarshipDetail;
