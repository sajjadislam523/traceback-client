import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import useTheme from "../hooks/useTheme.jsx";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const { theme, toggleTheme } = useTheme();

    const links = (
        <div className="flex flex-col gap-2 text-sm">
            <NavLink
                to="/addItems"
                className={({ isActive }) =>
                    isActive
                        ? "text-indigo-600 font-medium hover:underline"
                        : "hover:text-indigo-500"
                }
            >
                Add Item
            </NavLink>
            <NavLink
                to="/myItems"
                className={({ isActive }) =>
                    isActive
                        ? "text-indigo-600 font-medium hover:underline"
                        : "hover:text-indigo-500"
                }
            >
                Manage My Items
            </NavLink>
            <NavLink
                to="/allRecovered"
                className={({ isActive }) =>
                    isActive
                        ? "text-indigo-600 font-medium hover:underline"
                        : "hover:text-indigo-500"
                }
            >
                Recovered Items
            </NavLink>
        </div>
    );

    return (
        <div className="px-6 bg-gray-100 shadow-lg navbar dark:bg-gray-900 dark:text-gray-100">
            {/* Left Section */}
            <div className="flex-1">
                <Link
                    to="/"
                    className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                >
                    TraceBack
                </Link>
            </div>

            {/* Center Links for larger screens */}
            <div className="items-center hidden gap-6 md:flex">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-medium underline dark:text-indigo-400"
                            : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/allItems"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-medium underline dark:text-indigo-400"
                            : "hover:text-indigo-500 text-gray-600 dark:text-gray-300"
                    }
                >
                    Lost & Found
                </NavLink>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Theme Toggle */}
                <div className="flex items-center gap-2">

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            className="sr-only"
                        />
                        <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 peer-checked:after:translate-x-4 peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 dark:after:bg-gray-600 after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                </div>

                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-indigo-500"
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
                            className="z-10 p-4 mt-3 bg-white shadow-md dark:bg-gray-700 menu menu-sm dropdown-content rounded-box w-52"
                        >
                            {links}
                            <button
                                onClick={logOut}
                                className="mt-4 text-white bg-red-500 btn btn-sm hover:bg-red-600"
                            >
                                Logout
                            </button>
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
