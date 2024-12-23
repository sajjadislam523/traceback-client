import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../components/Loading.jsx";
import useAuth from "../../hooks/useAuth.jsx";


const UpdateItem = () => {
    const { user } = useAuth();
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
        <form onSubmit={handleSubmit} className="max-w-xl p-8 mx-auto space-y-2 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="mb-4">
                    <label htmlFor="postType" className="block text-sm font-semibold text-gray-700">Post Type</label>
                    <select name="postType" defaultValue={item.postType} required className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400">
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="thumbnail" className="block text-sm font-semibold text-gray-700">Thumbnail (Image URL)</label>
                    <input type="text" name="thumbnail" defaultValue={item.thumbnail} placeholder="Enter image URL" required className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                </div>
            </div>

            <div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
                    <input type="text" name="title" defaultValue={item.title} placeholder="Enter a title" required className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
                    <textarea name="description" defaultValue={item.description} placeholder="Enter a detailed description" required className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"></textarea>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700">Category</label>
                    <select name="category" defaultValue={item.category} required className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400">
                        <option value="pets">Pets</option>
                        <option value="documents">Documents</option>
                        <option value="gadgets">Gadgets</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700">Location</label>
                    <input type="text" name="location" defaultValue={item.location} placeholder="Enter the location" required className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="mb-4">
                    <label htmlFor="dateLost" className="block text-sm font-semibold text-gray-700">Date</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="yyyy/MM/dd"
                        className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contactInfo" className="block text-sm font-semibold text-gray-700">Contact Information</label>
                    <input
                        name="contactInfo"
                        value={`${user.displayName} (${user.email})`}
                        disabled
                        className="w-full p-3 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            <button type="submit" className="w-full py-3 mt-6 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Update Post
            </button>
        </form>
    );
};

export default UpdateItem;
