import React from 'react'
import Dattakala from './Images/dattakala clg.jpg'
import DadaPatilBCA from './Images/dada patil clg.jpg'
import DadaPatil12 from './Images/dada patil clg.jpg'
import Siddheshwar from './Images/shri siddheshwar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <section className="education" id="education">
      <br /><br /><br /><br />


      <div>
      <h1 className="heading">My&nbsp;
      <FontAwesomeIcon icon={faGraduationCap} size="2x" style={{ color: "#000000" }} />
      <span>Education</span></h1>
      </div>

      <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

      <div className="box-container">
        <br /><br />
        <div className="box">
          <div className="image">
            <img draggable="false" src={Dattakala} alt="" />
          </div>
          <div className="content">
            <h3>MCA | Master of Computer Applications </h3>
            <p>Dattakala Group of Institutions, Swami-Chincholi , Tal.Daund Dist.Pune</p>
            <p>Savitribai Phule Pune University (SPPU)</p>
            <h4>2023-2025 | Running</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={DadaPatilBCA} alt="" />
          </div>
          <div className="content">
            <h3>BCA | Bachelor of Computer Applications </h3>
            <p>Dada Patil Mahavidyalay , Tal.Karjat Dist.Ahmadnagar </p>
            <p>Savitribai Phule Pune University (SPPU)</p>
            <h4>2021-2023 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={DadaPatil12} alt="" />
          </div>
          <div className="content">
            <h3>HSC</h3>
            <p>Dada Patil Mahavidyalay Karjat , Dist.Ahmadnagar</p>
            <p> Maharashtra State Board of Secondary and Higher Secondary Education, Pune</p>
            <h4>2019-2020 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={Siddheshwar} alt="" />
          </div>
          <div className="content">
            <h3>SSC</h3>
            <p>Shri Siddheshwar Vidyalaya , Bhambore</p>
            <p> Maharashtra State Board of Secondary and Higher Secondary Education, Pune</p>
            <h4>2017-2018 | Completed</h4>
          </div>
        </div>
      </div><br /><br /><br /><br /><br /><br />
    </section>
  );
};

export default Education