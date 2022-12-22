import React from 'react'

function MentorDetails({ data }) {
    return (
        <div>
            <h2 className='font-bold text-gray-800 text-xl my-4'>
                Instructors
            </h2>
            <div className=' flex justify-between items-center lg:mr-8 mb-2'>
                <div>
                    <h2 className='font-bold text-purple-900 underline'>
                        {data.teacher}
                    </h2>
                    <p className='font-light'>
                        Assistant Engineer (O & M)
                    </p>
                </div>
                <div>
                    <img className='rounded-full h-16 w-16' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </div>
            </div>
            <p className='  text-xs font-semibold my-1'>
                lWe Also Feature Many Dynamic Components For React, NextJS, Vue And Angular.We Also Feature Many Dynamic Components For React, NextJS, Vue And Angular.We Also Feature Many Dynamic Components For React, NextJS, Vue And Angular.
            </p>
        </div>
    )
}

export default MentorDetails