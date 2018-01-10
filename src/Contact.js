import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact" id="Contact">
        <h1>Contact Me</h1>
        <div className="deck">
          <div className="card">
            <form action="/my-handling-form-page" method="post">
              <input placeholder="Email" type="email"></input>
              <input placeholder="Name" type="text"></input>
              <textarea placeholder="Message" name="message"></textarea>
              <button value="submit" type="button">Send</button>
            </form>
          </div> {/*}
          <div className="card">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/emerson-havener-8737a1121/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" title="LinkedIn" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/ehavener" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" title="Github" aria-hidden="true"></i>
              </a>
              <a href="https://dribbble.com/emersonhavener" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-dribbble" title="Dribble" aria-hidden="true"></i>
              </a>
              <a href="https://codepen.io/ehavener/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-codepen" title="Codepen" aria-hidden="true"></i>
              </a>
             </div>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Contact;