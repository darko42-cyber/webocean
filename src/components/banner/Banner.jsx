import React from "react";
import "./banner.css";
const Banner = ({ scroll }) => {
  return (
    <div className='banner__container'>
      <div className='banner'>
        <div className='left'>
          <div>
            <h3>Train and Certify</h3>
            <h3>Skilled,Job Ready</h3>
            <h3> Dev begins here </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quia hic a numquam consectetur
            culpa qui doloremque quaerat minus, dolorum quam
            perspiciatis ipsum nesciunt, molestiae
            consequuntur et sapiente accusamus asperiores
            eveniet voluptatibus aliquam eius? Eum maxime
            nobis, quibusdam temporibus perferendis porro
            dolorum obcaecati atque voluptas in laudantium,
            vitae quia quidem id!
          </p>
        </div>
        <div className='right'>
          <img src='/coding-images/coding8.jpg' alt='' />

          <button className={`btn start`}>
            {" "}
            Start Now
          </button>
          <button className={`btn explore`}>
            {" "}
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
