 
import React from 'react';

const ShortBanner = ({pageData}) => {
    console.log(pageData)
return (
<>
    <div className="grid md:grid-cols-3 gap-y-2 grid-cols-1 sm:gap-x-6 p-4 py-12 sm:text-center">

        <div className='shadow-2xl  w-full bg-sky-700 text-zinc-50 p-4 rounded-md'>
            <p className='text-2xl my-2 font-semibold'>{pageData.first_title}</p>
            <p className='text-gray-300'>{pageData.first_descreption}</p>
        </div>
        <div className='shadow-2xl  w-full bg-red-500 text-zinc-50 p-4 rounded-md'>
            <p className='text-2xl my-2 font-semibold'>{pageData.sec_title}</p>
            <p className='text-gray-300'>{pageData.sec_descreption}</p>
        </div>
        <div className='shadow-2xl  w-full bg-sky-700 text-zinc-50 p-4 rounded-md'>
            <p className='text-2xl my-2 font-semibold'>{pageData.third_title}</p>
            <p className='text-gray-300'>{pageData.third_descreption}</p>
        </div>
    </div>
</>
);
};

export default ShortBanner;
