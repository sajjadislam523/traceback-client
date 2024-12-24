import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth.jsx';
import useTheme from '../../hooks/useTheme.jsx';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const { theme } = useTheme();

    const { signInWithGoogle, logIn, setUser } = useAuth()

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle()

            Swal.fire({
                title: 'Login Successful!',
                text: 'You have successfully logged in with Google.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
            });
            navigate(from, { replace: true })
        } catch (err) {
            console.error(err)
            Swal.fire({
                title: 'Login Failed!',
                text: 'Something went wrong while trying to log in. Please try again.',
                icon: 'error',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#d33',
            });
        }
    }

    const handleLoginUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await logIn(email, password).then(res => {

                setUser(res.user)
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have successfully logged in.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#3085d6',
                });
                navigate(from, { replace: true })
            })
        } catch (err) {
            console.error(err)
            Swal.fire({
                title: 'Login Failed!',
                text: 'Something went wrong while trying to log in. Please try again.',
                icon: 'error',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#d33',
            });
        }
    }

    return (
        <>
            <Helmet>
                <title>Login - Traceback</title>
            </Helmet>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <form
                    onSubmit={handleLoginUser}
                    className={`max-w-sm p-6 mx-auto my-12 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                >
                    <h2
                        className={`mb-4 text-2xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                            }`}
                    >
                        Login to your account
                    </h2>

                    <p className={`my-4 text-sm text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Don’t have an account?{" "}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                        >
                            <Link to="/register" className={`hover:underline ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                                Sign up here
                            </Link>
                        </motion.div>.
                    </p>

                    {/* Google Login Button */}
                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className={`flex items-center justify-center w-full px-4 py-2 mb-4 font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 ${theme === 'dark'
                            ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-blue-400 focus:ring-offset-gray-800'
                            : 'bg-white text-gray-700 hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-gray-100'
                            }`}
                    >
                        <FcGoogle className="w-5 h-5 mr-2" />
                        Login with Google
                    </button>

                    {/* Divider */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div
                                className={`w-full border-t ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                                    }`}
                            ></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span
                                className={`px-2 ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
                                    }`}
                            >
                                OR
                            </span>
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                }`}
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`block w-full mt-2 p-2.5 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${theme === 'dark'
                                ? 'bg-gray-700 border-gray-600 text-white'
                                : 'bg-gray-100 border-gray-300 text-gray-900'
                                }`}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                }`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`block w-full mt-2 p-2.5 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${theme === 'dark'
                                ? 'bg-gray-700 border-gray-600 text-white'
                                : 'bg-gray-100 border-gray-300 text-gray-900'
                                }`}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="flex items-center justify-between mb-4">
                        <a
                            href="#"
                            className={`text-sm hover:underline ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                }`}
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <motion.div
                        whileHover={{
                            scale: 1.05, // Slightly enlarge on hover
                            boxShadow: theme === "dark" ? "0px 8px 15px rgba(0, 0, 0, 0.3)" : "0px 8px 15px rgba(0, 123, 255, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }} // Slightly shrink on click
                        transition={{ duration: 0.2 }} // Smooth transition
                    >
                        <button
                            type="submit"
                            className={`w-full rounded-lg text-sm px-5 py-2.5 text-center font-medium focus:ring-4 focus:ring-offset-1 ${theme === "dark"
                                ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 focus:ring-offset-gray-800"
                                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-gray-100"
                                }`}
                        >
                            Login
                        </button>
                    </motion.div>
                </form>
            </div>
        </>
    );
};

export default Login;
