import React from 'react';
import CountUp from 'react-countup';



const CounterCard = ({ icon, end, title }) => {
  return (
    <div className=' shadow-md rounded-xl p-6 w-full max-w-7xl mx-auto text-center'>
      <div className='text-5xl mb-2'>{icon}</div>
      <h2 className='text-3xl font-extrabold text-blue-600'>
        <CountUp end={end} duration={10} />+
      </h2>
      <p className='text-gray-600 font-medium'>{title}</p>
    </div>
  );
};

export default CounterCard;
