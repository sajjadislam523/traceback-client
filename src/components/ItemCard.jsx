import React from 'react';

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
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Type:</strong> {item.postType}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                    <p><strong>Contact:</strong> {item.contactInfo.displayName} ({item.contactInfo.email})</p>
                    <p><strong>Post Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                </div>
                {/* Button aligned to the bottom */}
                <button type="button" className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ItemCard;

