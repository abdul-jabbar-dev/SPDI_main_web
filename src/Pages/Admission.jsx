import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from './../globalComponents/Footer';
import Navbar from './../globalComponents/Navbar';

const CustomHeader = () => {
    return (<Helmet>
        <title>Admission</title>
    </Helmet>)
}
const Admission = () => {
    return (
        <>
            <CustomHeader></CustomHeader>

            <Navbar></Navbar>
            <br />
            <div className='container mx-auto'>
                <div className="grid grid-cols-6 ">

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Admission