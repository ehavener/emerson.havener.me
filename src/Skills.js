import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills" id="Skills">
        <h1>Skills</h1>
        <p>While I'm a full stack developer, my emphasis is in elegant front end design.</p>
        <div className="deck">
          <div className="card">
            <h2>Front-end</h2>
            <p>HTML5, CSS3, SASS, Javascript ES7, JS Frameworks (React, Redux, jQuery), CSS Grid & Flexbox, BEM</p>
          </div>
          <div className="card">
            <h2>Back-end</h2>
            <p>Node.js, Express, MongoDB, SQL</p>
          </div>
          <div className="card">
            <h2>Testing, Tooling & DevOps</h2>
            <p>Mocha, Chrome DevTools, React/Redux DevTools, JS Tools (npm, Webpack, Babel, Gulp)</p>
          </div>
          <div className="card">
            <h2>Other Languages</h2>
            <p>C, C++, Bash/Command Line, Git</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;