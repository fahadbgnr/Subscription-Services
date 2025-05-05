import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=''>
            <header className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto my-5 bg-base-300 '>
            <Outlet></Outlet>

            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;