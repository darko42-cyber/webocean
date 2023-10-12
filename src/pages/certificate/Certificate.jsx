import React from "react";
import "./certificate.css";
import { Link } from "react-router-dom";
const Certificate = () => {
  return (
    <div className='certificate'>
      <div className='affiliate'>
        <h2>
          This coding course is proudly affiliated with
          leading educational platforms, including Udemy,
          FreeCodeCamp, and recognized by W3Schools.
        </h2>
        <div className='affiliate__group'>
          <Link to='https://www.freecodecamp.org/'>
            <img src='/coding-images/free2.png' alt='' />
            <span>Learn more</span>
          </Link>
        </div>
        <div className='affiliate__group'>
          <Link to='https://www.w3schools.com/'>
            <img src='/coding-images/w3.png' alt='' />
            <span>Learn more</span>
          </Link>
        </div>
        <Link to='https://www.udemy.com/'>
          <div className='affiliate__group'>
            <img src='/coding-images/udemy.jpg' alt='' />
            <span>Learn more</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Certificate;
