import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';

const ItemDetails = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [recoveredLocation, setRecoveredLocation] = useState('');
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const { user } = useAuth()
    const item = useLoaderData()

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const handleSubmit = () => {
        console.log({
            recoveredLocation,
            recoveredDate,
            recoveredBy: user,
        });
        handleModalClose();
    };

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-50 lg:flex lg:items-center">
            <img
                src={item.thumbnail}
                alt="Item Thumbnail"
                className="object-cover object-center w-full rounded-t-lg h-[400px] lg:rounded-none lg:rounded-l-lg lg:w-1/2"
            />
            <div className="flex-1 p-6 space-y-4">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p>{item.description}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Type:</strong> {item.postType}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Posted by:</strong> {item.contactInfo.displayName} ({item.contactInfo.email})</p>
                <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                <button
                    onClick={handleModalOpen}
                    className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    {item.postType === 'Lost' ? 'Found This!' : 'This is Mine!'}
                </button>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Recovery Details"
                className="w-full max-w-xl px-8 py-4 mx-auto overflow-auto transition-all duration-300 ease-in-out transform scale-95 bg-white shadow-lg max-h-[500px] rounded-xl mt-14 hover:scale-100 dark:bg-gray-800"
                overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
            >
                <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">Recovery Details</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="recoveredBy" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Recovered By</label>
                        <div className="flex items-center gap-4 p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
                            <img src={user.photoURL} alt="User Avatar" className="w-16 h-16 mt-2 border-2 border-blue-500 rounded-full" />
                            <div>
                                <p className="text-gray-800 dark:text-gray-50"><strong>Name:</strong> {user.displayName}</p>
                                <p className="text-gray-800 dark:text-gray-50"><strong>Email:</strong> {user.email}</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <label htmlFor="recoveredLocation" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Recovered Location</label>
                        <input
                            type="text"
                            id="recoveredLocation"
                            placeholder="Enter location"
                            value={recoveredLocation}
                            onChange={(e) => setRecoveredLocation(e.target.value)}
                            className="w-full p-4 mt-2 transition duration-200 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="recoveredDate" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Recovered Date</label>
                        <DatePicker
                            selected={recoveredDate}
                            onChange={(date) => setRecoveredDate(date)}
                            dateFormat="yyyy/MM/dd"
                            className="w-full p-4 mt-2 transition duration-200 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-50 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-6 space-x-4">
                    <button
                        onClick={handleModalClose}
                        className="px-6 py-2 text-gray-700 transition duration-200 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </Modal>



        </div>
    );
};

export default ItemDetails;
