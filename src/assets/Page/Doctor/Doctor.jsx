import React, { use } from 'react';
import { Link } from 'react-router';

const Doctor = ({ singleDoctor }) => {
    const {id, name, education, register, status, experience, image } = singleDoctor;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-5 mx-auto">
                <figure>
                    <img className='w-80 h-80 rounded-3xl'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-2'>
                         <p className='text-green-500  bg-gray-100 rounded-2xl p-1'>{status}</p>
                         <p className='bg-blue-100 p-1 text-blue-500 rounded-2xl'>{experience}</p>
                    </div>
                   <h1 className='text-2xl flex justify-start font-semibold'>{name}</h1>
                   <h2 className='flex justify-start text-gray-400 font-semibold  mb-2'>{education}</h2>
                   <h2 className='flex justify-start text-gray-700 py-3 border-t-3 border-dotted border-gray-300'><i  class="fa-regular fa-registered mt-1 pr-2 "></i>{register}</h2>
                     <Link to={`/doctorDetails/${id}`}><button className='font-bold hover:bg-blue-400 hover:cursor-pointer transition-all hover:text-white text-blue-500 rounded-4xl p-2 border-blue-300 border-2'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;