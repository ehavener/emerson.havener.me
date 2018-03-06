import React from 'react';
import '../styles/Services.scss';

const Services = () => (
  <section className="services" id="Services">
    <h1>Services</h1>
    <p>
      I currently offer the following web services
      to local businesses and organizations at
      competitive rates.
    </p>
    <div className="deck">
      <div className="card">
        <h2>Responsive Static Website Design</h2>
        <p>
          Custom websites to market your venture.
        </p>
        <div className="buttons">
          <button name="button">
            Learn More
          </button>
          <button name="button">Inquire</button>
        </div>
      </div>
      <div className="card">
        <h2>
          Website Design with CMS Integration
        </h2>
        <p>
          Custom websites with the ability to
          easily publish and update content.
        </p>
        <div className="buttons">
          <button name="button">
            Learn More
          </button>
          <button name="button">Inquire</button>
        </div>
      </div>
      <div className="card">
        <h2>Logo Design and Branding</h2>
        <p>
          An original graphical identity
          representing your venture.
        </p>
        <div className="buttons">
          <button name="button">
            Learn More
          </button>
          <button name="button">Inquire</button>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
