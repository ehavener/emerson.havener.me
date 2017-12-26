import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact" id="Contact">
        <h1>Contact</h1>
        <div className="deck">
          <div className="card">
            <h2>Email</h2>
            <a href="mailto:emerson@havener.me">emerson@havener.me</a>
          </div>
          <div className="card">
            <h2>Location</h2>
            <p>Reno, Nevada | Las Vegas, Nevada</p>
          </div>
          <div className="card">
            <h2>Social Media</h2>
            <div className="social-icons">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <i className="fa fa-github" aria-hidden="true"></i>
              <i className="fa fa-dribbble" aria-hidden="true"></i>
              <i className="fa fa-codepen" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;