import React from 'react'
import Loading from '../../globalComponents/Loading'
function MentorDetails({ data }) {

    return (
        <div>
            {
                data ? <div>
                    <h2 className='font-bold text-gray-800 text-xl '>
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
                            <img alt={data.name} className=' h-32 w-24' src={`${process.env.REACT_APP_ROOT_URL}/${data?.image}`}></img>
                        </div>
                    </div>
                    <p className='  text-xs font-semibold my-1'>
                        {data?.description}
                    </p>
                </div> : <Loading></Loading>
            }
        </div>
    )
}

export default MentorDetails