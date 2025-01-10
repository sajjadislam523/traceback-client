import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <div className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:text-gray-50 hover:shadow-xl">
            <img
                src={item.thumbnail}
                alt="Item Thumbnail"
                className="object-cover object-center w-full rounded-t-lg h-72 md:h-56 lg:h-64 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between flex-grow p-6 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-800 truncate dark:text-gray-100">
                        {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base line-clamp-2">
                        {item.description}
                    </p>
                </div>

                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <p>
                        <strong>Category:</strong> {item.category}
                    </p>
                    <p>
                        <strong>Type:</strong> {item.postType}
                    </p>
                    <p>
                        <strong>Location:</strong> {item.location}
                    </p>
                    <p>
                        <strong>Status:</strong> {item.status}
                    </p>
                </div>

                <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to={`/items/${item._id}`}
                        className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        View Details
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ItemCard;
