import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import fasEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
// import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
// import faLinkedInSquare from '@fortawesome/fontawesome-free-brands/faLinkedin';
// import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import faFilePdf from '@fortawesome/fontawesome-free-regular/faFilePdf';
import fasFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf';
import faSquare from '@fortawesome/fontawesome-free-solid/faSquare';
// import faSquareFull from '@fortawesome/fontawesome-free-solid/faSquareFull';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import './styles/Home.css';

const Home = () => (
  <section className="home" id="Home">
    <div className="content">
      <div className="heading">
        <h1>
          Emerson
          <br />
          Havener
        </h1>
        <h2>
          Prospective <wbr />Web&nbsp;Developer
        </h2>
      </div>
      <div className="social-icons">
        <a
          title="GitHub"
          href="https://github.com/ehavener"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon
              className="solid"
              icon={faGithub}
              transform="shrink-1"
              aria-hidden="true"
            />
            <FontAwesomeIcon
              className="outline"
              icon={faGithub}
              transform="grow-1"
              mask={faCircle}
              aria-hidden="true"
            />
          </span>
          <p>GitHub</p>
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/emerson-havener-8737a1121/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon
              className="outline"
              transform="shrink-3"
              icon={faLinkedIn}
              aria-hidden="true"
            />
            <FontAwesomeIcon
              className="solid faSquareFull"
              icon={faLinkedIn}
              transform="shrink-3"
              mask={faSquare}
              aria-hidden="true"
            />
          </span>
          <p>LinkedIn</p>
        </a>
        <a
          title="email"
          className="emailLayers"
          href="#Contact"
          rel="noopener noreferrer"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon
              className="outline"
              transform="grow-2"
              icon={fasEnvelope}
              aria-hidden="true"
            />
            <FontAwesomeIcon
              className="solid"
              transform="grow-2"
              icon={faEnvelope}
              aria-hidden="true"
            />
          </span>
          <p>Email</p>
        </a>
        {/*
        <a title="Codepen" href="https://codepen.io/ehavener/" target="_blank" rel="noopener noreferrer">
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon className="outline"
            transform="shrink-3" icon={faCodepen} aria-hidden="true" />
            <FontAwesomeIcon className="solid" icon={faCodepen}
            transform="shrink-3" mask={faSquare} aria-hidden="true" />
          </span>
          <p>Codepen</p>
        </a>
        */}
        <div className="vertical-line" />
        <a
          title="Resume"
          className="resumeLayers"
          href="https://www.emerson.havener.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon
              className="outline"
              icon={faFilePdf}
              aria-hidden="true"
            />
            <FontAwesomeIcon
              className="solid"
              icon={fasFilePdf}
              aria-hidden="true"
            />
          </span>
          <p>Resume</p>
        </a>
      </div>
    </div>
  </section>
);

export default Home;
