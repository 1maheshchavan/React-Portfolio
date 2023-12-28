import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkedAlt, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTelegramPlane, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <br /><br />
          <h3>Mahesh's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials. </p>
        </div>
        <div className="box">
          <h3 style={{ color: 'yellow' }}>quick links</h3>
          <a href="#home"><FontAwesomeIcon icon={faChevronCircleRight} /> Home</a>
          <a href="#about"><FontAwesomeIcon icon={faChevronCircleRight} /> About</a>
          <a href="#skills"><FontAwesomeIcon icon={faChevronCircleRight} /> Skills</a>
          <a href="#ProfessionalExperience"><FontAwesomeIcon icon={faChevronCircleRight} /> Professional Experience</a>
          <a href="#Certified"><FontAwesomeIcon icon={faChevronCircleRight} /> Certified</a>
          <a href="#education"><FontAwesomeIcon icon={faChevronCircleRight} /> Education</a>
          <a href="#projects"><FontAwesomeIcon icon={faChevronCircleRight} /> Projects</a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <p><a href="tel:8180819246"><FontAwesomeIcon icon={faPhone} /> +91 8180819246</a></p>
          <p><a href="mailto:maheshchavan9246@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> maheshchavan9246@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Pune, Maharashtra - 411001</p>
        </div>
      </div>

      <div className="box-container-2">
        <div className="box">
          <div className="share">
            <p className="social-links">
              <a href="https://www.linkedin.com/in/mahesh-chavan-2a6b99249" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/1maheshchavan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="mailto:maheshchavan9246@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="https://t.me/Mahesh46" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegramPlane} /></a>
              <a href="https://instagram.com/mahesh_chavan___?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.facebook.com/profile.php?id=100023686989872" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://youtube.com/@maheshchavan9246" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            </p>
          </div>
        </div>
      </div>

      <h1 className="credit">Designed by Mahesh Chavan</h1>
    </section>
  );
};

export default Footer;