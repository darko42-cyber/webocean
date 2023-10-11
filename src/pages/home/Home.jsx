import React, { useEffect, useState } from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import HomeVideo from "../../components/homeVideo/HomeVideo";
import WebDev from "../webdev/WebDev";
import Curriculum from "../../components/curriculum/Curriculum";
import "./home.css";
const Home = ({ scroll }) => {
  return (
    <div className='home'>
      <Banner scroll={scroll} />
      <br />
      <HomeVideo scroll={scroll} />
      <br />
      <Curriculum />
    </div>
  );
};

export default Home;
