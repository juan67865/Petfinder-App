import React, { useState, useEffect } from "react";
import petfinderClient from "./Auth";

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSearch = () => {
        setLoading(true);
        setPets([]);

        const searchLocation = searchQuery;
        const searchOptions = {
            location: searchLocation,
            type: 'dog',
        };

        petfinderClient.animal.search(searchOptions).then((response) => {
            setPets(response.data.animals);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching pet data:', error);
            setLoading(false);
        });
    };

    return (
        <div className="search-container">
            <h1 className="search-title">Pet Search</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter location (e.g., city, state)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading ? (
                <p className="loading-text">Loading...</p>
            ) : (
                <div>
                    {pets.length === 0 ? (
                        <p className="no-pets-found">No pets found.</p>
                    ) : (
                        <ul className="pet-list">
                            {pets.map((pet) => (
                                <li key={pet.id} className="pet-item">
                                    <h2 className="pet-name">{pet.name}</h2>
                                    <p className="pet-description">{pet.description}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                    {pets.length === 0 && !loading && (
                        <p className="no-pets-found">No pets found for your search.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;