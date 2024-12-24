import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import documentsFound from "../assets/homeCard/documentsFound.jpg";
import dogFound from "../assets/homeCard/dogFound.jpg";
import lostWallet from "../assets/homeCard/lostWallet.jpg";
import ItemCard from "../components/ItemCard.jsx";
import useTheme from "../hooks/useTheme.jsx";

const Home = () => {
    const { theme } = useTheme();

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allItems`)
        setItems(data);
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
            <Helmet>
                <title>Home - TraceBack</title>
            </Helmet>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                    {/* Hero Section */}
                    <section className="relative py-20 text-white bg-blue-500 dark:bg-blue-800">
                        <div className="container px-6 mx-auto text-center">
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Welcome to TraceBack</h1>
                            <p className="mb-8 text-lg md:text-xl">
                                Helping you reconnect with lost and found items effortlessly.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/addItems"
                                    className="px-6 py-3 font-semibold text-blue-500 bg-white rounded-lg shadow-md dark:text-blue-800 hover:bg-blue-100 dark:hover:bg-gray-300"
                                >
                                    Report Lost Item
                                </Link>
                                <Link
                                    to="/allItems"
                                    className="px-6 py-3 font-semibold bg-blue-700 rounded-lg shadow-md dark:bg-blue-900 hover:bg-blue-800 dark:hover:bg-blue-600"
                                >
                                    Find Lost Item
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Latest Find & Lost Items Section */}
                    <section className="py-16 bg-gray-100 dark:bg-gray-800">
                        <div className="container px-6 mx-auto">
                            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                                Latest Find & Lost Items
                            </h2>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {items
                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                    .slice(0, 6)
                                    .map((item) => (
                                        <ItemCard key={item._id} item={item} />
                                    ))}
                            </div>
                            <div className="mt-8 text-center">
                                <Link
                                    to="/allItems"
                                    className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                                >
                                    See All
                                </Link>
                            </div>
                        </div>
                    </section>


                    {/* How It Works Section */}
                    <section className="py-16 bg-gray-100 dark:bg-gray-800">
                        <div className="container px-6 mx-auto text-center">
                            <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-gray-100">How It Works</h2>
                            <motion.div
                                className="grid grid-cols-1 gap-8 md:grid-cols-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">1. Report</h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Provide details about the lost or found item on our platform.
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">2. Search</h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Search through our database to find matching items.
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">3. Connect</h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Contact the person who reported the item for verification.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Success Stories Section */}
                    <section className="py-16 bg-blue-50 dark:bg-gray-800">
                        <div className="container px-6 mx-auto">
                            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">Success Stories</h2>
                            <motion.div
                                className="grid grid-cols-1 gap-6 md:grid-cols-3"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <img src={lostWallet} alt="Story 1" className="mb-4 rounded-lg" />
                                    <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">Lost Wallet Found</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        "Thanks to TraceBack, I was able to find my lost wallet in just two days!"
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <img src={dogFound} alt="Story 2" className="mb-4 rounded-lg" />
                                    <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">Found Dog Reunited</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        "The platform made it easy to connect with the dog's owner."
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <img src={documentsFound} alt="Story 3" className="mb-4 rounded-lg" />
                                    <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">Important Documents</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        "I was worried I would never find my documents, but TraceBack saved the day."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Extra Sections */}
                    <section className="py-16 bg-gray-50 dark:bg-gray-800">
                        <div className="container px-6 mx-auto">
                            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">Why Choose TraceBack?</h2>
                            <motion.div
                                className="grid grid-cols-1 gap-6 md:grid-cols-2"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">Secure Platform</h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        We ensure all information is handled securely and responsibly.
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">Community Driven</h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        A growing community committed to helping each other.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;
