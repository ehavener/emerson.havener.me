import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import faFilePdf from '@fortawesome/fontawesome-free-regular/faFilePdf';
import './styles/Home.css';

const Home = () => (
  <div className="home" id="Home">
    <div className="content">
      <div className="name">
        <h1>
              Emerson
          <br />
              Havener
        </h1>
      </div>
      <h2>Prospective Web Developer</h2>
      <div className="resume-icon">
        <a title="Resume" href="https://www.emerson.havener.me" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
        </a>
      </div>
      <div className="social-icons">
        <a title="GitHub" href="https://github.com/ehavener" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
        </a>
        <a title="LinkedIn" href="https://www.linkedin.com/in/emerson-havener-8737a1121/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedIn} aria-hidden="true" />
        </a>
        <a title="Codepen" href="https://codepen.io/ehavener/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCodepen} aria-hidden="true" />
        </a>
        <a title="email" href="#Contact" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
);


export default Home;
