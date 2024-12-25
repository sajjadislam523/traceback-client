import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ItemCard from '../../components/ItemCard.jsx';
import Loading from '../../components/Loading.jsx';
import useAuth from '../../hooks/useAuth.jsx';
import useTheme from '../../hooks/useTheme.jsx';

const LostAndFound = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const { theme } = useTheme();
    const { loading, setLoading } = useAuth();

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allItems?search=${search}`);
            setItems(data);
            setLoading(false);
        }
        fetchItems();
    }, [search]);
    return (
        <>
            <Helmet>
                <title>Lost and Found - Traceback</title>
            </Helmet>
            <div className={theme === 'dark' ? 'dark' : ''}>
                {/* Search Bar */}
                <div className={`flex justify-center py-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="relative w-11/12 max-w-lg">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search Items..."
                            className={`w-full px-12 py-3 text-lg rounded-full shadow-lg border focus:outline-none focus:ring-1 ${theme === 'dark'
                                ? 'bg-gray-900 text-gray-200 border-gray-700 focus:ring-gray-600'
                                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-300'
                                }`}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {/* Search Icon */}
                        <span
                            className={`absolute inset-y-0 left-4 flex items-center pointer-events-none ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}
                        >
                            🔍
                        </span>
                    </div>
                </div>

                {/* Header */}
                <div className={`py-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                    <h1 className="text-3xl font-semibold text-center">Lost and Found Items</h1>
                </div>

                {/* Items Grid */}
                {loading ? (
                    <Loading />

                ) : (
                    <div
                        className={`grid grid-cols-1 gap-6 px-12 py-6 md:grid-cols-2 lg:grid-cols-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                            }`}
                    >
                        {items.map((item) => (
                            <ItemCard key={item._id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default LostAndFound;