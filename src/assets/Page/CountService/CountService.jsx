import React from 'react';


import CounterCard from '../../component/CounterCard/CounterCard';

const MedicalStats = () => {
  return (
    <div className='bg-gray-100 py-16 '>
      <h1 className='text-3xl font-bold text-center mb-4'>We Provide Best Medical Services</h1>
      <p className='text-center text-gray-500 mb-10 max-w-3xl mx-auto'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4'>
        <CounterCard  end={199} title='Total Doctors'></CounterCard>
        <CounterCard  end={467} title='Total Reviews'></CounterCard>
        <CounterCard  end={1900} title='Patients' ></CounterCard>
        <CounterCard end={300} title='Total Staffs'></CounterCard>
      </div>
    </div>
  );
};

export default MedicalStats;
