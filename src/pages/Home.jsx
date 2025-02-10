import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaHandshake, FaRegNewspaper, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import documentsFound from "../assets/homeCard/documentsFound.jpg";
import dogFound from "../assets/homeCard/dogFound.jpg";
import lostWallet from "../assets/homeCard/lostWallet.jpg";
import img1 from "../assets/lostItems/lostBag.jpg";
import img2 from "../assets/lostItems/lostDog.jpg";
import img3 from "../assets/lostItems/lostGadget.jpg";
import ItemCard from "../components/ItemCard.jsx";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme.jsx";

const Home = () => {
    const { theme } = useTheme();
    const { loading } = useAuth();

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/allItems`
        );
        setItems(data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <>
            <Helmet>
                <title>Home - TraceBack</title>
            </Helmet>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                    {/* Hero Section */}
                    <section className="relative p-4 text-white dark:bg-gray-700">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            className="container px-6 mx-auto text-center"
                        >
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="relative h-[60vh] md:h-[65vh] lg:h-[70vh]">
                                    <img
                                        src={img1}
                                        alt="Welcome to TraceBack"
                                        className="absolute inset-0 object-cover w-full h-full rounded-lg"
                                    />
                                    {/* Black overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                                    {/* Text content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                                        <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:text-5xl">
                                            Welcome to TraceBack
                                        </h1>
                                        <p className="mb-6 text-sm md:text-lg lg:text-xl">
                                            Helping you reconnect with lost and
                                            found items effortlessly.
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
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="relative h-[60vh] md:h-[65vh] lg:h-[70vh]">
                                    <img
                                        src={img2}
                                        alt="Find Items Quickly"
                                        className="absolute inset-0 object-cover w-full h-full rounded-lg"
                                    />
                                    {/* Black overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                                    {/* Text content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                                        <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:text-5xl">
                                            Find Items Quickly
                                        </h1>
                                        <p className="mb-6 text-sm md:text-lg lg:text-xl">
                                            Search our extensive database for
                                            lost items and reconnect with their
                                            owners.
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            <Link
                                                to="/allItems"
                                                className="px-6 py-3 font-semibold text-blue-500 bg-white rounded-lg shadow-md dark:text-blue-800 hover:bg-blue-100 dark:hover:bg-gray-300"
                                            >
                                                Start Searching
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className="relative h-[60vh] md:h-[65vh] lg:h-[70vh]">
                                    <img
                                        src={img3}
                                        alt="Join the Community"
                                        className="absolute inset-0 object-cover w-full h-full rounded-lg"
                                    />
                                    {/* Black overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                                    {/* Text content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                                        <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:text-5xl">
                                            Join the Community
                                        </h1>
                                        <p className="mb-6 text-sm md:text-lg lg:text-xl">
                                            Be part of a growing community
                                            dedicated to helping others find
                                            their belongings.
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            <Link
                                                to="/blogPost"
                                                className="px-6 py-3 font-semibold text-blue-500 bg-white rounded-lg shadow-md dark:text-blue-800 hover:bg-blue-100 dark:hover:bg-gray-300"
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>

                    {/* Latest Find & Lost Items Section */}
                    <section className="py-12 bg-gray-100 dark:bg-gray-800">
                        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                            <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 sm:text-3xl dark:text-gray-100">
                                Latest Find & Lost Items
                            </h2>
                            <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {loading ? (
                                    <div className="flex items-center justify-center col-span-full">
                                        <Loading />
                                    </div>
                                ) : (
                                    items
                                        .sort(
                                            (a, b) =>
                                                new Date(b.date) -
                                                new Date(a.date)
                                        )
                                        .slice(0, 6)
                                        .map((item) => (
                                            <ItemCard
                                                key={item._id}
                                                item={item}
                                            />
                                        ))
                                )}
                            </div>
                            <div className="mt-8 text-center">
                                <Link
                                    to="/allItems"
                                    className="px-6 py-3 font-semibold text-white transition-all duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                                >
                                    See All
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="py-12 bg-gray-100 dark:bg-gray-800">
                        <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
                            <h2 className="mb-8 text-2xl font-bold text-gray-800 sm:text-3xl dark:text-gray-100">
                                How It Works
                            </h2>
                            <motion.div
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Step 1: Report */}
                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <FaRegNewspaper className="text-4xl text-blue-500 dark:text-blue-300" />
                                    </div>
                                    <h3 className="mb-4 text-lg font-semibold text-blue-500 sm:text-xl dark:text-blue-300">
                                        1. Report
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-200 sm:text-base">
                                        Provide details about the lost or found
                                        item on our platform.
                                    </p>
                                </motion.div>

                                {/* Step 2: Search */}
                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <FaSearch className="text-4xl text-blue-500 dark:text-blue-300" />
                                    </div>
                                    <h3 className="mb-4 text-lg font-semibold text-blue-500 sm:text-xl dark:text-blue-300">
                                        2. Search
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-200 sm:text-base">
                                        Search through our database to find
                                        matching items.
                                    </p>
                                </motion.div>

                                {/* Step 3: Connect */}
                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <FaHandshake className="text-4xl text-blue-500 dark:text-blue-300" />
                                    </div>
                                    <h3 className="mb-4 text-lg font-semibold text-blue-500 sm:text-xl dark:text-blue-300">
                                        3. Connect
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-200 sm:text-base">
                                        Contact the person who reported the item
                                        for verification.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Success Stories Section */}
                    <section className="py-12 bg-blue-50 dark:bg-gray-800">
                        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                                Success Stories
                            </h2>
                            <motion.div
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Story 1 */}
                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <img
                                        src={lostWallet}
                                        alt="Story 1"
                                        className="object-cover w-full h-48 mb-4 rounded-lg"
                                    />
                                    <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                                        Lost Wallet Found
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        "Thanks to TraceBack, I was able to find
                                        my lost wallet in just two days!"
                                    </p>
                                </motion.div>

                                {/* Story 2 */}
                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <img
                                        src={dogFound}
                                        alt="Story 2"
                                        className="object-cover w-full h-48 mb-4 rounded-lg"
                                    />
                                    <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                                        Found Dog Reunited
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        "The platform made it easy to connect
                                        with the dog's owner."
                                    </p>
                                </motion.div>

                                {/* Story 3 */}
                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <img
                                        src={documentsFound}
                                        alt="Story 3"
                                        className="object-cover w-full h-48 mb-4 rounded-lg"
                                    />
                                    <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                                        Important Documents
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        "I was worried I would never find my
                                        documents, but TraceBack saved the day."
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Extra Sections */}
                    <section className="py-12 bg-gray-50 dark:bg-gray-800">
                        <div className="container px-6 mx-auto">
                            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                                Why Choose TraceBack?
                            </h2>
                            <motion.div
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">
                                        Secure Platform
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        We ensure all information is handled
                                        securely and responsibly.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">
                                        Community Driven
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        A growing community committed to helping
                                        each other.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">
                                        Easy to Use
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Our platform is designed to be
                                        user-friendly for everyone.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">
                                        24/7 Support
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        Our dedicated team is available to
                                        assist you at any time.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">
                                        Global Reach
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        We connect people from all over the
                                        world to help with lost and found items.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <h3 className="mb-4 text-xl font-semibold text-blue-500 dark:text-blue-300">
                                        Free to Use
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-200">
                                        TraceBack is completely free for anyone
                                        to use.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;
