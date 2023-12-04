import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const ProfessionalExperience = () => {
  return (
    <section id="ProfessionalExperience" className="sec">
      <br /><br />


      <div id="internnn">
        <h1 className="heading">
          <FontAwesomeIcon icon={faChalkboardTeacher} style={{ fontSize: '40px', color:'black' }} />  
          Professional Experience
        </h1><br /><br /><br /><br /><br /><br />
        <p className="intern">Full Stack Developer at <span>Code Clause PVT.LTD.</span></p>
        <p className="intern">Web Development at <span>Tecno Hacks EduTech.</span></p>
      </div>
    </section>
  );
};

export default ProfessionalExperience;