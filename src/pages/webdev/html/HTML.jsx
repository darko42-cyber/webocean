import React from "react";
import "./html.css";
const HTMLPage = () => {
  return (
    <div className='Page'>
      <div className='html__group'>
        <h2>Course Structure</h2>

        <div className='html__left'>
          <div className='html__course'>
            <h3>week 1-2</h3>
            <h4>Module</h4>
            <ul>
              <li>What is HTML?</li>
              <li>History and Evolution of HTML</li>
              <li>Basic structure of an HTML DOC</li>
              <li>HTML ELement and Tags</li>
            </ul>
          </div>
          <div className='html__course'>
            <h3>week 2-3</h3>
            <h4>Module 2</h4>
            <ul>
              <li>DOCTYPE!</li>
              <li>Meta Tags</li>
              <li>Title Tag</li>
            </ul>
          </div>
          <div className='html__course'>
            <h3>week 4-5</h3>
            <h4>Module 3</h4>
            <ul>
              <li> Headings </li>
              <li>Line Breaks {"(<br>)"} </li>
              <li>Horizontal Rules</li>
              <li>Comments in HTML</li>
            </ul>
          </div>
          <div className='html__course'>
            <h3>week 5-7</h3>
            <h4>Module 5</h4>
            <ul>
              <li> Unordered Lists </li>
              <li> Ordered Lists </li>

              <li>Definition Lists</li>
            </ul>
          </div>
          <div className='html__course'>
            <h3>week 7-8</h3>
            <h4>Module 6</h4>
            <ul>
              <li> Inserting Images </li>
              <li>Embedding Audio and Video </li>
              <li>Linking to files </li>

              <li>Comments in HTML</li>
            </ul>
          </div>
          <div className='html__course'>
            <h3>week 7-8</h3>
            <h4>Module 3</h4>
            <ul>
              <li> Creating Hyperlinks </li>
              <li>Linking to webpages </li>
              <li>Linking to files </li>

              <li>Comments in HTML</li>
            </ul>
          </div>
          <div className='html__course'>
            <h3>week 8-10</h3>
            <h4>Module 3</h4>
            <ul>
              <li>Forms </li>
              <li>Semantic HTML</li>
              <li>HTML APIs</li>
            </ul>
          </div>
          <div className='html__course'>
            <h3>week 10</h3>
            <h4>Module 9</h4>
            <ul>
              <li>Best Practices </li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLPage;
