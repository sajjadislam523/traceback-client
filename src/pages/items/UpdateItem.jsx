import axios from "axios";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import lostImage from "../../assets/lostItems/personLostThings.jpg";
import Loading from "../../components/Loading.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import useTheme from "../../hooks/useTheme.jsx";


const UpdateItem = () => {
    const { user } = useAuth();
    const { theme } = useTheme();
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/items/${id}`);
                setItem(response.data);
                setDate(new Date(response.data.date));
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to fetch item data. Please try again.",
                });
            }
        };

        fetchItem();
    }, [id]);

    // Submit updated data
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const postType = form.postType.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;

        const updatedData = {
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
            status: item.status,
        };

        // Update request to the server
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/items/${id}`, updatedData);
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Post updated successfully!",
            });
            navigate("/myItems");
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to update post. Please try again.",
            });
        }
    };

    if (!item) {
        return <Loading />;
    }

    return (
        <div className={`flex flex-col max-w-5xl gap-8 p-6 mx-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-lg shadow-lg lg:flex-row`}>
            <form onSubmit={handleSubmit} className={`w-full md:w-1/2 p-8 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"} text-sm`}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="postType" className={`block text-sm font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Post Type</label>
                        <select name="postType" defaultValue={item.postType} required className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}>
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="thumbnail" className="block text-sm font-semibold text-gray-700">Thumbnail (Image URL)</label>
                        <input type="text" name="thumbnail" defaultValue={item.thumbnail} placeholder="Enter image URL" required className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`} />
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
                        <input type="text" name="title" defaultValue={item.title} placeholder="Enter a title" required className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
                        <textarea name="description" defaultValue={item.description} placeholder="Enter a detailed description" required className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}></textarea>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-semibold text-gray-700">Category</label>
                        <select name="category" defaultValue={item.category} required className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}>
                            <option value="pets">Pets</option>
                            <option value="documents">Documents</option>
                            <option value="gadgets">Gadgets</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-semibold text-gray-700">Location</label>
                        <input type="text" name="location" defaultValue={item.location} placeholder="Enter the location" required className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`} />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="dateLost" className="block text-sm font-semibold text-gray-700">Date</label>
                        <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}
                            dateFormat="yyyy/MM/dd"
                            className={`w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contactInfo" className="block text-sm font-semibold text-gray-700">Contact Information</label>
                        <input
                            name="contactInfo"
                            value={`${user.displayName} (${user.email})`}
                            disabled
                            className={`w-full p-3 mt-1 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-400 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
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
            <div
                className="flex flex-col items-center space-y-6 md:w-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="min-h-[6rem] mb-4">

                    <h1 className="text-4xl font-bold leading-tight text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
                        <Typewriter
                            words={[
                                "Update Your Post's Detail",
                                "Modify and Improve Your Listings",
                                "Make Your Post Stand Out",
                                "Edit and Customize Your Information",
                                "Keep Your Post Accurate and Up-to-Date"
                            ]}
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
                    Keep your post up-to-date with the latest information. Whether you want to edit your item details, improve the description, or change the image, this section allows you to make updates so your listing stays fresh and accurate for other users.
                </p>
                <motion.img
                    src={lostImage}
                    alt="Lost suitcase illustration"
                    className="object-cover w-full h-auto transition-transform duration-300 transform rounded-lg shadow-md hover:scale-105"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};

export default UpdateItem;
