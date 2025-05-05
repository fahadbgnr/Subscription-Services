import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='' >
            <nav className='w-11/12 mx-auto my-5'>
            <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
            <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
            </main>
        
                <footer className='w-11/12 mx-auto sticky'>
                <Footer></Footer>
                </footer>
            
            
        </div>
    );
};

export default HomeLayout;