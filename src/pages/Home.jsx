import React from "react";
import { Link } from "react-router-dom";
import documentsFound from "../assets/homeCard/documentsFound.jpg";
import dogFound from "../assets/homeCard/dogFound.jpg";
import lostWallet from "../assets/homeCard/lostWallet.jpg";
import useTheme from "../hooks/useTheme.jsx";

const Home = () => {
    const { theme } = useTheme();

    return (
        <div className={theme === "dark" ? "dark" : ""}>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
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


                <section className="py-16 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-6 mx-auto text-center">
                        <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-gray-100">How It Works</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                        </div>
                    </div>
                </section>


                <section className="py-16 bg-blue-50 dark:bg-gray-800">
                    <div className="container px-6 mx-auto">
                        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">Success Stories</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-gray-100 dark:bg-gray-900">
                    <div className="container px-6 mx-auto text-center">
                        <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-gray-100">Popular Categories</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/category/electronics" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                Electronics
                            </Link>
                            <Link to="/category/documents" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                Documents
                            </Link>
                            <Link to="/category/accessories" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                Accessories
                            </Link>
                            <Link to="/category/others" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                Others
                            </Link>
                        </div>
                    </div>
                </section>


                <footer className="py-6 text-white bg-gray-800 dark:bg-gray-700">
                    <div className="container px-6 mx-auto text-center">
                        <p className="text-sm">© 2024 TraceBack. All Rights Reserved.</p>
                        <p className="mt-2 text-sm">
                            Need help? <Link to="/contact" className="text-blue-400 hover:underline">Contact Us</Link>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
