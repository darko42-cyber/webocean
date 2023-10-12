import React from "react";
import "./css.css";
const CSSPAGE = () => {
  return (
    <div className='css'>
      <div className='css__group'>
        <h2>Course Structure</h2>

        <div className='css__left'>
          <div className='css__course'>
            <h3>week 1-2</h3>
            <h4>Module</h4>
            <ul>
              <li>What is css?</li>
              <li>The Role of CSS in Web Dev</li>
              <li>Inline, Internal, and External CSS</li>
              <li>CSS Syntax and Rules</li>
            </ul>
          </div>
          <div className='css__course'>
            <h3>week 2-3</h3>
            <h4>Module 2</h4>
            <ul>
              <li>CSS Selectors</li>
              <li>CSS Properties</li>
              <li>Combining Selectors</li>
            </ul>
          </div>
          <div className='css__course'>
            <h3>week 4-5</h3>
            <h4>Module 3</h4>
            <ul>
              <li> Box Model and Layout </li>

              <li>Text and Fonts</li>
              <li>Colors and Backgrounds</li>
            </ul>
          </div>
          <div className='css__course'>
            <h3>week 5-7</h3>
            <h4>Module 5</h4>
            <ul>
              <li> Flexbox and Grid Layout </li>
              <li> CSS Transition and Animation </li>
            </ul>
          </div>
          <div className='css__course'>
            <h3>week 7-8</h3>
            <h4>Module 6</h4>
            <ul>
              <li>Responsive Web Design </li>
            </ul>
          </div>
          <div className='css__course'>
            <h3>week 7-8</h3>
            <h4>Module 3</h4>
            <ul>
              <li>CSS Best Practices </li>
            </ul>
          </div>
          <div className='css__course'>
            <h3>week 8-10</h3>
            <h4>Module 3</h4>
            <ul>
              <li>Projects</li>
            </ul>
          </div>
          <div className='css__course'>
            <h3>week 8-10</h3>
            <h4>Module 3</h4>
            <ul>
              <li>Facebook Clone</li>
              <li>Twitter Clone</li>
              <li>Instagram Clone</li>
              <li>Netflix Clone</li>
              <li>Whatsapp Clone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSPAGE;
