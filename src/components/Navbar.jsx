import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Import React Icons
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/brandLogo.png";
import useAuth from "../hooks/useAuth.jsx";
import useTheme from "../hooks/useTheme.jsx";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // for mobile menu toggle

    const links = (
        <div className="flex flex-col gap-2 text-sm">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `font-medium ${
                        isActive
                            ? "underline text-indigo-600 dark:text-indigo-400"
                            : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                    } md:hidden`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/allItems"
                className={({ isActive }) =>
                    `font-medium ${
                        isActive
                            ? "underline text-indigo-600 dark:text-indigo-400"
                            : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                    } md:hidden`
                }
            >
                Lost & Found
            </NavLink>
            <NavLink
                to="/addItems"
                className={({ isActive }) =>
                    isActive
                        ? "font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                }
            >
                Add Item
            </NavLink>
            <NavLink
                to="/myItems"
                className={({ isActive }) =>
                    isActive
                        ? "font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                }
            >
                Manage My Items
            </NavLink>
            <NavLink
                to="/allRecovered"
                className={({ isActive }) =>
                    isActive
                        ? "font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        : "hover:text-indigo-500 text-gray-600 dark:text-gray-100"
                }
            >
                Recovered Items
            </NavLink>
            <NavLink
                to="/blogPost"
                className={({ isActive }) =>
                    `font-medium ${
                        isActive
                            ? "underline text-indigo-600 dark:text-indigo-400"
                            : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                    } md:hidden`
                }
            >
                Blog
            </NavLink>
        </div>
    );

    return (
        <div
            className={`px-6 py-4 sticky top-0 z-50 shadow-lg navbar transition-colors duration-300 ${
                theme === "dark"
                    ? "bg-gray-900 text-gray-100"
                    : "bg-gray-100 text-gray-900"
            }`}
        >
            {/* Left Section */}
            <div className="flex-1 gap-2">
                <img src={logo} alt="" className="w-10" />
                <Link
                    to="/"
                    className={`text-2xl font-bold transition-colors duration-300 ${
                        theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-600 hover:text-indigo-700"
                    }`}
                >
                    TraceBack
                </Link>
            </div>

            {/* Center Links for larger screens */}
            <div className="items-center hidden gap-6 lg:flex">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-medium ${
                            isActive
                                ? "underline text-indigo-600 dark:text-indigo-400"
                                : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                        }`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/allItems"
                    className={({ isActive }) =>
                        `font-medium ${
                            isActive
                                ? "underline text-indigo-600 dark:text-indigo-400"
                                : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                        }`
                    }
                >
                    Lost & Found
                </NavLink>
                <NavLink
                    to="/blogPost"
                    className={({ isActive }) =>
                        `font-medium ${
                            isActive
                                ? "underline text-indigo-600 dark:text-indigo-400"
                                : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                        }`
                    }
                >
                    Blog
                </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 ml-4 lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`text-gray-600 dark:text-gray-100 focus:outline-none transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "rotate-90" : ""
                    }`}
                >
                    {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`${
                    isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                } absolute right-0 z-10 w-full p-4 bg-white shadow-lg lg:hidden top-16 dark:bg-gray-800 transition-all duration-300 ease-in-out`}
            >
                {links}
                <div className="mt-4">
                    <button
                        onClick={logOut}
                        className={`mt-4 btn btn-sm hover:bg-red-600
            ${
                theme === "dark"
                    ? "bg-red-500 text-gray-100"
                    : "bg-red-500 text-white"
            }
        `}
                    >
                        Logout
                    </button>
                    {!user && (
                        <Link
                            to="/login"
                            className="mt-4 text-white bg-indigo-500 btn btn-sm hover:bg-indigo-600"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {/* Right Section for desktop */}
            <div className="items-center hidden gap-4 ml-4 lg:flex">
                {/* Theme Toggle */}
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="Toggle1"
                        className="inline-flex items-center space-x-4 cursor-pointer"
                    >
                        <span className="relative">
                            <input
                                checked={theme === "dark"}
                                onChange={toggleTheme}
                                id="Toggle1"
                                type="checkbox"
                                className="hidden peer"
                            />
                            <div className="w-10 h-6 bg-gray-400 rounded-full shadow-inner peer-checked:bg-indigo-600"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
                        </span>
                    </label>
                </div>

                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className={`btn btn-ghost btn-circle avatar hover:ring-2 ${
                                theme === "dark"
                                    ? "hover:ring-indigo-400"
                                    : "hover:ring-indigo-500"
                            }`}
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt={user?.displayName}
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className={`z-10 p-4 mt-3 shadow-md dropdown-content menu menu-sm box w-52
        ${
            theme === "dark"
                ? "bg-gray-800 text-gray-100 border border-gray-700"
                : "bg-white text-gray-900 border border-gray-200"
        }
    `}
                        >
                            {links}
                        </div>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="text-white bg-indigo-600 btn btn-sm hover:bg-indigo-700"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
