import React from "react";
import "./founder.css";
const Founder = () => {
  return (
    <div className='founder'>
      <h2>Founders</h2>
      <div className='founder__group'>
        <div className='quote'>
          <div className='quote__card'>
            <div className='card__image'>
              <img
                src='/coding-images/darko.jpg'
                alt=''
                height={150}
              />
              <h3 className='name'>Darko</h3>
            </div>

            <div className='card__desc'>
              <h4>Created:wagermoni</h4>
              <q>
                {" "}
                Welcome to our coding course! I'm thrilled
                you're here. Let's embark on an exciting
                coding journey together
              </q>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
