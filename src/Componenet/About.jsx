import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import resume from './Mahesh Chavan Resume.pdf';

const AboutMe = () => {
  let whatsappMessage = "https://wa.me/8180819246?";

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
            I am a BCA graduate Student.
            I am very passionate about improving my coding skills & developing applications & websites.
            I build Websites using HTML, CSS, JS, React.
            Working for myself to improve my skills.
            Love to build Websites.
          </p>

          <div className="box-container">
            <div className="box">
              <p><span> email : </span> maheshchavan9246@gmail.com</p>
              <p><span> place : </span> Pune, India - 411001</p>
              <p><span>Contact :</span><a href="tel:8180819246"><i className="fas fa-phone"></i> +91-8180819246</a></p>
            </div>
          </div>

          <div className="ResumeWhatsapp">

          <a href={whatsappMessage}>

            <FontAwesomeIcon id='whatsa' icon={faWhatsappSquare} style={{ fontSize: '4em', color: 'green' }} />
            </a>

            <a href={resume} className="btn btn-outline-success mx-3" download>
              Download Resume
              <FontAwesomeIcon icon={faChevronRight} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;