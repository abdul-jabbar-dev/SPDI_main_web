import { useRef } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './../../globalComponents/Navbar';
import Footer from './../../globalComponents/Footer';
import { MdHelp } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { BsCalendarDateFill } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';
import { ImTrophy } from 'react-icons/im';
import { GiDuration } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';
import { MdAccessTimeFilled } from 'react-icons/md';
import { useEffect } from 'react';
import { useState } from 'react';
import MentorDetails from './MentorDetails';
import Loading from '../../globalComponents/Loading';
import { FaPlay } from 'react-icons/fa';

function SingleCourse() {

    const perams = useParams()
    const [data, setData] = useState({}) 
    const videoTag = useRef(null)
    useEffect(() => {
        fetch(process.env.REACT_APP_ROOT_URL + '/courses')
            .then(res => res.json())
            .then(res => setData(res.find(perCourse => perCourse._id === perams.courseid)))
    }, [perams.courseid])
    return (
        <div >
            <Navbar></Navbar>
            <div className="container py-16 bg-gray-100 mx-auto ">

                {data ? <div>

                    <div className="relative bg-blueGray-50">
                        <div className="flex flex-wrap items-center ">
                            <div className="w-full md:w-5/12 px-12 md:px-4 mx-auto -mt-78">
                                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                                    {data.video ? <div className="max-h-[340px] relative flex items-center justify-center ">
                                        <FaPlay onClick={e => {
                                            (videoTag.current).setAttribute('controls', "")
                                            videoTag.current.play();
                                            e.target.style.display = 'none'
                                        }} className='z-20 w-20 h-20 absolute opacity-30 hover:scale-125 hover:cursor-pointer hover:ease-in-out duration-200' />
                                        <video  height={'100%'} ref={videoTag} poster={`${process.env.REACT_APP_ROOT_URL}/${data.img}`} className="w-full align-middle rounded-t-lg  z-10" src={`${process.env.REACT_APP_ROOT_URL}/${data.video}`}></video>

                                    </div> : <div className="max-h-[340px] relative flex items-center justify-center ">
                                        <img alt="..." src={`${process.env.REACT_APP_ROOT_URL}/${data.img}`} height={'100%'} className="w-full align-middle rounded-t-lg" />
                                    </div>}



                                    <blockquote className="relative p-8 mb-4">
                                        <div className='flex justify-between'>
                                            <h4 className="text-xl font-bold text-white">
                                                {data?.title}
                                            </h4>
                                            <h4 className="text-xl font-semibold text-orange-500">
                                                {data?.price}<span>&#2547;</span>
                                            </h4>
                                        </div>
                                        <div className='flex'>
                                            {/* {Array((data?.rating)*1).fill(1).map((st, si) => <GoStar className='text-orange-500' key={si}></GoStar>)} */}
                                        </div>
                                        <p className="text-md font-light mt-2 text-white">
                                            {data?.description}
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="w-full md:w-7/12 px-4">
                                <div className="flex flex-wrap">
                                    <div className="w-full flex md:flex-col md:w-6/12 px-4 ">
                                        <div className="relative flex flex-col mt-4">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                    < TbCertificate className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                                                <p className="mb-4  text-gray-500 capitalize  ">
                                                    {
                                                        data?.completion
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-col min-w-0">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                    <MdHelp className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">
                                                    JavaScript Components
                                                </h6>
                                                <p className="mb-4  text-gray-500 capitalize  ">
                                                    {
                                                        data?.benefit
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex md:flex-col md:w-6/12 px-4">
                                        <div className="relative flex flex-col min-w-0 mt-4">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                    <FaPaperPlane className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                                                <p className=" mb-4  text-gray-500 capitalize   ">
                                                    {
                                                        data?.eligibility
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-col min-w-0">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                    <GrUpdate className=' text-gray-800 ' style={{ fontSize: '1.5rem' }} />
                                                </div>
                                                <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                                                <p className="mb-4  text-gray-500 capitalize  ">
                                                    {
                                                        data?.eligibility
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div >
                            <div className=" my-6 py-16 w-[98%] flex flex-col md:flex-row mx-auto rounded-xl bg-white px-4 shadow-lg">
                                <div className='flex w-full md:w-8/12 md:mx-6'>
                                    <div className="w-full">
                                        <h3 className=' mb-3 font-bold text-gray-800 text-xl'>Course Schedule</h3>
                                        {data?.date && <div className='flex items-center'>
                                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                <BsCalendarDateFill className="h-4 w-4 text-red-400" ></BsCalendarDateFill>
                                            </div>
                                            <div className='w-full '>
                                                <h4 className='text-sm text-gray-600'>{data?.date}</h4>
                                            </div>
                                        </div>}
                                        {data?.time && <div className='flex items-center my-2'>
                                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                                <MdAccessTimeFilled className="h-4 w-4 text-blue-400" ></MdAccessTimeFilled>
                                            </div>
                                            <div className='w-full '>
                                                <h4 className='text-sm text-gray-600'>{data?.time}</h4>
                                            </div>
                                        </div>}
                                        {data?.duration && <div className='flex items-center my-2'>
                                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                                <GiDuration className="h-4 w-4 text-orange-400" ></GiDuration>
                                            </div>
                                            <div className='w-full '>
                                                <h4 className='text-sm text-gray-600'>Total Duration: {data?.duration}</h4>
                                            </div>
                                        </div>}
                                    </div>
                                    <div className="w-full ">
                                        <h3 className=' mb-3 font-bold text-gray-800 text-xl'>After Completion</h3>
                                        <div className='flex items-center'>
                                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-green-100 bg-green-50">
                                                <ImTrophy className="h-4 w-4 text-green-400" />
                                            </div>
                                            <div className='w-full'>
                                                <h4 className='text-sm text-gray-600'> Certificate of completion</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-4/12 mt-6 md:mt-0 ">
                                    <MentorDetails data={data.mentor} />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className=" w-[98%] flex flex-col md:flex-row mx-auto rounded-xl bg-white px-4 py-16 shadow-lg">
                                {data.coursecontent && <div className='w-full md:mx-6'>
                                    <h3 className=' mb-3 font-bold text-gray-800 text-xl'>Course Countent</h3>
                                    <small className="m-0 p-0">{(data.coursecontent).length} lectures • 35 total Class</small>
                                    <div className="w-3/4 bg-slate-100 py-3 rounded">
                                        <ul className="">
                                            {data.coursecontent && (data.coursecontent).map((content, i) => <li key={i} className="text-neutral-600 list-disc ml-12 my-2">{content}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>

                </div> : <Loading></Loading>}
            </div>

            <Footer ></Footer>
        </div>
    )
}

export default SingleCourse