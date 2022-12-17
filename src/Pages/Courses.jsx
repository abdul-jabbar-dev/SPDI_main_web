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

const courses = [
    { name: 'Architecture Engineering', image: ArchitectureEngineering },
    { name: 'Automobile Engineer', image: automobileEngineer },
    { name: 'Civil Engineering', image: CivilEngineering },
    { name: 'Computer Engineering', image: ComputerEngineering },
    { name: 'Data-Telecommunication Engineering', image: DataTelecommunicationEngineering },
    { name: 'Electrical Engineering', image: ElectricalEngineering },
    { name: 'Electronics Engineering', image: ElectronicsEngineering },
    { name: 'Telecommunication Engineering', image: telecommunicationEngineering },
    { name: 'Textile Engineering', image: TextileEngineering },
    { name: 'Mechanical Engineering', image: MechanicalEngineering },
    { name: 'Food Technology', image: FoodTechnology },

]
const CustomHeader = () => {
    return (<Helmet>
        <title>{('Courses').toUpperCase()}</title>
    </Helmet>)
}
const Courses = () => {
    return (
        <div className="bg-gray-100 ">
            <CustomHeader></CustomHeader>
            <Navbar></Navbar>
            <br />
            <div className=' container mx-auto  min-h-screen  grid grid-cols-3 gap-5 '>
                {
                    courses.map((item, i) => <CoursesItems name={item.name} img={item.image} key={i} i={i}> </CoursesItems>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;