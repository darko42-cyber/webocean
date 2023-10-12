import React, { useState } from "react";
import "./register.css";
const Register = () => {
  const [isHead, setIsHead] = useState(true);
  return (
    <div className='register__container'>
      <div className='left'>
        <h4>Welcome to Webocean!</h4>
        <h4>Terms and Conditions</h4>
        <h4>Dear sir/madam</h4>
        <p>
          We are highly delighted to have you, and we are
          looking forward to seeing your school participate
          in the program{" "}
        </p>
        <li>
          Webocean coding club aimed at teaching your JHS
          students computer programming skills.
        </li>
        <li>
          We will help your students discover more with tech
          and its skills
        </li>
        <li>
          This club will only meet ones a week and will last
          for 1-1.5 hours
        </li>
        <li>
          For efficient and smooth practical training, each
          student should have one computer or laptop
        </li>
        <li>
          Annual coding challenges between students of the
          participated schools
        </li>
        <li>
          We will connect students from participated schools
          in healthy competitions and challenges
        </li>

        <li>
          There will be individual challenges and school
          competitions
        </li>
        <li>
          Students must pay club fee of <i>GHS100</i> to
          participate
        </li>
        <p>
          {" "}
          I agree and accept that my school would be part{" "}
          <input type='checkbox' className='check' />{" "}
        </p>
      </div>
      <div className='right'>
        <h2>
          {isHead
            ? "REGISTER YOUR SCHOOL"
            : "Become a student"}
        </h2>
        <form action=''>
          <div className='formItem'>
            <label htmlFor=''>Head Name </label>
            <input type='text' />
          </div>
          <div className='formItem'>
            <label htmlFor=''>School Name</label>
            <input type='text' />
          </div>
          <div className='formItem'>
            <label htmlFor=''>School Email</label>
            <input type='text' />
          </div>
          <div className='formItem'>
            <label htmlFor=''>School Address</label>
            <input type='text' />
          </div>
          <div className='formItem'>
            <label htmlFor=''>Password</label>
            <input type='password' />
          </div>
          <div className='formItem'>
            <button className='form-btn'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
