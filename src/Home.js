import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home" id="Home">
        <div className="content">
          <div className="name">
            <h1>
              Emerson
              <br></br>
              Havener
            </h1>
          </div>
          <h2>Web Developer</h2>
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
        </div>
      </div>
    );
  }
}

export default Home;