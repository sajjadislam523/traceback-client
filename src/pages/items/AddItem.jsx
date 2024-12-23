import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme.jsx";

const AddItem = () => {
    const { user } = useAuth();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());

    // Submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const postType = form.postType.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;

        const formData = {
            postType,
            thumbnail,
            title,
            description,
            category,
            location,
            date,
            contactInfo: {
                displayName: user?.displayName,
                email: user?.email,
            },
            status: "Pending",

        };

        // Post request to the server
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/addItem`, formData);
            form.reset();
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Post added successfully!",
            });
            navigate("/myItems");
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to add post. Please try again.",
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-12 md:flex-row">
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold text-center">Add Item</h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className={`w-full md:w-1/2 p-8 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
            >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="postType" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Post Type</label>
                        <select
                            name="postType"
                            required
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        >
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="thumbnail" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Thumbnail (Image URL)</label>
                        <input
                            type="text"
                            name="thumbnail"
                            placeholder="Enter image URL"
                            required
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        />
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                        <label htmlFor="title" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter a title"
                            required
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter a detailed description"
                            required
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="category" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Category</label>
                        <select
                            name="category"
                            required
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        >
                            <option value="pets">Pets</option>
                            <option value="documents">Documents</option>
                            <option value="gadgets">Gadgets</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="location" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter the location"
                            required
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="dateLost" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Date</label>
                        <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}
                            dateFormat="yyyy/MM/dd"
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contactInfo" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Contact Information</label>
                        <input
                            name="contactInfo"
                            value={`${user.displayName} (${user.email})`}
                            disabled
                            className={`w-full p-3 mt-1 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={`w-full py-3 mt-6 font-semibold text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}`}
                >
                    Add Post
                </button>
            </form>
        </div>

    );
};

export default AddItem;
