import React from 'react';
// import "swiper/css";
import CoursesItems from '../Components/Courses/CoursesItems';
import Navbar from '../globalComponents/Navbar';
import ArchitectureEngineering from '../resource/Courses/image/ArchitectureEngineering.jpg'
import automobileEngineer from '../resource/Courses/image/automobileEngineer.jpg'
import CivilEngineering from '../resource/Courses/image/CivilEngineering.jpg'
import ComputerEngineering from '../resource/Courses/image/ComputerEngineering.jpg'
import DataTelecommunicationEngineering from '../resource/Courses/image/Data-TelecommunicationEngineering.jpg'
import ElectricalEngineering from '../resource/Courses/image/ElectricalEngineering.jpg'
import ElectronicsEngineering from '../resource/Courses/image/ElectronicsEngineering.jpg'
import TextileEngineering from '../resource/Courses/image/TextileEngineering.jpg'
import telecommunicationEngineering from '../resource/Courses/image/telecommunicationEngineering.jpg'
import MechanicalEngineering from '../resource/Courses/image/MechanicalEngineering.jpg'
import FoodTechnology from '../resource/Courses/image/FoodTechnology.jpg'
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