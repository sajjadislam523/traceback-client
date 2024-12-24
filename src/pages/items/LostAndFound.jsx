import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ItemCard from '../../components/ItemCard.jsx';
import useTheme from '../../hooks/useTheme.jsx';

const LostAndFound = () => {

    const [items, setItems] = useState([]);
    const { theme } = useTheme();

    const fetchItems = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allItems`)
        setItems(data);
    }

    useEffect(() => {
        fetchItems()
    }, [])
    return (
        <>
            <Helmet>
                <title>Lost and Found - Traceback</title>
            </Helmet>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className={`py-8 bg-${theme === 'dark' ? 'gray-800' : 'white'} text-${theme === 'dark' ? 'white' : 'gray-900'}`}>
                    <h1 className="text-3xl font-semibold text-center">Lost and Found Items</h1>
                </div>

                <div className={`grid grid-cols-1 gap-6 px-12 py-6 md:grid-cols-2 lg:grid-cols-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                    {items.map(item => (
                        <ItemCard key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default LostAndFound;