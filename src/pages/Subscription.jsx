import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Subscription = () => {
    return (
        <div>
            <Helmet>
                <title>CHIP|subscription</title>
            </Helmet>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <div className='min-h-screen my-20 mx-5'>
            <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4  justify-center items-center">
                <h2 className="text-2xl font-bold">Your Subscription</h2>
                <div>
                    <p><strong>Plan:</strong> Premium</p>
                    <p><strong>Renewal Date:</strong> 2025-06-01</p>
                </div>
                <div>
                    <h3 className="font-semibold mt-4">Billing Info</h3>
                    <p>Card: **** **** **** 1234</p>
                    <p>Next Payment: $19.99</p>
                </div>
                <div>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Change Plan</button>
                    <button className="ml-2 mt-4 bg-red-500 text-white px-4 py-2 rounded">Cancel Subscription</button>
                </div>
            </div>
            </div>
            <footer className='w-11/12 mx-auto my-3'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Subscription;