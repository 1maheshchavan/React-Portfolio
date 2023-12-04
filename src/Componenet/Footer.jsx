import React from 'react';

const Footer = () => {
  const gmailUrl = () => {
    const emailSubject = encodeURIComponent('Hello');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${emailSubject}`;

    return (
      <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
        Open Gmail
      </a>
    );
  };

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
          <a href="#home"><i className="fas fa-chevron-circle-right"></i> Home</a>
          <a href="#about"><i className="fas fa-chevron-circle-right"></i> About</a>
          <a href="#skills"><i className="fas fa-chevron-circle-right"></i> Skills</a>
          <a href="#ProfessionalExperience"><i className="fas fa-chevron-circle-right"></i> Professional Experience</a>
          <a href="#Certified"><i className="fas fa-chevron-circle-right"></i> Certified</a>
          <a href="#education"><i className="fas fa-chevron-circle-right"></i> Education</a>
          <a href="#projects"><i className="fas fa-chevron-circle-right"></i> Projects</a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <p><a href="tel:8180819246"><i className="fas fa-phone"></i> +91 8180819246</a></p>
          {/* Use the GmailLink component */}
          {gmailUrl()}
          <p><i className="fas fa-map-marked-alt"></i> Pune, Maharashtra - 411001</p>
        </div>
      </div>

      <div className="box-container-2">
        <div className="box">
          <div className="share">
            <p className="social-links">
              <a href="https://www.linkedin.com/in/mahesh-chavan-2a6b99249" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://github.com/1maheshchavan" className="fab fa-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer"></a>
              <a href="mailto:maheshchavan9246@gmail.com" className="fas fa-envelope" aria-label="Mail"></a>
              <a href="@Mahesh46" className="fab fa-telegram-plane" aria-label="Telegram" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://instagram.com/mahesh_chavan___?igshid=MzRlODBiNWFlZA==" className="fab fa-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://www.facebook.com/profile.php?id=100023686989872" className="fab fa-facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://youtube.com/@maheshchavan9246" className="fab fa-youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer"></a>
            </p>
          </div>
        </div>
      </div>

      <h1 className="credit">Designed by Mahesh Chavan</h1>
    </section>
  );
};

export default Footer;