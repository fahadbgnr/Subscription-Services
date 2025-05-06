import React from 'react';
import SubscriptionBox from './SubscriptionBox';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>CHIP | Home</title>
           </Helmet>
           <SubscriptionBox></SubscriptionBox>
        </div>
    );
};

export default Home;