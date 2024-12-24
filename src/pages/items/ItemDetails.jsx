import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth.jsx';
import useTheme from '../../hooks/useTheme.jsx';

const ItemDetails = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [recoveredLocation, setRecoveredLocation] = useState('');
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const { user } = useAuth()
    const item = useLoaderData()
    const { theme } = useTheme()

    const isDark = theme === 'dark';

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const handleSubmit = async () => {

        const recoveredItem = {
            id: item._id,
            title: item.title,
            description: item.description,
            category: item.category,
            location: recoveredLocation,
            dateRecovered: recoveredDate,
            recoveredBy: {
                user: user.displayName,
                email: user.email,
            },
            thumbnail: item.thumbnail,
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/addRecoveredItem`, recoveredItem);

            if (response.status === 200) {
                await axios.patch(`${import.meta.env.VITE_API_URL}/updateItem/${item._id}`, { status: 'Recovered' });
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Item recovered successfully!',
                })
                handleModalClose();
            }
        } catch (err) {
            console.error(err)
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update item status!',
            })
        }

    };

    return (
        <div
            className={`max-w-5xl mx-auto my-8 rounded-lg shadow-md lg:flex lg:items-center ${isDark ? 'bg-gray-800 text-gray-50' : 'bg-white text-gray-800'
                }`}
        >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                <img
                    src={item.thumbnail}
                    alt="Item Thumbnail"
                    className="object-cover w-5/6 h-full mx-auto rounded-t-lg lg:rounded-lg"
                // style={{ aspectRatio: '4 / 3' }}
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 space-y-4">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p>{item.description}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Type:</strong> {item.postType}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Posted by:</strong> {item.contactInfo.displayName} ({item.contactInfo.email})</p>
                <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                <p className="font-bold">
                    <div
                        className={`p-4 badge ${item.status === 'Pending'
                            ? `bg-yellow-100 ${isDark ? 'text-yellow-600' : 'text-yellow-800'}`
                            : `bg-green-100 ${isDark ? 'text-green-300' : 'text-green-800'}`
                            }`}
                    >
                        {item.status}
                    </div>
                </p>
                <button
                    onClick={handleModalOpen}
                    className={`px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${item.status === 'Recovered'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : `bg-blue-500 hover:bg-blue-600 ${isDark ? 'dark:hover:bg-blue-700' : ''
                        }`
                        }`}
                    disabled={item.status === 'Recovered'}
                >
                    {item.postType === 'Lost' ? 'Found This!' : 'This is Mine!'}
                </button>
            </div>

            {/* Modal Section */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Recovery Details"
                className={`w-full max-w-xl px-8 py-4 mx-auto overflow-auto transition-all duration-300 ease-in-out transform scale-95 shadow-lg max-h-[500px] rounded-xl mt-14 hover:scale-100 ${isDark ? 'bg-gray-800 text-gray-50' : 'bg-white text-gray-800'
                    }`}
                overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
            >
                <h2 className={`mb-6 text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Recovery Details
                </h2>
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="recoveredBy"
                            className={`block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                }`}
                        >
                            Recovered By
                        </label>
                        <div
                            className={`flex items-center gap-4 p-4 mt-2 border rounded-lg shadow-md ${isDark
                                ? 'bg-gray-700 border-gray-600 text-gray-50'
                                : 'bg-gray-100 border-gray-300 text-gray-800'
                                }`}
                        >
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-16 h-16 mt-2 border-2 border-blue-500 rounded-full"
                            />
                            <div>
                                <p><strong>Name:</strong> {user.displayName}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="recoveredLocation"
                            className={`block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                }`}
                        >
                            Recovered Location
                        </label>
                        <input
                            type="text"
                            id="recoveredLocation"
                            placeholder="Enter location"
                            value={recoveredLocation}
                            onChange={(e) => setRecoveredLocation(e.target.value)}
                            className={`w-full p-4 mt-2 border rounded-md shadow-sm ${isDark
                                ? 'bg-gray-800 border-gray-600 text-gray-50 focus:ring-blue-500'
                                : 'bg-gray-50 border-gray-300 text-gray-800 focus:ring-blue-500'
                                }`}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="recoveredDate"
                            className={`block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                }`}
                        >
                            Recovered Date
                        </label>
                        <DatePicker
                            selected={recoveredDate}
                            onChange={(date) => setRecoveredDate(date)}
                            dateFormat="yyyy/MM/dd"
                            className={`w-full p-4 mt-2 border rounded-md shadow-sm ${isDark
                                ? 'bg-gray-800 border-gray-600 text-gray-50 focus:ring-blue-500'
                                : 'bg-gray-50 border-gray-300 text-gray-800 focus:ring-blue-500'
                                }`}
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-6 space-x-4">
                    <button
                        onClick={handleModalClose}
                        className={`px-6 py-2 rounded-md focus:outline-none ${isDark
                            ? 'bg-gray-600 hover:bg-gray-500 text-gray-50'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            }`}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className={`px-6 py-2 rounded-md focus:outline-none ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                            } text-white`}
                    >
                        Submit
                    </button>
                </div>
            </Modal>
        </div>

    );
};

export default ItemDetails;
