import React from "react";
import "./jsPage.css";
const JsPAGE = () => {
  const courseModules = [
    {
      title: "Introduction to JavaScript",
      topics: [
        "What is JavaScript?",
        "Setting Up a Development Environment",
        "Hello World in JavaScript",
      ],
    },
    {
      title: "JavaScript Basics",
      topics: [
        "Variables and Data Types",
        "Operators and Expressions",
        "Control Structures (if statements, loops)",
        "Functions",
        "Arrays and Objects",
      ],
    },
    {
      title: "Document Object Model (DOM)",
      topics: [
        "Introduction to the DOM",
        "Selecting and Manipulating DOM Elements",
        "Events and Event Handling",
        "Dynamic Web Page Interactions",
      ],
    },
    // Add more modules here
  ];

  return (
    <div className='css'>
      <div className='css__group'>
        <h2>Course Structure</h2>

        <div className='css__left'>
          <div className='css__course'>
            <h3>Module 1</h3>
            <ol>
              {courseModules.map((module, index) => (
                <li key={index}>
                  {module.title}
                  <ul>
                    {module.topics.map(
                      (topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      )
                    )}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className='css__course'>
            <h4>Module 2</h4>
            <h4>Projects</h4>

            <ul>
              <li>Social Media App</li>
              <li>Calculator App</li>
              <li> Chat App </li>
              <li> Blog Post </li>
              <li>Voting App</li>
              <li>Video Streaming App</li>
              <li>Sass</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsPAGE;
