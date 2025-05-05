import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SubscriptionCard from '../components/SubscriptionCard';

const SubscriptionBox = () => {
    const [subscriptionBox, setSubscriptionBox] = useState([]);
    const {id} =useParams();
    const data = useLoaderData();
    // console.log(data);
    useEffect(()=>{
        if(id == "0"){
            setSubscriptionBox(data);
        }

    },[id, data]);

    return <div> 
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                data.map(box=> <SubscriptionCard key={id} box={box}></SubscriptionCard>)
            }
            
        </div>
    </div>
    
};

export default SubscriptionBox;