import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './../../globalComponents/Navbar';
import Footer from './../../globalComponents/Footer';
import { MdHelp } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { TbCertificate } from 'react-icons/tb';



function SingleCourse() {
    const perams = useParams()

    return (
        <div >
            <Navbar></Navbar>

            <div className="container py-16 bg-gray-100 mx-auto">

                <section className="relative bg-blueGray-50">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-600">
                                <img alt="..." src="https://armiet.in/wp-content/uploads/2020/03/B1P1.jpeg" className="w-full align-middle rounded-t-lg" />
                                <blockquote className="relative p-8 mb-4">
                                    <h4 className="text-xl font-bold text-white">
                                        Great for your awesome project
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Putting together a page has never been easier than matching
                                        together pre-made components. From landing pages presentation
                                        to login areas, you can easily customise and built your pages.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                < TbCertificate className='opacity-70' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                                            <p className="mb-4  text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                                Notus JS comes with a huge number of Fully Coded CSS
                                                components.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <MdHelp className='opacity-70' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                JavaScript Components
                                            </h6>
                                            <p className="mb-4  text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 ">
                                                We also feature many dynamic components for React, NextJS,
                                                Vue and Angular.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <FaPaperPlane className='opacity-70' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                                            <p className="mb-4  text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                                This extension also comes with 3 sample pages. They are
                                                fully coded so you can start working instantly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <GrUpdate className='opacity-70' style={{ fontSize: '1.5rem' }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                                            <p className="mb-4  text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                                Built by developers for developers. You will love how easy
                                                is to to work with Notus JS.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col">
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">574 Messages</h2>
                                <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
                            </div>
                        </div>

                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">1823 Users</h2>
                                <p className="mt-2 text-sm text-gray-500">Last checked 3 days ago</p>
                            </div>
                        </div>
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">548 Posts</h2>
                                <p className="mt-2 text-sm text-gray-500">Last authored 1 day ago</p>
                            </div>
                        </div>
                        <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>

                            <div className="ml-4">
                                <h2 className="font-semibold">129 Comments</h2>
                                <p className="mt-2 text-sm text-gray-500">Last commented 8 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer ></Footer>
        </div>
    )
}

export default SingleCourse