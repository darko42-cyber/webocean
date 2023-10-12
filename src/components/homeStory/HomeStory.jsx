import React from "react";
import "./homeStory.css";
const HomeStory = ({ data }) => {
  return (
    <div className='homeStory__container'>
      <div className='homeStory'>
        <div className='left'>
          {!data && (
            <>
              <h3>Teaching</h3>
              <h3> Through innovation</h3>
            </>
          )}

          <p className='desc'>
            {data
              ? data.paragraph
              : " Equip your students for the digital age. Our coding training offers essential skills for the future job market,fostering creativity,problem-solving, and logical thinking. Prepare your kids for success in a tech-driven world by joining our program"}
          </p>
        </div>
        <div className='right'>
          <img
            className='vid'
            autoPlay={true}
            src={`${
              data
                ? data?.image
                : "/coding-images/human.avif"
            }`}
            alt='Human'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
