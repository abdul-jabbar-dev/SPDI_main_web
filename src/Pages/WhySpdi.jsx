import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import WhySpdiQNA from '../Components/WhySpdi/WhySpdiQNA';  
import WhySpdiFeature from '../Components/WhySpdi/WhySpdiFeature';

const CustomHeader = () => {
    return (<Helmet>
        <title>AboutUs</title>
    </Helmet>)
}

const WhySpdi  = () => {
    return (
        <div>
            <CustomHeader></CustomHeader>
            <Navbar></Navbar>

            <div className='container mx-auto'>
                <WhySpdiFeature></WhySpdiFeature>
                <WhySpdiQNA />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default WhySpdi;