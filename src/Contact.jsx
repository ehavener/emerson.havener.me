import React from 'react';
import './styles/Contact.css';

const Contact = () => (
  <section className="contact" id="Contact">
    <h1>Contact Me</h1>
    <div className="deck">
      <div className="card">
        <form action="https://formspree.io/emersonhavener@gmail.com" method="POST">
          <input name="email" placeholder="Email" type="email" />
          <input placeholder="Name" type="text" />
          <textarea name="message" placeholder="Message" />
          <button value="submit" type="submit">Send</button>
        </form>
      </div> {/* }
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
          </div> */}
    </div>
  </section>
);

export default Contact;
