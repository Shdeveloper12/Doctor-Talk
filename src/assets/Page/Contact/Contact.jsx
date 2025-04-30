import React from 'react';
import { NavLink } from 'react-router';

const Contact = () => {
    return (
        <>
        <div className='max-w-7xl mx-auto  flex justify-center mt-16'>
            <img className='w-200 ' src="../../../../assets/shutterstock_774749455.jpg" alt="" />
            
        </div>
        <div className='text-center mb-20 mt-4  w-32 mx-auto  text-white'>
            <NavLink to='/'><button className='p-2 bg-blue-500 hover:cursor-pointer rounded hover:bg-blue-600'>Back to home</button></NavLink>
        </div>
        </>
        
    );
};

export default Contact;