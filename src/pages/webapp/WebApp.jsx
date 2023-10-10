import React from "react";
import "./webApp.css";

const WebApp = () => {
  return (
    <div className='webApp'>
      <h2>
        Build your <big>dream</big> app, your{" "}
        <big>business</big> app, your <big>educational</big>{" "}
        app and many more from scratch at a{" "}
        <big>low cost</big>.
      </h2>
      <div className='wrapper'>
        <h3>Are you looking forward to digitalizing ?</h3>
        <div className='left'>
          <div className='left__box'>
            <h3>Do you want {">>>"}</h3>
            <div className='checkbox__wrapper'>
              <div>
                <i
                  className='ri-check-fill'
                  style={{ color: "limegreen" }}
                ></i>
                <span>Online store</span>
              </div>
              <div>
                <i
                  className='ri-check-fill'
                  style={{ color: "limegreen" }}
                ></i>
                <span>Shopping store</span>
              </div>
              <div>
                <i
                  className='ri-check-fill'
                  style={{ color: "limegreen" }}
                ></i>
                <span>Book store</span>
              </div>
              <div>
                <i
                  className='ri-check-fill'
                  style={{ color: "limegreen" }}
                ></i>
                <span>Car rental</span>
              </div>
              <div>
                <i
                  className='ri-check-fill'
                  style={{ color: "limegreen" }}
                ></i>
                <span>Food shop</span>
              </div>

              <div>
                <i
                  className='ri-check-fill'
                  style={{ color: "limegreen" }}
                ></i>
                <span>Hotel/Apartment booking</span>
              </div>
            </div>
          </div>
        </div>

        <div className='right'></div>
      </div>
    </div>
  );
};

export default WebApp;
