import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth.jsx';

const Register = () => {
    const navigate = useNavigate()
    const { setUser, createNewUser, updateUserProfile } = useAuth()

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800 dark:text-white">
                    Create an Account
                </h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Username
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Enter name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="image-url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="image-url"
                            name='photoURL'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Register
                    </button>
                </form>
                <p className="mt-5 text-sm text-center text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-400"> Login here</Link>.
                </p>
            </div>
        </div>


    );
};

export default Register;