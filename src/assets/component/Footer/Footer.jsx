import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router';
const Footer = () => {
    const link = <>
        <div className='pl-4'>
      <nav>
        <NavLink to='/' className={({ isActive }) => isActive ? 'link' : ''}
        >Home</NavLink >
        <NavLink to='/Booking' className={({ isActive }) => isActive ? 'link' : ''}
        >Booking</NavLink >
        <NavLink to='/Blog' className={({ isActive }) => isActive ? 'link' : ''}
        >Blog</NavLink >
        <NavLink to='/Contact' className={({ isActive }) => isActive ? 'link' : ''}
        >Contact</NavLink >
      </nav>

    </div>
    </>
    return (
        <footer className="footer footer-horizontal footer-center   p-10">
            
  <aside>
        <div className='flex '>
            <img className='w-10' src="../../../../assets/logo.png" alt="" />
            <h1 className='font-bold text-2xl pt-1.5 pl-2'>Doctor Talk</h1>
        </div>
    <div className='my-5'>
        {link}
    </div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4 text-3xl">
    <button><a href="https://www.facebook.com/SHShafayet237" target='_Blank'><i  class="fa-brands fa-facebook text-blue-500"></i></a></button>
    <button><a href=""><i class="fa-brands fa-square-x-twitter"></i></a></button>
   <button><a href="https://www.linkedin.com/in/md-shafayet-hosain-96a071349/" target='_Blank'><i class="fa-brands fa-linkedin text-blue-500"></i></a></button> 
    <button><a href="https://www.youtube.com/@SHWORLDVLOG" target='_Blank'><i class="fa-brands fa-youtube text-red-500"></i></a></button>

     </div>
  </nav>
</footer>
    );
};

export default Footer;