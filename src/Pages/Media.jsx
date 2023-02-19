import React from "react";
import PhotosMedia from "../Components/Media/PhotosMedia";
import Footer from "./../globalComponents/Footer";
import Navbar from "./../globalComponents/Navbar";
import AllPhotos from "./../Components/Media/AllPhotos";
import { useEffect, useState } from "react";
import Loading from './../globalComponents/Loading';

function Media() {
  const [allEvent, setAllEvent] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_ROOT_URL}/events`)
      .then(res => res.json())
      .then(res => {
        setAllEvent(res)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      <Navbar></Navbar>
      {
        isLoading ? <Loading></Loading> : <div className='bg-gray-100'>
          <PhotosMedia mediaApi={allEvent}></PhotosMedia>
          <AllPhotos mediaApi={allEvent}></AllPhotos>
        </div>
      }
      <Footer></Footer>
    </>
  );
}

export default Media;
