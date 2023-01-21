import React from "react";
import PhotosMedia from "../Components/Media/PhotosMedia";
import Footer from "./../globalComponents/Footer";
import Navbar from "./../globalComponents/Navbar";
import mediaApi from "../Api/media";
import AllPhotos from "./../Components/Media/AllPhotos";
import { Helmet } from "react-helmet";

const CustomHeader = () => {
  return (
    <Helmet>
      <title>Events</title>
    </Helmet>
  );
};
function Media() {
  return (
    <>
      <CustomHeader></CustomHeader>
      <Navbar></Navbar>
      <div className='bg-gray-100'>
        <PhotosMedia mediaApi={mediaApi}></PhotosMedia>
        <AllPhotos mediaApi={mediaApi}></AllPhotos>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Media;
