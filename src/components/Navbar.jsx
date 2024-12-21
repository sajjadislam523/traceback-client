import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

const Navbar = () => {
    const { user, logOut } = useAuth();

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
        <div className="px-6 shadow-lg navbar">
            <div className="flex-1">
                <Link
                    to="/"
                    className="text-2xl font-bold text-indigo-600 hover:text-indigo-700"
                >
                    TraceBack
                </Link>
            </div>

            <div className="items-center hidden gap-6 md:flex">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-medium underline"
                            : "hover:text-indigo-500 text-gray-600"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/allItems"
                    className={({ isActive }) =>
                        isActive
                            ? "text-indigo-600 font-medium underline"
                            : "hover:text-indigo-500 text-gray-600"
                    }
                >
                    Lost & Found
                </NavLink>
            </div>

            {user ? (
                <div className="flex items-center gap-4">
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
                            className="p-4 mt-3 bg-white shadow-md menu menu-sm dropdown-content rounded-box w-52"
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
    );
};

export default Navbar;
