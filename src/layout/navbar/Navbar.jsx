import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ scroll }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setOpen(true);
    }
  }, []);
  return (
    <nav className={`container ${scroll && "toggle"}`}>
      <div className='nav__container'>
        <Link to='/'>
          <h1>WEB.O</h1>
        </Link>

        {/* ---- This is the navbar toggler */}

        {open && (
          <div className='nav__box'>
            <ul className='nav__list'>
              <li className='dropdown__item'>
                <div className='dropdown__navlink'>
                  Courses
                  <i className='ri-arrow-down-s-line icon'></i>
                </div>
                <div className='dropdown__menu'>
                  <Link to={"/webDev"}>
                    <li>Web Development</li>
                  </Link>
                  <li>Software Engineering</li>
                  <li>UI/UX Designs</li>
                </div>
              </li>
              <li className='dropdown__item'>
                <div className='dropdown__navlink'>
                  Freelancing
                  <i className='ri-arrow-down-s-line icon'></i>
                </div>
                <div className='dropdown__menu'>
                  <Link>
                    <li>Web app</li>
                  </Link>
                  <Link>
                    <li>Mobile app</li>
                  </Link>
                </div>
              </li>

              <Link
                onClick={() => {
                  if (window.innerWidth < 500) {
                    setOpen(false);
                  }
                }}
              >
                <li>Instructors</li>
              </Link>
              <Link
                to='/certificate'
                onClick={() => {
                  if (window.innerWidth < 500) {
                    setOpen(false);
                  }
                }}
              >
                <li>Certificate</li>
              </Link>
              <li>FAQ </li>
            </ul>
            <div className='user__options'>
              <Link
                to='/register'
                onClick={() => {
                  if (window.innerWidth < 500) {
                    setOpen(false);
                  }
                }}
              >
                <button> Register school </button>
              </Link>
              <button> I am a student </button>
            </div>
          </div>
        )}

        <div className='user__account'>
          <span className='user'>
            <i className='ri-user-fill'></i>
          </span>
        </div>
        {open ? (
          <div
            className='menu__bar'
            onClick={() => setOpen(!open)}
          >
            <i className='ri-close-line'></i>
          </div>
        ) : (
          <div
            className='menu__bar'
            onClick={() => setOpen(!open)}
          >
            <i className='ri-menu-line'></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
