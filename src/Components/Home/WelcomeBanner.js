import React from 'react';
import { Link } from 'react-router-dom';
import welcomeImage from '../../resource/1.png';
const WelcomeBanner = () => {
return (
<>
    <div className='flex flex-col relative z-20 items-center justify-center text-white '>
        <div className="container  absolute z-30">
            <h2 className='  md:text-5xl text-2xl  font-semibold md:text-left text-center'>Modern Industry for Skills Development </h2>
            <p className='md:text-2xl font-light text-md md:mb-4'>We make/develop/produce any Engg. product/system/spare part for professional use</p>

            <Link to={'/course'} className='text-blue-500 py-2 px-4 uppercase font-medium '>Find your department</Link>
        </div>
        <img src={welcomeImage } className="w-full opacity-80" alt="" />
    </div>
</>
);
};

export default WelcomeBanner;
