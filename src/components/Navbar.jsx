import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
    };

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                <Link to="/" className="text-2xl font-bold">
                    TraceBack
                </Link>


                <div className="hidden md:flex space-x-6 items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>
                        Home
                    </NavLink>
                    <NavLink to="/allItems" className={({ isActive }) => isActive ? "underline" : ""}>
                        Lost & Found
                    </NavLink>
                    {user && (
                        <>
                            <NavLink to="/addItems" className={({ isActive }) => isActive ? "underline" : ""}>
                                Add Item
                            </NavLink>
                            <NavLink to="/myItems" className={({ isActive }) => isActive ? "underline" : ""}>
                                Manage My Items
                            </NavLink>
                            <NavLink to="/allRecovered" className={({ isActive }) => isActive ? "underline" : ""}>
                                Recovered Items
                            </NavLink>
                        </>
                    )}
                </div>


                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="relative">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                            {isMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                                    <p className="p-3">Hi, {user.displayName || "User"}!</p>
                                    <hr />
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
                        >
                            Login
                        </Link>
                    )}
                </div>


                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            {isMenuOpen && (
                <div className="md:hidden bg-blue-500 py-4 px-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "underline block py-2" : "block py-2")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allItems"
                        className={({ isActive }) => (isActive ? "underline block py-2" : "block py-2")}
                    >
                        Lost & Found
                    </NavLink>
                    {user && (
                        <>
                            <NavLink
                                to="/addItems"
                                className={({ isActive }) => (isActive ? "underline block py-2" : "block py-2")}
                            >
                                Add Item
                            </NavLink>
                            <NavLink
                                to="/myItems"
                                className={({ isActive }) => (isActive ? "underline block py-2" : "block py-2")}
                            >
                                Manage My Items
                            </NavLink>
                            <NavLink
                                to="/allRecovered"
                                className={({ isActive }) => (isActive ? "underline block py-2" : "block py-2")}
                            >
                                Recovered Items
                            </NavLink>
                        </>
                    )}
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 bg-red-600 text-white rounded mt-2 hover:bg-red-700"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
