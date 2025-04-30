import React from 'react';
import Banner from '../../component/Banner/Banner';
import Doctor from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import CountService from '../CountService/CountService';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
           <Banner></Banner>
           <Doctor data={data}></Doctor>
           <CountService></CountService>
           
        </div>
    );
};

export default Home;