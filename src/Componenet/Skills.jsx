import React from 'react'
import C from './Images/c image.jpg'
import HTML5 from './Images/html 5.jpg'
import CSS from './Images/css3.jpg'
import JavaScript from './Images/javascript.jpg'
import Bootstrap from './Images/bootstrap.jpg'
import Reactjs from './Images/react js.jpg'
import Node from './Images/node js.jpg'

const Skills = () => {
  return (
    <section>
      <h2 className="heading" id="skills"><i className="fas fa-laptop-code"></i> Skills</h2>
      <br />

      <div className="main-skill-container">
        <div className="skill-box">
          <img className="skill-img" src={C} alt="" />
          <span className="skil-hea">C</span>
        </div>

        <div className="skill-box">
          <img className="skill-img" src={HTML5} alt="" />
          <span className="skil-hea">HTML 5</span>
        </div>

        <div className="skill-box">
          <img className="skill-img" src={CSS} alt="" />
          <span className="skil-hea">CSS</span>
        </div>

        <div className="skill-box">
          <img className="skill-img" src={JavaScript} alt="" />
          <span className="skil-hea">JavaScript</span>
        </div>

        <div className="skill-box">
          <img className="skill-img" src={Bootstrap} alt="" />
          <span className="skil-hea">Bootstrap</span>
        </div>

        <div className="skill-box">
          <img className="skill-img" src={Reactjs} alt="" />
          <span className="skil-hea">React js</span>
        </div>

        <div className="skill-box">
          <img className="skill-img" src="https://img.icons8.com/color/48/000000/mongodb.png" alt="" />
          <span className="skil-hea">MongoDB</span>
        </div>
      </div>

      <div className="main-skill-container">
        <div className="skill-box">
          <img className="skill-img" src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="" />
          <span className="skil-hea">ExpressJS</span>
        </div>

        <div className="skill-box">
          <img className="skill-img" src={Node} alt="" />
          <span className="skil-hea">Node js</span>
        </div>
      </div>
    </section>
  );
};
export default Skills
