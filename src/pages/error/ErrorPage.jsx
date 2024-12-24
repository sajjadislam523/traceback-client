import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <Helmet>
                <title>
                    Not Found - Traceback
                </title>
            </Helmet>
            <div className="relative h-screen bg-center bg-no-repeat bg-cover font-poppins bg-errorBg">
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-full max-w-lg px-6 py-8 text-center text-white bg-gray-800 bg-opacity-75 rounded-lg shadow-lg">
                        <h1 className="mb-4 text-5xl font-bold">Oops!</h1>
                        <h2 className="mb-4 text-3xl font-semibold">Error 404</h2>
                        <p className="mb-6 text-lg">The page you're looking for seems to be lost.</p>

                        {/* Button with animation */}
                        <motion.button
                            onClick={handleGoHome}
                            className="px-6 py-3 text-base font-semibold text-white transition duration-300 bg-blue-500 rounded-full focus:outline-none hover:bg-blue-600"
                            whileHover={{
                                scale: 1.1,
                                rotate: 10,
                                transition: { ease: "easeInOut", duration: 0.4 }
                            }}
                            whileTap={{ scale: 0.95, transition: { ease: "easeInOut", duration: 0.2 } }}>
                            Go Back Home
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;