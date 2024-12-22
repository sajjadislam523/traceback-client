import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth.jsx';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

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
        <div>
            <form onSubmit={handleLoginUser} className="max-w-sm p-6 mx-auto my-12 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-center text-white">
                    Login to your account
                </h2>
                <p className="mb-6 text-sm text-center text-gray-400">
                    Don’t have an account?{" "}
                    <Link to='/register' className="text-blue-500 hover:underline">
                        Sign up here
                    </Link>
                </p>

                <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-2 mb-4 font-medium text-gray-700 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                    <FcGoogle className="w-5 h-5 mr-2" />
                    Login with Google
                </button>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-gray-400 bg-gray-800">OR</span>
                    </div>
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        className="block w-full mt-2 p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        className="block w-full mt-2 p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <a href="#" className="text-sm text-blue-500 hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:ring-blue-500 focus:ring-offset-1"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
