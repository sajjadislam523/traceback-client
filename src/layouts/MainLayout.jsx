import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 py-4 overflow-hidden font-poppins'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;