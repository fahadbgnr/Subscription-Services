import React from 'react';
import premium from '../assets/premium.png';
import latest from '../assets/latest.png';
import AI from '../assets/AI.png';

const FeaturedContent = () => {
    return (
        <div>
            <section className="py-10 px-5 bg-gray-100 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-2xl shadow">
                        <h3 className="font-semibold text-lg mb-2">Premium Plan</h3>
                        <p className="text-gray-600 py-3">Get unlimited access to all services.</p>
                        <img className='rounded-2xl' src={premium} alt="" />
                        
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow">
                        <h3 className="font-semibold text-lg mb-2">Blog: Latest Tech Trends</h3>
                        <p className="text-gray-600 py-3">Stay updated with the newest trends in tech.</p>
                        <img className='rounded-2xl' src={latest} alt="" />
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow">
                        <h3 className="font-semibold text-lg mb-2">Top Product: AI Assistant</h3>
                        <p className="text-gray-600 py-3">Boost productivity with our AI tools.</p>
                        <img className='rounded-2xl' src={AI} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedContent;