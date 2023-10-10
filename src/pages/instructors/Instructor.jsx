import React from "react";
import "./instructor.css";
const Instructor = () => {
  return (
    <div className='instructor'>
      <div className='mission'>
        <p>
          {" "}
          We provide you with industry experience engineers.
        </p>
        <div className='dos'>
          <b>
            {" "}
            <span> {">>"} </span> To teach
          </b>
          <b>
            {" "}
            <span> {">>"} </span> To guide you on your
            carrier
          </b>
          <b>
            {" "}
            <span> {">>"} </span> To build your app
          </b>
          <b>
            {" "}
            <span> {">>"} </span> To scale your app
          </b>
        </div>
      </div>
      <div className='users'>
        <h3>
          <i className='user__heading'>Our</i> Instructors
        </h3>
        <div className='user'>
          <div>
            <div className='user__info'>
              <img
                className='img'
                src='/darko.jpg'
                alt=''
                height={50}
              />
              <div className='username'>
                <span>Emmanuel</span>
                <span>
                  <i
                    className='ri-star-fill'
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className='ri-star-fill'
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className='ri-star-fill'
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className='ri-star-fill'
                    style={{ color: "orange" }}
                  ></i>
                </span>
              </div>
            </div>
            <div className='user__skills'>
              <h5>Teck Stacks {">>"} </h5>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> Mern Stack </span>
              </div>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span>Pern Stack </span>
              </div>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> Mean Stack </span>
              </div>
            </div>
            <div className='user__skills'>
              <h5>Education {">>"} </h5>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> Udemy </span>
              </div>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> w3schools </span>
              </div>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> MDN </span>
              </div>
            </div>
            <div className='user__skills'>
              <h5>Worked with {">>"} </h5>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> Dice - UK </span>
              </div>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> Toptal - usa </span>
              </div>
              <div className='skills'>
                <i
                  className='ri-check-fill'
                  style={{ color: "green" }}
                ></i>
                <span> Andela - usa </span>
              </div>
            </div>
            <p className='user__details'>
              {" "}
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam sed aut quae non
              voluptatum, nam deserunt pariatur porro enim
              nemo qui nulla fugit cupiditate dicta soluta
              ipsa assumenda laudantium ut?
            </p>
          </div>
          <div className='reviews'>
            <div className='review'>
              <h3>Reviews</h3>
              <div className='review__info'>
                <img src='/darko.jpg' alt='' height={30} />
                <div>
                  <span>Samuel</span>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>5/9/2023</span>
                </div>
              </div>
              <div className='review__info'>
                <img src='/darko.jpg' alt='' height={30} />
                <div>
                  <span>Samuel</span>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>5/9/2023</span>
                </div>
              </div>
            </div>
            <div className='review__form'>
              <div className='form'>
                <input
                  type='text'
                  placeholder='Type review'
                />
                <div>
                  {" "}
                  <i className='ri-send-plane-2-line'></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
