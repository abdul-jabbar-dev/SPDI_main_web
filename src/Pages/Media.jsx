import React from 'react'
import PhotosMedia from '../Components/Media/PhotosMedia';
import Footer from './../globalComponents/Footer';
import Navbar from './../globalComponents/Navbar';
import mediaApi from '../Api/media';
import AllPhotos from './../Components/Media/AllPhotos';
function Media() { 
    return (
        <>
            <Navbar></Navbar>
            <body className="bg-gray-100">
            <PhotosMedia mediaApi={mediaApi}></PhotosMedia>
            <AllPhotos mediaApi={mediaApi}></AllPhotos>
            </body>
            <Footer ></Footer>
        </>
    )
}

export default Media