import React, { useEffect, useState } from 'react';
import {
    Tooltip,Legend,RadialBar,RadialBarChart,ResponsiveContainer} from 'recharts';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router';

const Booking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('bookings');
        if (stored) {
            setBookings(JSON.parse(stored));
        }
    }, []);

    const handleCancel = (id) => {
        const updated = bookings.filter(b => b.id !== id);
        setBookings(updated);
        localStorage.setItem('bookings', JSON.stringify(updated));
        toast.error("Appointmet canceled.");
    };

    const radialData = bookings.map(booking => ({
        name: booking.name,
       uv: booking.doctor_fee,
        fill: '#FFA500'
    }));

    return (
        <>
            {bookings.length > 0 && (
                <div className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow p-6">
                    <h2 className='text-xl font-bold text-center mb-4'>Appointment Fee Overview</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadialBarChart
                            cx="50%"
                            cy="50%"
                            innerRadius="10%"
                            outerRadius="90%"
                            barSize={15}
                            data={radialData}
                        >
                            <RadialBar
                                minAngle={15}
                                label={{ position: 'insideStart', fill: '#040720' }}
                                background
                                clockWise
                                dataKey="uv"
                            />
                            <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                            <Tooltip />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            )}

            <div className='max-w-7xl mx-auto p-10 mt-16 bg-white rounded-2xl shadow-md'>
                {bookings.length === 0 ? (
                    <p className='text-center text-gray-600'>
                        <span className='text-2xl font-black text-black'>
                            You have not booked any appointment yet
                        </span><br /><br />
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.<br /><br />
                        <NavLink to='/'>
                            <button className='text-white bg-blue-500 p-2 rounded hover:bg-blue-700 transition-all'>
                                Book an Appointment
                            </button>
                        </NavLink>
                    </p>
                ) : (
                    <>
                        <div>
                            <h1 className='text-center font-bold text-3xl'>My Today Appointments</h1>
                            <p className='text-center py-5 text-gray-600'>
                                Your booked doctors for today appear below. You can cancel any if needed.
                            </p>
                        </div>

                        {bookings.map(booking => (
                            <div key={booking.id} className='border p-5 rounded-xl shadow mb-5'>
                                <div className='flex justify-between items-center flex-wrap gap-4'>
                                    <div>
                                        <h2 className='text-xl font-semibold'>{booking.name}</h2>
                                        <p className='text-gray-500 py-3'>
                                            <span className='font-semibold'>Availability:</span> {booking.available_days}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-gray-500'>
                                            <span className='font-semibold'>Consultation Fee:</span> ${booking.doctor_fee}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex justify-center'>
                                    <button
                                        onClick={() => handleCancel(booking.id)}
                                        className='mt-3 w-full bg-red-500 hover:cursor-pointer text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all'
                                    >
                                        Cancel Appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default Booking;
