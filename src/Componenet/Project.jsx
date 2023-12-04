import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import SocialMediaNetworkingImage from './Images/SocialMediaNetworking.png';
import Portfolioo from './Images/Portfolioo.jpg'

const Project = () => {
  return (
    <div id='projectssss'>
      <center>
        <h1 className="heading">
          <FontAwesomeIcon icon={faLaptopCode} size="1x" style={{ color: "#000000" }} />
          <span>Projects</span>
        </h1><br /><br />

        <div className="projectss"><br />
          <h1 className='Name'>(1) Social Media Networking:-</h1><br />
          <h2 className='sample'>Work Sample</h2>

          <a href="https://github.com/1maheshchavan/social_media_networking" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <br />
        <div><img src={SocialMediaNetworkingImage} alt="Project" id="home2" /></div>
<hr />
<hr />
<hr />
        <div className="projectss"><br />
          <h1 className='Name'> (2) Personal Portfolio :-</h1><br />
          <h2 className='sample'>Work Sample</h2>

          <a href="https://github.com/1maheshchavan/Mahesh-Portfolio" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <br />
        <div><img src={Portfolioo} alt="Project" id="home2" /></div>
      </center>
    </div>
    
  );
};

export default Project;