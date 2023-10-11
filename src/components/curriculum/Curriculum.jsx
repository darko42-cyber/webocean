import React from "react";

import "./curriculum.css";
const Curriculum = () => {
  return (
    <div className='curriculum__container'>
      <div className='curriculum'>
        <h2>OUR CURRICULUM</h2>
        <div className='lessons'>
          <div className='lesson'>
            <div className='lesson__image'>
              <img src='/coding-images/css1.png' alt='' />
            </div>
            <div className='lesson__desc'>
              <h3>HTML</h3>
              <p>Hyper text markup language</p>
            </div>
          </div>
          <div className='lesson'>
            <div className='lesson__image'>
              <img src='/coding-images/css1.png' alt='' />
            </div>
            <div className='lesson__desc'>
              <h3>CSS</h3>
              <p>Cascading Style Sheet</p>
            </div>
          </div>
          <div className='lesson'>
            <div className='lesson__image'>
              <img src='/coding-images/css1.png' alt='' />
            </div>
            <div className='lesson__desc'>
              <h3>JS</h3>
              <p>Javascript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
