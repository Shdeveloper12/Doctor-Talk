import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const DoctorDetails = () => {
    const { id } = useParams();
    const doctorId = parseInt(id);
    const data = useLoaderData();
    const singleDoctor = data.find(doctor => doctor.id === doctorId);

    if (!singleDoctor) {
        return <div className="text-center text-red-500 mt-10">Doctor not found.</div>;
    }

    const { name, image, register, education, working_place, available_days, doctor_fee } = singleDoctor;

    const handleBooking = () => {
        const newBooking = {
            id: doctorId,
            register,
            name,
            doctor_fee,
            available_days,
        };

        const existing = JSON.parse(localStorage.getItem('bookings')) || [];
        const updated = [...existing.filter(b => b.id !== doctorId), newBooking];
        localStorage.setItem('bookings', JSON.stringify(updated));
        toast.success(`Appointment scheduled for ${name} successfully!`);
    };

    return (
        <>
            <div className='max-w-7xl mx-auto p-20 rounded-2xl bg-white mt-16'>
                <div className="flex gap-5 lg:flex-row">
                    <img src={image} alt={`Profile of Dr. ${name}`} className="max-w-sm rounded-lg shadow-2xl w-80 h-90" />
                    <div className='mt-3'>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-6 text-gray-500">{education}</p>
                        <h4 className='text-gray-500'>Working at</h4>
                        <p className='font-bold py-4'>{working_place}</p>
                        <p className='py-4 border-t-2 border-gray-300 border-dashed'>
                            <i className="fa-regular fa-registered mt-1 pr-2"></i> {register}
                        </p>
                        <div className='flex gap-5 py-4 border-t border-gray-500 border-dashed'>
                            <span className='font-bold'>Availability</span>
                            <p className='text-orange-400'>{available_days}</p>
                        </div>
                        <div className='flex gap-5'>
                            <span className='font-bold'>Consultation Fee:</span>
                            <p className='text-blue-600'>${doctor_fee}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5 bg-white max-w-7xl mx-auto rounded-2xl mt-10'>
                <h1 className='text-center font-bold text-2xl pb-3'>Book an Appointment</h1>
                <div className='flex justify-between p-3 border-t-2 border-dashed border-gray-400'>
                    <h1 className='text-lg font-bold'>Availability</h1>
                    <h1 className='text-green-400 p-2 bg-green-50 rounded-full'>Doctor Available Today</h1>
                </div>
                <div className='py-4 border-t-2 border-dashed border-gray-400'>
                    <p className='bg-orange-100 rounded-full p-1 text-orange-400'>
                        <i className="fa-solid fa-circle-exclamation"></i> Due to high patient volume, we are currently accepting appointments for today only.
                    </p>
                </div>
                <div className='text-center text-white font-bold mt-5'>
                    <NavLink to='/booking'>
                        <button
                            onClick={handleBooking}
                            className='bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-all hover:cursor-pointer'>
                            Book Appointment Now
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default DoctorDetails;
