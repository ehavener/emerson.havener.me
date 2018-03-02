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
  <section className="certs" id="Certs">
    <h2>Certificates</h2>
    <div className="deck">
      <OnVisible className="card">
        <h3>Udacity</h3>
        <p>The Advanced Web Developer Bootcamp</p>
        <img src={tawdbc} alt="Certificate" />
      </OnVisible>
      <OnVisible className="card">
        <h3>Free Code Camp</h3>
        <p>Front End Development Program</p>
        <img src={fcc} alt="Certificate" />
      </OnVisible>
    </div>
  </section>
);

export default Certs;
