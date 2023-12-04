import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import resume from './Mahesh Chavan Resume.pdf'

const AboutMe = () => {
  let whatsapp_message = "https://wa.me/8180819246?";
  return (
    <section className="about" id="about">
      <br /><br /><br />
      <h2 className="heading">
        <FontAwesomeIcon icon={faUserAlt} /> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="content">
          <h3>I'm Mahesh Chavan</h3><br />
          <span className="tag">Full Stack Developer</span>

          <p>I am a Full-Stack developer.
            I am BCA graduate Student.
            I am very passionate about improving my coding skills & developing applications & websites.
            I build Websites using HTML, CSS, JS, React.
            Working for myself to improve my skills.
            Love to build Websites.
          </p>

          <div className="box-container">
            <div className="box">
              <p><span> email : </span> maheshchavan9246@gmail.com</p>
              <p><span> place : </span> Pune, India - 411001</p>
            </div>
          </div>

      <div className="resumebtn">
          <a href={resume} className="btn btn-outline-success mx-3" FontAwesomeIcon icon={faChevronRight} download>
            Download Resume   
           </a>
           
        <a href={whatsapp_message} className="btn btn-outline-danger mx-3" FontAwesomeIcon icon={faChevronRight} download>
            Whatsapp
          </a>
           </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;