import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className=' text-center mx-auto max-w-7xl mt-20 p-16'>
            <h1 className='font-bold text-2xl'>No Doctor Found</h1>
            <p className='my-2'>No doctor found with this registration number</p>

            <p><i  class="fa-regular fa-registered mt-1 pr-2 "></i>BD 12459876</p>

            <NavLink to='/'><button className='mt-5 bg-blue-500 transition-all p-2 text-white rounded hover:cursor-pointer hover:bg-blue-700'>View All Doctors</button></NavLink>
        </div>
    );
};

export default ErrorPage;