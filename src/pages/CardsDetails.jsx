import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useLoaderData, useParams } from 'react-router';
import Cards from '../components/Cards';

const CardsDetails = () => {
    const data = useLoaderData();
    const {id}=useParams();
    const [card, setCard]= useState({});
    // console.log(data,id,card);

    useEffect(()=>{
        const cardsDetails = data.find(singleCard=> singleCard.id == id);
        setCard(cardsDetails);

    },[data, id]);

   
    return (
        <div>
            <header className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto my-5'>
                <section className='gap-5'>
                    <h2 className='font-bold mb-5 text-accent text-center'>Cards Details</h2>
                    <Cards card={card} ></Cards>
                </section>

            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CardsDetails;