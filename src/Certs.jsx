import React from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

import './styles/Certs.css';

import fcc from './images/cert-icons/fcc-cert.jpg';
import tawdbc from './images/cert-icons/udemy-cert.jpg';

setDefaultProps({
  bounce: true,
  visibleClassName: 'visible',
  percent: 100,
});

const Certs = () => (
  <div className="certs" id="Certs">
    <h1>Certificates</h1>
    <div className="deck">
      <OnVisible className="card">
        <h2>Udacity</h2>
        <p>The Advanced Web Developer Bootcamp</p>
        <img src={tawdbc} alt="Certificate" />
      </OnVisible>
      <OnVisible className="card">
        <h2>Free Code Camp</h2>
        <p>Front End Development Program</p>
        <img src={fcc} alt="Certificate" />
      </OnVisible>
    </div>
  </div>
);

export default Certs;
