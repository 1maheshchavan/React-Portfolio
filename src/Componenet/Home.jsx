import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="heading">
      </div>
      <div className="content">
        <h2>Hii,<br />I'm <span>Mahesh</span> Chavan</h2>
        <p>i am into ~ Full Stack Developer<br /><span className="typing-text"></span></p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/mahesh-chavan-2a6b99249"
                target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a className="github" aria-label="GitHub" href="https://github.com/1maheshchavan" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a className="instagram" aria-label="Instagram"
                href="https://instagram.com/mahesh_chavan___?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="dev" aria-label="facebook" href="https://www.facebook.com/profile.php?id=100023686989872"
                target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;