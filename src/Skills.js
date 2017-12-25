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
            <h2>Front-end 1</h2>
            <p>HTML5, CSS3, CSS frameworks, CSS preprocessors, CSS Grid, Flexbox, BEM</p>
          </div>
          <div className="card">
            <h2>Back-end</h2>
            <p>Node.js, Express, MongoDB, SQL</p>
          </div>
          <div className="card">
            <h2>Front-end 2</h2>
            <p>JS, ES6, JS Frameworks (React, Redux, jQuery), JS Tools (npm, Webpack, Babel, Gulp)</p>
          </div>
          <div className="card">
            <h2>Testing, Code Coverage & Performance</h2>
            <p>Mocha, Chrome DevTools, React/Redux DevTools</p>
          </div>
          <div className="card">
            <h2>Mobile First</h2>
            <p>UX/UI, Responsive Design, Mobile Design, Cross-Browser Dev, Performance Testing, Accessibility, SEO</p>
          </div>
          <div className="card">
            <h2>Full Stack</h2>
            <p>Wireframe, Prototype, MVC, Design Pattern, OOP, REST API, Modules, SPA, Agile Methodologies, Scrum, Mobile Dev, Android, Swift, React Native</p>
          </div>
          <div className="card">
            <h2>Other Languages, Deploy & CMS</h2>
            <p>C, C++, Bash/Command Line, Git</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;