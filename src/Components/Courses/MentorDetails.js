import React from 'react'
import Loading from '../../globalComponents/Loading'
function MentorDetails({ data }) {
    return (
        <div>
            {
                data ? <div>
                    <div class="mx-auto  ">

                        {/* <img src="img/profile.jpg" alt="profile picture" class="rounded-lg" */}
                        {/* <img src={`${process.env.REACT_APP_ROOT_URL}/${data?.image}`} style={{clipPath: 'circle(20%)'}} alt="image" class=" mr-4 inline-block h-24 w-24 rounded-2xl object-cover object-center"  ></img> */}


                        <div class="justify-between contents rounded-lg p-6 lg:flex lg:justify-start">
                            <img src={`${process.env.REACT_APP_ROOT_URL}/${data?.image}`} alt="product-image" class="w-full float-left w-48 mr-2  rounded-lg lg:w-40"></img>
                            <div class="lg:ml-4 lg:flex lg:w-full lg:justify-between">
                                <div class="mt-5 lg:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">{data.name}</h2>
                                    <div className='flex px-1 pt-1 text-xs text-gray-600 lg:flex-row flex-col'>
                                        <p>{data.designation}</p> <span className='hidden lg:block '>&emsp; || &emsp;</span>
                                        <p>{data.email}</p>
                                    </div>
                                    <p className='px-1 pb-1 text-gray-600 '>{data.qualification}</p>
                                    <p class="mt-1 text-xs text-gray-700">{data.description}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div> : <Loading></Loading>
            }
        </div >
    )
}

export default MentorDetails