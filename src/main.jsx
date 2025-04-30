import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Route.jsx'
import {
  RouterProvider,
} from "react-router";
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-right" autoClose={3000}></ToastContainer>
    <RouterProvider router={router} />

  </StrictMode>,
)
