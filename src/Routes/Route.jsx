import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../assets/Page/Error/ErrorPage';
import Home from '../assets/Page/Home/Home';
import Booking from '../assets/Page/Booking/Booking';
import Blog from '../assets/Page/Blog/Blog';
import DoctorDetails from '../assets/Page/DoctorDetails/DoctorDetails';
import Contact from '../assets/Page/Contact/Contact';




export const router = createBrowserRouter([
  {
    path: "/",
     Component: Root,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
      {
        index: true,
        loader: ()=>fetch("doctorData.json"),
        path: "/",
        Component: Home,

      },
      {
        path: '/booking',
        Component: Booking,
      },
      {
        path: '/blog',
        Component: Blog,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/doctorDetails/:id',
        loader: ()=>fetch("./doctorData.json"),
        Component: DoctorDetails,
      }
     ]
  },
]);