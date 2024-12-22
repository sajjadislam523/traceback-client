import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard.jsx';

const LostAndFound = () => {

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allItems`)
        setItems(data);
    }

    useEffect(() => {
        fetchItems()
    }, [])
    return (
        <div className='grid grid-cols-1 gap-6 px-12 py-6 md:grid-cols-2 lg:grid-cols-4'>
            {
                items.map(item => <ItemCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default LostAndFound;