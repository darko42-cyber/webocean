import React from "react";
import "./banner.css";
const Banner = ({ scroll }) => {
  return (
    <div className='banner__container'>
      <div className='banner'>
        <div className='left'>
          <div>
            <h3>BEGIN TO PRACTICE</h3>
            <h3>BE CONSISTENT</h3>
          </div>
          <p className='desc'>
            Unlock endless possibility and carrier
            opportunities. Join us to learn coding, and
            you'll gain the skills to create websites and
            apps
          </p>
        </div>
        <div className='right'>
          <img src='/coding-images/coding8.jpg' alt='' />

          <div className='btn__box'>
            <button className={`btn start`}>
              {" "}
              Start Now
            </button>
            <button className={`btn explore`}>
              {" "}
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
