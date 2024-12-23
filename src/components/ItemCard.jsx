import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
    return (
        <div className="flex flex-col bg-white rounded-md shadow-md dark:bg-gray-800 dark:text-gray-50">
            <img
                src={item.thumbnail}
                alt="Item Thumbnail"
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between flex-grow p-6 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{item.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{item.description.substring(0, 50)}...</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Type:</strong> {item.postType}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                    <p><strong>Status:</strong> {item.status}</p>
                </div>

                <Link to={`/items/${item._id}`} type="button" className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ItemCard;

