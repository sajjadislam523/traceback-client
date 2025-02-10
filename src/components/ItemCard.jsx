import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <motion.div
            className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md group dark:bg-gray-800 dark:text-gray-50 hover:shadow-2xl"
            whileHover={{ scale: 1.02 }}
        >
            {/* Image Section */}
            <div className="relative">
                <img
                    src={item.thumbnail}
                    alt="Item Thumbnail"
                    className="object-cover object-center w-full h-56 transition-transform duration-300 md:h-48 lg:h-56 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black to-transparent group-hover:opacity-50"></div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-4">
                {/* Content Area that grows to push button down */}
                <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 truncate dark:text-gray-100">
                        {item.title}
                    </h2>
                    <p className="w-full overflow-hidden text-sm text-gray-600 text-ellipsis whitespace-nowrap dark:text-gray-300">
                        {item.description}
                    </p>
                    <div className="pt-3 mt-4 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-600 dark:text-gray-400">
                        <p>
                            <span className="font-semibold">Category:</span>{" "}
                            {item.category}
                        </p>
                        <p>
                            <span className="font-semibold">Type:</span>{" "}
                            {item.postType}
                        </p>
                        <p>
                            <span className="font-semibold">Location:</span>{" "}
                            {item.location}
                        </p>
                        <p>
                            <span className="font-semibold">Status:</span>{" "}
                            {item.status}
                        </p>
                    </div>
                </div>

                {/* Button fixed at the bottom */}
                <div className="mt-4">
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to={`/items/${item._id}`}
                            className="block px-4 py-2 font-semibold tracking-wide text-center text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            View Details
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ItemCard;
