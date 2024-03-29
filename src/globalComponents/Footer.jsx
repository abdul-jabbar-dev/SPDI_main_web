import React from "react";
import { Link } from "react-router-dom";
import collageLogo from "../resource/headerlogo.png";
const Footer = () => {
  return (
    <div className='bg-[#f1f1f1] mt-5'>
      <footer className='text-gray-600 body-font'>
        <div className='flex justify-center py-6'>
          <div className=' flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <a
              href='/'
              className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'
            >
              <img
                src={collageLogo}
                className='w-16 h-16 text-white   rounded-full'
                alt=''
              />
              <span className='text-3xl text-gray-800 ml-2'>
                SKILLS AND PROFESSIONAL DEVELOPMENT INDUSTRY
              </span>
            </a>
          </div>
        </div>
        <div className='container px-5 pb-12 pt-7 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first'>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                Quick Links
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <Link to={"/course"}>
                    <span className='text-gray-600 hover:text-gray-800'>
                      Courses
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={"/why_spdi"}>
                    <span className='text-gray-600 hover:text-gray-800'>
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"}>
                    <span className='text-gray-600 hover:text-gray-800'>
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={"/feedback"}>
                    <span className='text-gray-600 hover:text-gray-800'>
                      Feedback
                    </span>
                  </Link>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                TOP COURSES
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    First Link
                  </a>
                </li>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    Second Link
                  </a>
                </li>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    Third Link
                  </a>
                </li>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                CATEGORIES
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    First Link
                  </a>
                </li>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    Second Link
                  </a>
                </li>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    Third Link
                  </a>
                </li>
                <li>
                  <a href='/' className='text-gray-600 hover:text-gray-800'>
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                Quick contact
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <a
                    href='/'
                    className='text-sm text-gray-600 hover:text-gray-800'
                  >
                    East Deshipara, Ward No 19 Gazipur Sadar, 1700
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='text-sm text-gray-600 hover:text-gray-800'
                  >
                    {" "}
                    01719-031163
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='text-sm text-gray-600 hover:text-gray-800'
                  >
                    info@ssrpolytechnic.edu.bd
                  </a>
                </li>
                <li>
                  <a
                    href='https://mistte.edu.bd/'
                    className='text-sm text-gray-600 hover:text-gray-800'
                  >
                    <span>And </span>Model institute of science and technology
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className='bg-gray-100'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-500 text-sm text-center sm:text-left'>
              © 2022 SPDI —
              <a
                href='https://www.facebook.com/abduljabbar1532/'
                rel='noopener noreferrer'
                className='text-gray-600 ml-1'
                target='_blank'
              >
                @Abduljabbar
              </a>
            </p>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>

              <a target={'_blank'} href='https://www.facebook.com/abduljabbar1532' className='text-gray-500' rel="noreferrer">
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </a>

              <a href='/' className='ml-3 text-gray-500'>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                </svg>
              </a>

              <a href='/' className='ml-3 text-gray-500'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>

              <a target={'_blank'} href='https://www.linkedin.com/in/abduljabbar15/' className='ml-3 text-gray-500' rel="noreferrer">
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='0'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </a>
              
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
