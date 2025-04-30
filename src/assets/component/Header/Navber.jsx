import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navber.css'

const Navber = () => {
  const links = <>
    <div className='pl-4'>
      <nav>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}
        >Home</NavLink >
        <NavLink to='/Booking' className={({ isActive }) => isActive ? 'active-link' : ''}
        >Booking</NavLink >
        <NavLink to='/Blog' className={({ isActive }) => isActive ? 'active-link' : ''}
        >Blog</NavLink >
        <NavLink to='/Contact' className={({ isActive }) => isActive ? 'active-link' : ''}
        >Contact</NavLink >
      </nav>

    </div>



  </>

  return (
    <div className="navbar  max-w-6xl mx-auto  ">
      <div className="navbar-start mt-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex'><img className='w-10' src="../../../../assets/logo.png" alt="" /><a className="text-2xl pt-1 pl-2 font-bold ">Doctor Talk</a></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-blue-500 hover:bg-blue-600 px-5 text-white rounded-2xl">Emergency</a>
      </div>
    </div>
  );
};

export default Navber;