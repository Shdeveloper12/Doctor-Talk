import React from 'react';
import Navber from '../assets/component/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../assets/component/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;