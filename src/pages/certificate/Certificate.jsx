import React from "react";
import "./certificate.css";
const Certificate = () => {
  return (
    <div className='certificate'>
      <div className='affiliate'>
        <h3>We are affiliated to</h3>
        <div className='affiliaters'>
          <div className='single'>
            <img src='dart.png' alt='' />
            <p>
              Issued over 30 million certificate to
              potential industry ready students
            </p>
            <span>learn more...</span>
          </div>
          <div className='single'>
            <img src='dart.png' alt='' />
            <p>
              Issued over 30 million certificate to
              potential industry ready students
            </p>
            <span>learn more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
