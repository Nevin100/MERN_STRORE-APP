import React from "react";
import Banner from "./Banner.jsx";
import TopSellers from "./TopSellers.jsx";
import Recommended from "./Recommended.jsx";
import News from "./News.jsx";
import Footer from "../../components/Footer.jsx";

const home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </>
  );
};

export default home;
