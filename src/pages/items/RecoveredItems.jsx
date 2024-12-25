import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CiGrid42, CiViewTable } from "react-icons/ci";
import Loading from "../../components/Loading.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import useTheme from "../../hooks/useTheme.jsx";

const RecoveredItems = () => {
    const { user } = useAuth();
    const [recoveredItems, setRecoveredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isTableLayout, setIsTableLayout] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/myRecoveredItems/${user.email}`,
                    { withCredentials: true }
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

    const toggleLayout = () => {
        setIsTableLayout(!isTableLayout);
    };

    return (
        <>
            <Helmet>
                <title>Recovered Items - Traceback</title>
            </Helmet>
            <div className={`p-12 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                <h1 className="text-3xl font-bold text-center">My Recovered Items</h1>

                <button
                    onClick={toggleLayout}
                    className="px-4 py-2 mt-4 text-gray-500 border rounded-md dark:text-gray-200"
                >
                    {isTableLayout ? <CiGrid42 /> : <CiViewTable />}
                </button>

                {loading ? (
                    <Loading />
                ) : recoveredItems.length === 0 ? (
                    <p className="mt-4 text-center text-gray-500">No recovered items found.</p>
                ) : (
                    <>
                        {isTableLayout ? (
                            <div className="mt-8 overflow-x-auto">
                                <table className={`table table-zebra ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} max-w-full`}>
                                    <thead>
                                        <tr className={`bg-gray-200 ${theme === 'dark' ? 'bg-gray-800' : ''}`}>
                                            <th className="p-4 text-left border border-gray-300">Title</th>
                                            <th className="p-4 text-left border border-gray-300">Category</th>
                                            <th className="p-4 text-left border border-gray-300">Location</th>
                                            <th className="p-4 text-left border border-gray-300">Recovered Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recoveredItems.map((item) => (
                                            <tr key={item._id} className={`${theme === 'dark' ? 'bg-gray-800 text-gray-50' : ''}`}>
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
                        ) : (
                            <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                                {recoveredItems.map((item) => (
                                    <div
                                        key={item._id}
                                        className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-900 text-gray-50' : 'bg-white'}`}
                                    >
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <p><strong>Category:</strong> {item.category}</p>
                                        <p><strong>Location:</strong> {item.location}</p>
                                        <p><strong>Recovered Date:</strong> {new Date(item.dateRecovered).toLocaleDateString()}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default RecoveredItems;
