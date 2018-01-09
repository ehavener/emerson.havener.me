import React, { Component } from 'react';
import './Skills.css';

import arduino from './images/skill-icons/arduino.svg';
import bootstrap from './images/skill-icons/bootstrap.svg';
import c from './images/skill-icons/c.svg';
import cpp from './images/skill-icons/cpp.svg';
import CSS3 from './images/skill-icons/CSS3.svg';
import HTML5 from './images/skill-icons/HTML5.svg';
import illustrator from './images/skill-icons/illustrator.svg';
import jQuery from './images/skill-icons/jQuery.svg';
import JS from './images/skill-icons/JS.svg';
import mongodb from './images/skill-icons/mongodb.svg';
import nodejs from './images/skill-icons/nodejs.svg';
import photoshop from './images/skill-icons/photoshop.svg';
import react from './images/skill-icons/react.svg';
import SASS from './images/skill-icons/SASS.svg';
import xd from './images/skill-icons/xd.svg';

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
            <div>
              <object type="image/svg+xml" height="50" width="50" data={HTML5} aria-label="HTML5"></object>
              <object type="image/svg+xml" height="50" width="50" data={CSS3} aria-label="CSS3"></object>
              <object type="image/svg+xml" height="50" width="50" data={JS} aria-label="JS"></object>
            </div>
            <div>
              <object type="image/svg+xml" height="50" width="50" data={bootstrap} aria-label="bootstrap"></object>
              <object type="image/svg+xml" height="50" width="50" data={jQuery} aria-label="jQuery"></object>
              <object type="image/svg+xml" height="50" width="50" data={SASS} aria-label="SASS"></object>
            </div>
            <div>
              <object type="image/svg+xml" height="50" width="50" data={mongodb} aria-label="mongodb"></object>
              <object type="image/svg+xml" height="50" width="50" data={nodejs} aria-label="nodejs"></object>
              <object type="image/svg+xml" height="50" width="50" data={react} aria-label="react"></object>
            </div>
          </div>
          <div className="card">
            <h2>Back-end</h2>
            <p>Node.js, Express, MongoDB, SQL</p>
            <div>
              <object type="image/svg+xml" height="50" width="50" data={photoshop} aria-label="photoshop"></object>
              <object type="image/svg+xml" height="50" width="50" data={illustrator} aria-label="illustrator"></object>
              <object type="image/svg+xml" height="50" width="50" data={xd} aria-label="xd"></object>
            </div>
          </div>
          <div className="card">
            <h2>Testing, Tooling & DevOps</h2>
            <p>Mocha, Chrome DevTools, React/Redux DevTools, JS Tools (npm, Webpack, Babel, Gulp)</p>
          </div>
          <div className="card">
            <h2>Other Languages</h2>
            <p>C, C++, Bash/Command Line, Git</p>
            <div>
              <object type="image/svg+xml" height="50" width="50" data={c} aria-label="c"></object>
              <object type="image/svg+xml" height="50" width="50" data={cpp} aria-label="cpp"></object>
              <object type="image/svg+xml" height="50" width="50" data={arduino} aria-label="arduino"></object>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;