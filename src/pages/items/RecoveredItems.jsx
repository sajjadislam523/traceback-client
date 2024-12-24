import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const RecoveredItems = () => {
    const { user } = useAuth();
    const [recoveredItems, setRecoveredItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/myRecoveredItems/${user.email}`
                );
                setRecoveredItems(response.data);
            } catch (error) {
                console.error("Error fetching recovered items:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [user.email]);

    return (
        <div className="max-w-5xl mx-auto mt-8">
            <h1 className="text-3xl font-bold text-center">
                My Recovered Items
            </h1>
            {loading ? (
                <Loading />
            ) : recoveredItems.length === 0 ? (
                <p className="mt-4 text-center text-gray-500">No recovered items found.</p>
            ) : (
                <div className="mt-8 overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="text-gray-700 bg-gray-200">
                                <th className="p-4 text-left border border-gray-300">Title</th>
                                <th className="p-4 text-left border border-gray-300">Category</th>
                                <th className="p-4 text-left border border-gray-300">Location</th>
                                <th className="p-4 text-left border border-gray-300">
                                    Recovered Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {recoveredItems.map((item) => (
                                <tr
                                    key={item._id}
                                >
                                    <td className="p-4 border border-gray-300">{item.title}</td>
                                    <td className="p-4 border border-gray-300">{item.category}</td>
                                    <td className="p-4 border border-gray-300">{item.location}</td>
                                    <td className="p-4 border border-gray-300">
                                        {new Date(item.dateRecovered).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecoveredItems;
