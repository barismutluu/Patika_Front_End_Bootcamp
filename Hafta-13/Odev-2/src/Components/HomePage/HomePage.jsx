import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchStarships();
    }, [page]);

    const fetchStarships = async () => {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
        setStarships(prevStarships => [...prevStarships, ...response.data.results]);
    };

    const handleSearch = async (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === '') {
            setStarships([]);
            setPage(1);
        } else {
            const response = await axios.get(`https://swapi.dev/api/starships/?search=${e.target.value}`);
            setStarships(response.data.results);
        }
    };

    return (
        <div className="container">
            <h1>Star Wars</h1>
            <input
                type="text"
                placeholder="Search by name or model"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />
            <hr/>
            <div className="starship-list">
                {starships.map(starship => (
                    <div key={starship.url} className="starship-card">
                        <h3>{starship.name}</h3>
                        <p>Model: {starship.model}</p>
                        <p>Max Speed: {starship.max_atmosphering_speed}</p>
                        <Link to={`/starship/${starship.url.match(/(\d+)/)[0]}`}>Details</Link>
                    </div>
                ))}
            </div>
            {searchTerm === '' && (
                <button onClick={() => setPage(prevPage => prevPage + 1)} className="load-more-button">
                    Load More
                </button>
            )}
        </div>
    );
};

export default HomePage;
