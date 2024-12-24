import { motion } from "framer-motion";
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth.jsx';
import useTheme from "../../hooks/useTheme.jsx";

const Register = () => {
    const navigate = useNavigate()
    const { setUser, createNewUser, updateUserProfile } = useAuth()
    const { theme } = useTheme();
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        const passwordCheck = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (!passwordCheck.test(password)) {
            setError("At least one uppercase and one lowercase letter required.");
            return;
        }

        try {
            const result = await createNewUser(email, password);
            await updateUserProfile(name, photoURL);
            setUser({ ...result.user, photoURL, displayName: name });
            Swal.fire({
                title: '<h3 class="text-green-600">Registration Successful!</h3>',
                html: `
                    <p class="text-gray-700">You have successfully registered.</p>
                    <p class="text-gray-500 text-sm">Welcome, <strong>${name}</strong>!</p>
                `,
                icon: 'success',
                confirmButtonText: 'Continue',
                confirmButtonColor: '#4CAF50',
                background: '#fefefe',
                color: '#333',
                footer: '<p class="text-gray-600 text-sm">Let’s get started!</p>',
            });
            navigate('/', { replace: true });
        } catch (err) {
            Swal.fire({
                title: '<h3 class="text-red-600">Registration Failed!</h3>',
                html: `
                    <p class="text-gray-700">We encountered an error during registration:</p>
                    <p class="text-gray-500 text-sm"><strong>${err.message}</strong></p>
                `,
                icon: 'error',
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#E63946',
                background: '#fff4f4',
                color: '#333',
                footer: '<p class="text-gray-600 text-sm">Need help? <a href="/support" class="text-blue-600 hover:underline">Contact Support</a></p>',
            });
        }

    }

    return (
        <>
            <Helmet>
                <title>Register - Traceback</title>
            </Helmet>
            <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                <div className={`w-full max-w-sm p-8 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <h2 className={`mb-6 text-2xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        Create an Account
                    </h2>
                    <form onSubmit={handleSignUp}>
                        <div className="mb-5">
                            <label htmlFor="name" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                Username
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`shadow-sm text-sm rounded-lg block w-full p-2.5 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`}
                                placeholder="Enter name"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="image-url" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="image-url"
                                name="photoURL"
                                className={`shadow-sm text-sm rounded-lg block w-full p-2.5 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`}
                                placeholder="Enter image URL"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`shadow-sm text-sm rounded-lg block w-full p-2.5 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className={`shadow-sm text-sm rounded-lg block w-full p-2.5 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`}
                                placeholder="Enter password"
                                required
                            />
                            {error && (
                                <p className="mb-4 text-sm text-red-500">{error}</p>
                            )}
                        </div>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                boxShadow: theme === 'dark'
                                    ? "0px 8px 15px rgba(0, 0, 0, 0.3)"
                                    : "0px 8px 15px rgba(0, 123, 255, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <button
                                type="submit"
                                className={`w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-800' : 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300'}`}
                            >
                                Register
                            </button>
                        </motion.div>
                    </form>
                    <p className={`mt-5 text-sm text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Already have an account?{' '}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                        >
                            <Link to="/login" className={`hover:underline ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                                Login here
                            </Link>
                        </motion.div>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;