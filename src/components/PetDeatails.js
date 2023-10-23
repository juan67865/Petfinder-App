import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PetDetails() {
    const { id } = useParams();

    const [pet, setPet] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = 'cVEh9CQR6G8Gp4pGqZx04kfMqZcyaMCSwTfBDDd3KAhryFTr1K';
        const apiSecret = 'aJ8SesbkMHtKj2OHp26zW8ievVDK2ZPzQFCaIEOi';

        const apiUrl = `https://api.petfinder.com/v2/animals/${id}`;

        const fetchData = async () => {
            try {
                const response =await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${apiKey}:${apiSecret}`,
                    },
                });
                setPet(response.data.animal);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching pet details:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='pet-details-container'>
            <h1 className='pet-details-title'>Pet Details</h1>
            {loading ? (
                <p className='loading-text'>Loading...</p>
            ) : (
                <div>
                    <h2 className='pet-name'>{pet.name}</h2>
                    <p className='pet-type'>Typr: {pet.type}</p>
                    <p className='pet-age'>Age: {pet.age}</p>
                    <p className='pet-breed'>Breed: {pet.breeds.primary}</p>
                    <p className='pet-description'>Description: {pet.description || 'No description avaiable.'}</p>
                </div>
            )}
        </div>
    );
}

export default PetDetails;