import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__group'>
        <div className='left__group'>
          <div className='web__info'>
            <img src='/coding-images/webOcean.png' alt='' />
            <p>
              Coding is only difficult when it is unfamiliar
            </p>
          </div>
          <span className='copyright'>
            <i
              className='ri-copyright-fill'
              style={{ marginInline: "10px" }}
            >
              2023
            </i>
            All rights reserved
          </span>
        </div>
        <div className='center__group'>
          <h2>Links</h2>
          <div className='center__links'>
            <Link> Freelancing </Link>
            <Link> Certificate </Link>
            <Link> courses </Link>
            <Link> Instructors </Link>
            <Link> Instructors </Link>
            <Link> FAQ </Link>
          </div>
        </div>
        <div className='right__group'>
          <h2>Follow Us</h2>
          <div className='right__follow'>
            <Link>
              {" "}
              <i className='ri-facebook-fill'></i>{" "}
            </Link>
            <Link>
              {" "}
              <i className='ri-twitter-fill'></i>{" "}
            </Link>
            <Link>
              {" "}
              <i className='ri-whatsapp-fill'></i>{" "}
            </Link>
            <Link>
              {" "}
              <i className='ri-instagram-fill'></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
