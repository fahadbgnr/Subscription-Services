import React from 'react';
import { Outlet, useNavigation  } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';
import MySwiper from '../components/MySwiper';
import FeaturedContent from '../pages/FeaturedContent';
import Testimonials from '../pages/Testimonials';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div className='' >
            <nav className='w-11/12 mx-auto my-5'>
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
            <section className='w-11/12 mx-auto my-10'>
            <MySwiper></MySwiper>
            </section>
            </nav>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <h2 className='text-accent text-center py-5'>Subscription Services Section</h2>
                {
                    state == 'loading'? <Loading/>  :<Outlet></Outlet>
                }
            <section className='my-10'>
                <FeaturedContent></FeaturedContent>
            </section>
            <section className='my-10'>
                <Testimonials></Testimonials>
            </section>
            </section>
            <aside className='col-span-3 sticky top-2 h-fit'>
                <RightAside></RightAside>
            </aside>
            </main>
        
                <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
                </footer>
            
            
        </div>
    );
};

export default HomeLayout;