import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import AboutQNA from '../Components/About/AboutQNA';
import AboutFeature from '../Components/About/AboutFeature';

const CustomHeader = () => {
    return (<Helmet>
        <title>AboutUs</title>
    </Helmet>)
}

const AboutUs = () => {
    return (
        <div>
            <CustomHeader></CustomHeader>
            <Navbar></Navbar>

            <div className='container mx-auto'>
                <AboutFeature></AboutFeature>
                <AboutQNA />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;