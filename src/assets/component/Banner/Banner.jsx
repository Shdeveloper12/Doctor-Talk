import React from 'react';

const Banner = () => {
    return (
        <div className='p-16 text-center  bg-gray-100 border-3 max-w-7xl mx-auto border-white rounded-2xl mt-5'>
            <h1 className='text-3xl font-bold'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className='py-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            <div className='flex  justify-center pb-5'>
                <div className=" flex gap-3">
                    <div >
                        
                            
                            <input className='w-150 h-10 bg-white p-3 rounded-4xl'  type="text" placeholder="Search any doctor..." required />
                        
                        
                    </div>
                    <button className="btn btn-neutral  hover:bg-blue-600 rounded-4xl bg-blue-500 border-none">Search Now</button>
                </div>

            </div>
            <div className='flex gap-4 justify-center'>
                <img src="../../../../assets/banner-img-1.png" alt="" />
                <img src="../../../../assets/banner-img-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;