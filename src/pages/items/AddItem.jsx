import axios from "axios";
import { motion } from "motion/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import Swal from "sweetalert2";
import lostSuitcase from "../../assets/lostItems/lostSuitcase.jpg";
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
        <div className={`flex flex-col max-w-5xl gap-8 p-6 my-8 mx-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-lg shadow-lg lg:flex-row`}>
            <div
                className="flex flex-col items-center space-y-6 md:w-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="min-h-[6rem] mb-4">
                    <h1 className="text-4xl font-bold leading-none text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
                        <Typewriter
                            words={['Report Lost or Found Item', 'Easily Post and Track Items', 'Help Others Find What They Lost']}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                </div>
                <p className="text-lg text-start dark:text-white">
                    Help reunite lost items with their rightful owners or report items you've found.
                    Together, we can make a difference in finding what matters most.
                </p>
                <motion.img
                    src={lostSuitcase}
                    alt="Lost suitcase illustration"
                    className="object-cover w-full h-auto transition-transform duration-300 transform rounded-lg shadow-md hover:scale-105"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                />
            </div>


            <form
                onSubmit={handleSubmit}
                className={`w-full md:w-1/2 p-8 bg-opacity-90 backdrop-blur-md rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                    }`}
            >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="postType"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Post Type
                        </label>
                        <select
                            name="postType"
                            required
                            className={`w-full p-3 mt-1 border rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        >
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="thumbnail"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Thumbnail (Image URL)
                        </label>
                        <input
                            type="text"
                            name="thumbnail"
                            placeholder="Enter image URL"
                            required
                            className={`w-full p-3 mt-1 border rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label
                            htmlFor="title"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter a title"
                            required
                            className={`w-full p-3 mt-1 border rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter a detailed description"
                            required
                            className={`w-full p-3 mt-1 border rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="category"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Category
                        </label>
                        <select
                            name="category"
                            required
                            className={`w-full p-3 mt-1 border rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        >
                            <option value="pets">Pets</option>
                            <option value="documents">Documents</option>
                            <option value="gadgets">Gadgets</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="location"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter the location"
                            required
                            className={`w-full p-3 mt-1 border rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="dateLost"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Date
                        </label>
                        <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}
                            dateFormat="yyyy/MM/dd"
                            className={`w-full p-3 mt-1 border rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contactInfo"
                            className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Contact Information
                        </label>
                        <input
                            name="contactInfo"
                            value={`${user.displayName} (${user.email})`}
                            disabled
                            className={`w-full p-3 mt-1 border rounded-lg bg-gray-100 focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-white"
                                : "bg-white border-gray-300 text-black"
                                }`}
                        />
                    </div>
                </div>

                <motion.button
                    type="submit"
                    className={`w-full py-3 mt-6 font-semibold text-white rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gradient-to-r from-blue-400 to-purple-500"
                        }`}
                    whileHover={{ scale: 1.1, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Add Post
                </motion.button>
            </form>
        </div>


    );
};

export default AddItem;
