import React from "react";
import "./speaker.css";
import "./speaker.css";
const Speaker = () => {
  return (
    <div className='speaker__container'>
      <div className='speaker'>
        <h2>Pioneers</h2>

        <div className='quote'>
          <div className='quote__card'>
            <div className='card__image'>
              <img
                src='/coding-images/billgate2.jpg'
                alt=''
              />
              <h3 className='name'>Bill Gate</h3>
            </div>

            <div className='card__desc'>
              <h4>Created:Microsoft</h4>
              <q>
                {" "}
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Facilis nisi ipsam ut
                exercitationem quasi. Dolorem consequuntur
                nisi adipisci tempore molestiae!{" "}
              </q>
            </div>
          </div>
          <div className='quote__card'>
            <div className='card__image'>
              <img src='/coding-images/mark2.jpg' alt='' />
              <h3 className='name'>Zuckurberg</h3>
            </div>

            <div className='card__desc'>
              <h4>Created:Facebook</h4>
              <q>
                {" "}
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Facilis nisi ipsam ut
                exercitationem quasi. Dolorem consequuntur
                nisi adipisci tempore molestiae!{" "}
              </q>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
