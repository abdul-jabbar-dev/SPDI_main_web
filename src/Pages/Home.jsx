import React from "react";
import Events from "../Components/Home/Events";
import ShortBanner from "../Components/Home/ShortBanner";
import Bannar from "../Components/Home/Bannar";
import Slider from "../Components/Home/Slider";
import Footer from "../globalComponents/Footer";
import Navbar from "../globalComponents/Navbar";
import WelcomeBanner from "../Components/Home/WelcomeBanner";
import { useState, useEffect } from "react";
import Loading from "../globalComponents/Loading";

const Home = () => {
  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(!!pageData);
  const [state, setState] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    fetch(process.env.REACT_APP_ROOT_URL + "/dynamicpage")
      .then((res) => res.json())
      .then((res) => {
        setPageData(res);
        setIsLoading(false);
      });

    fetch(process.env.REACT_APP_ROOT_URL + "/events")
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      });



  }, []); 
  return (
    <>
      <div className='bg-gray-100'>
        <Navbar></Navbar>
        {!isLoading ? (
          <>
            <WelcomeBanner
              pageData={pageData.find((o) => o.role === "heading")}
            ></WelcomeBanner>
            <ShortBanner
              pageData={pageData.find((o) => o.role === "topfeature")}
            ></ShortBanner>
            <Slider
              pageData={pageData.find((o) => o.role === "slider")}
            ></Slider>
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
