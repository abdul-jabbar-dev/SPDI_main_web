import React from "react";
import Events from "../Components/Home/Events";
import ShortBanner from "../Components/Home/ShortBanner";
import Bannar from "../Components/Home/Bannar";
import Slider from "../Components/Home/Slider";
import Footer from "../globalComponents/Footer";
import Navbar from "../globalComponents/Navbar";
import WelcomeBanner from "../Components/Home/WelcomeBanner";
import { useState, useEffect } from "react";
import mediaApi from "./../Api/media";
import Loading from "../globalComponents/Loading";

const Home = () => {
  const [pageData, setPageData] = useState([]);
  const [isLoding, setIsLoding] = useState(!!pageData);
  const [state, setState] = useState(mediaApi || []);

  useEffect(() => {
    setIsLoding(true);
    fetch(`http://localhost:5000/dynamicpage`)
      .then((res) => res.json())
      .then((res) => {
        setPageData(res);
        setIsLoding(false);
      });
  }, []);

  return (
    <>
      <div className='bg-gray-100'>
        <Navbar></Navbar>
        {!isLoding ? (
          <>
            <WelcomeBanner
              pageData={pageData.find((o) => o.role === "heading")}
            ></WelcomeBanner>
            <ShortBanner
              pageData={pageData.find((o) => o.role === "topfeature")}
            ></ShortBanner>
            <Slider></Slider>
            <br />
            <br />
            <Bannar
              pageData={pageData.find((o) => o.role === "secfeature")}
            ></Bannar>
            <Events state={state}></Events>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
