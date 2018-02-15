import React from 'react';
import './Certs.css';

import fcc from './images/cert-icons/fcc-cert.jpg';
import tawdbc from './images/cert-icons/udemy-cert.jpg';


const Certs = () => (
  <div className="certs" id="Certs">
    <h1>Certificates</h1>
    <div className="deck">
      <div className="card">
        <h2>Udacity</h2>
        <p>The Advanced Web Developer Bootcamp</p>
        <img src={tawdbc} alt="Certificate" />
      </div>
      <div className="card">
        <h2>Free Code Camp</h2>
        <p>Front End Development Program</p>
        <img src={fcc} alt="Certificate" />
      </div>
    </div>
  </div>
);

export default Certs;
