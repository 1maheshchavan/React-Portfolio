import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram,} from '@fortawesome/free-brands-svg-icons';

const Home = () => {


  return (
    <section className="home" id="home">
      <div className="content">
        <h2>
          <br />I'm , <span>Mahesh</span> Chavan
        </h2>
    
        <p>
          i am into ~ <br />
          <span className="typing-text"> {"Full Stack Developer"}</span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/mahesh-chavan-2a6b99249"
                target="_blank"
                rel="noreferrer"
              >
                <a href="https://www.linkedin.com/in/mahesh-chavan-2a6b99249" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/1maheshchavan"
                target="_blank"
                rel="noreferrer"
              >
                <a href="https://github.com/1maheshchavan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://instagram.com/mahesh_chavan___?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
              >
                 <a href="https://instagram.com/mahesh_chavan___?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              </a>
            </li>
        
             
      <a href="mailto:maheshchavan9246@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;