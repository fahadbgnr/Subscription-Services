import React from 'react';
import { Outlet, useNavigation  } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div className='' >
            <nav className='w-11/12 mx-auto my-5'>
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
            </nav>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                {
                    state == 'loading'? <Loading/>  :<Outlet></Outlet>
                }
            
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