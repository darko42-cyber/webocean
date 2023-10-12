import React, { useEffect, useState } from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";

import WebDev from "../webdev/WebDev";
import Curriculum from "../../components/curriculum/Curriculum";
import "./home.css";
import HomeStory from "../../components/homeStory/HomeStory";
import Speaker from "../../components/speakers/Speaker";
import Founder from "../../components/founder/Founder";

const Home = ({ scroll }) => {
  let data = {
    paragraph:
      "Elevate Education:Choose our coding bootcamp for Future-ready skills",
    image: "/coding-images/human6.jpg",
    heading: "",
  };
  return (
    <div className='home'>
      <Banner scroll={scroll} />
      <br />
      <HomeStory scroll={scroll} />
      <br />
      <HomeStory scroll={scroll} data={data} />
      <br />
      <Curriculum />
      <br />
      <Speaker />
      <br />
      <Founder />
    </div>
  );
};

export default Home;
