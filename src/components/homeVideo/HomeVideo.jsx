import React from "react";
import "./homeVideo.css";
const HomeVideo = () => {
  return (
    <div className='homevideo__container'>
      <div className='homevideo'>
        <div className='left'>
          <h3>Teaching</h3>
          <h3> hrough </h3>

          <p className='desc'>
            Equip your students for the digital age. Our
            coding training offers essential skills for the
            future job market,fostering
            creativity,problem-solving, and logical
            thinking. Prepare your kids for success in a
            tech-driven world by joining our program
          </p>
        </div>
        <div className='right'>
          <img
            className='vid'
            autoPlay={true}
            src='/coding-images/human.avif'
            alt='Human'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
