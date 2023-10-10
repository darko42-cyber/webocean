import React from "react";
import "./homeVideo.css";
const HomeVideo = () => {
  return (
    <div className='homevideo__container'>
      <div className='homevideo'>
        <div className='left'>
          <h2>Train, Practice , Develop</h2>

          <p>
            Coding is about using software to solve human
            problems. It teaches us how to think, analyse
            and organize data. Covert your dreams into
            software by learning how to code
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
