import React, { useState } from 'react';
import Doctor from '../Doctors/Doctors'; // your card component

const DoctorList = ({ doctors }) => {
  const [visible, setVisible] = useState(6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {doctors.slice(0, visible).map((doctor) => (
          <Doctor key={doctor.id} singleDoctor={doctor} />
        ))}
      </div>

      {visible < doctors.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisible(doctors.length)}
            className="bg-blue-100 text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"
          >
            View All Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
