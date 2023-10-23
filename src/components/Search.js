import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = 'cVEh9CQR6G8Gp4pGqZx04kfMqZcyaMCSwTfBDDd3KAhryFTr1K';
        const apiSecret = 'aJ8SesbkMHtKj2OHp26zW8ievVDK2ZPzQFCaIEOi';

        const searchQuery = 'animal=dog&location=New York, NY&limit=10';

        const apiUrl = `https://api.petfinder.com/v2/animals?${searchQuery}`;

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization:`Bearer ${apiKey}:${apiSecret}`,
                    },
                });
                setPets(response.data.animals);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="search-container">
            <h1 className="search-title">Pet Search</h1>
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
                                    <p>Type: {pet.type}</p>
                                    <p>Age: {pet.age}</p>
                                    <p>Breed: {pet.breeds.primary}</p>
                                    <p>Location: {pet.contact.address.city}, {pet.contact.address.state}</p>
                                    <a href={`/pet/${pet.id}`}>View Details</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;