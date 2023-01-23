import React from 'react'
import { useState } from 'react';

function MentorDetails({ data }) {
    console.log(data)
    return (
        <div>
            <h2 className='font-bold text-gray-800 text-xl my-4'>
                Instructors
            </h2>
            <div className=' flex justify-between items-center lg:mr-8 mb-2'>
                <div>
                    <h2 className='font-bold text-purple-900 underline'>
                        {data?.name}
                    </h2>
                    <p className='font-light'>
                        {data?.designation}
                    </p>
                </div>
                <div>
                    <img className='rounded-full h-16 w-16' src={`${process.env.REACT_APP_ROOT_URL}/${data?.image}`}></img>
                </div>
            </div>
            <p className='  text-xs font-semibold my-1'>
                {data?.description}
            </p>
        </div>
    )
}

export default MentorDetails