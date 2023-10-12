import React from "react";

import "./curriculum.css";
import { Link } from "react-router-dom";
const Curriculum = () => {
  return (
    <div className='curriculum__container'>
      <div className='curriculum'>
        <h2>OUR CURRICULUM</h2>
        <div className='lessons'>
          <div className='lesson'>
            <Link to='/webdev/html'>
              <div className='lesson__image'>
                <img
                  src='/coding-images/html3.png'
                  alt=''
                />
              </div>
            </Link>
            <Link className='link' to='/webdev/html'>
              <div className='lesson__desc'>
                <h3>HTML</h3>
                <p>Hyper text markup language</p>
              </div>
            </Link>
          </div>
          <div className='lesson'>
            <Link to='/webdev/css'>
              <div className='lesson__image'>
                <img src='/coding-images/css1.png' alt='' />
              </div>
            </Link>
            <Link to='/webdev/css'>
              <div className='lesson__desc'>
                <h3>CSS</h3>
                <p>Cascading Style Sheet</p>
              </div>
            </Link>
          </div>
          <div className='lesson'>
            <Link to='/webdev/js'>
              <div className='lesson__image'>
                <img src='/coding-images/js3.png' alt='' />
              </div>
            </Link>
            <Link to='webdev/js'>
              <div className='lesson__desc'>
                <h3>JS</h3>
                <p>Vanilla Javascript Programming</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
