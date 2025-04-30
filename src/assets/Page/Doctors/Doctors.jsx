import React, { useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount(data.length); 
  };

  const visibleDoctors = data.slice(0, visibleCount);

  return (
    <div className='text-center mt-16'>
      <h1 className='text-3xl font-bold'>Our Best Doctors</h1>
      <p className='py-4'>
        Our platform connects you with verified, experienced doctors across various specialties —
        all at your convenience. Whether it's a <br />
        routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl gap-4'>
        {visibleDoctors.map((singleDoctor) => (
          <Doctor key={singleDoctor.Id} singleDoctor={singleDoctor} />
        ))}
      </div>

      {visibleCount < data.length && (
        <button
          onClick={handleSeeMore}
          className='mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all'
        >
          View All Doctors
        </button>
      )}
    </div>
  );
};

export default Doctors;
