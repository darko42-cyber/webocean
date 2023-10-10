import React from "react";
import "./webDev.css";
const WebDev = () => {
  return (
    <div className='webDev'>
      <div className='courseContainer'>
        <h3>
          {" "}
          <span className='our'>Our</span> courses are{" "}
          <span className='our'> {">>>"} </span>
        </h3>
        <div className='course'>
          <div className='desc'>
            <img src='js.png' alt='' height={80} />
            <h3>CSS3</h3>
            <p>
              Hyper text markup language is what define the
              web Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusamus, sequi.
            </p>
          </div>
          <div className='desc'>
            <img src='dart.png' alt='' height={80} />
            <h3>HTML</h3>
            <p>
              Hyper text markup language is what define the
              web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
