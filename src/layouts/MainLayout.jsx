import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-268px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;