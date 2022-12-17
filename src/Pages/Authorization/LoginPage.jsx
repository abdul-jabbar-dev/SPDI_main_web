import React from 'react';
import { FiArrowDown } from '@react-icons/all-files/fi/FiArrowDown'
import { FaArrowCircleLeft } from '@react-icons/all-files/fa/FaArrowCircleLeft'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const CustomHeader = () => {
    return (<Helmet>
        <title>Login</title>
    </Helmet>)
}
const LoginPage = () => {
    const location = useNavigate()
    return (
        <div>
            <CustomHeader></CustomHeader>
            {/* <!-- page --> */}

            <main
                className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">

                {/* <!-- component --> */}
                <section className="flex w-[30rem]  relative flex-col space-y-10">
                    <div className="flex flex-col">
                        <FaArrowCircleLeft onClick={() => location(-1)} className=' ml-6 sm:ml-0 w-10 h-10 cursor-pointer '></FaArrowCircleLeft>
                        {/* <Link to={'/'}><FaArrowCircleLeft className=' ml-6 sm:ml-0 w-10 h-10 cursor-pointer '></FaArrowCircleLeft></Link> */}
                        <div className="text-center text-4xl font-medium">Log In</div>
                    </div>
                    <div className="relative  ">
                        <FiArrowDown className="w-4 h-4 absolute -top-1 left-[7rem] m-4 pointer-events-none text-gray-300 z-10 font-extrabold "></FiArrowDown>
                        <select className="border relative w-[160px] border-gray-300 rounded-full text-white h-10 pl-5 pr-10 bg-slate-900 hover:border-gray-400 focus:outline-none appearance-none">
                            <option disabled> What's your role</option>
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Administrator</option>

                        </select>
                    </div>
                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="text"
                            placeholder=" User Id"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>

                    <button
                        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                    >
                        LOG IN
                    </button>

                    <a
                        href="#a"
                        className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
                    >FORGOT PASSWORD?</a
                    >
                </section>
            </main>
        </div>
    );
};

export default LoginPage;