import React from 'react';
// import "swiper/css";
import CoursesItems from '../Components/Courses/CoursesItems';
import Navbar from '../globalComponents/Navbar';
import Footer from '../globalComponents/Footer';
import { Helmet } from 'react-helmet';
import { allCourses } from '../Api/course'

const CustomHeader = () => {
    return (<Helmet>
        <title>Courses</title>
    </Helmet>)
}
const Courses = () => {
    return (
        <div className="bg-gray-100 ">
            <CustomHeader></CustomHeader>
            <Navbar></Navbar>
            <br />
            <div className=' container mx-auto  min-h-screen  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    allCourses.map((item, i) => <CoursesItems name={item.title} img={item.img} discreption={item.discreption} key={i} i={i}> </CoursesItems>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;