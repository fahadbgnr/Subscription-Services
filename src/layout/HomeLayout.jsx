import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='' >
            <nav className=''>
                <Navbar></Navbar>

            </nav>
            <div className="main">
                <Outlet></Outlet>

            </div>
            <footer className='footer'>
                <Footer></Footer>

            </footer>
        </div>
    );
};

export default HomeLayout;