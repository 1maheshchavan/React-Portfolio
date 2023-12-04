import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const Certified = () => {
  return (
    <section id="Certified">
      <div>
        <h1 className='heading'>
          <FontAwesomeIcon icon={faAward} style={{ fontSize: '30px' }} /> Certified
        </h1><br />
        <p className="Certificate"> Full Stack Development at <span>Great Learning.</span> </p>
        <p className="Certificate"> AWS Certified Developer-Associate-Pre Course at <span>Infosys.</span></p>
        <p className="Certificate"> Certified Ethical Hacking Course From <span>Ethical Hacking University App.</span> </p>
        <p className="Certificate"> Idea Avishkar Technology From <span>Academic & Research Committee.</span> </p>
      </div>
    </section>
  );
};

export default Certified