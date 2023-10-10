import React, { useEffect, useState } from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import HomeVideo from "../../components/homeVideo/HomeVideo";
const Home = ({ scroll }) => {
  return (
    <div>
      <Banner scroll={scroll} />
      <br />
      <HomeVideo scroll={scroll} />
    </div>
  );
};

export default Home;
