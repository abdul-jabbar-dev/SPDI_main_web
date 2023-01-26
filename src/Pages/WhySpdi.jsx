import React from 'react';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import WhySpdiQNA from '../Components/WhySpdi/WhySpdiQNA';
import WhySpdiFeature from '../Components/WhySpdi/WhySpdiFeature';
import { useEffect } from 'react';
import { useState } from 'react';


const WhySpdi = () => {
    const [whySpdiData, setWhySpdiData] = useState([])
    const [qnaData, setQnaData] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ROOT_URL}/whyspdi/qna`).then(res => res.json()).then(data => setQnaData(data))
        fetch(`${process.env.REACT_APP_ROOT_URL}/whyspdi/whatwedo`).then(res => res.json()).then(data => setWhySpdiData(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>

            <div className='container mx-auto'>
                <WhySpdiFeature whySpdiData={whySpdiData}></WhySpdiFeature>
                <WhySpdiQNA qnaData={qnaData}/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default WhySpdi;