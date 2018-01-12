import React, { Component } from 'react';
import './Skills.css';

import html5 from './images/skill-icons/html5.svg';
import css3 from './images/skill-icons/css3.svg';
import javascript from './images/skill-icons/javascript.svg';
import bootstrap from './images/skill-icons/bootstrap.svg';
import sass from './images/skill-icons/sass.svg';
import jquery from './images/skill-icons/jquery.svg';
import react from './images/skill-icons/react.svg';
import redux from './images/skill-icons/redux.svg';

import photoshop from './images/skill-icons/photoshop.svg';
import illustrator from './images/skill-icons/illustrator.svg';
import xd from './images/skill-icons/xd.svg';

import nodejs from './images/skill-icons/nodejs.svg';
import expressjs from './images/skill-icons/expressjs.svg';
import mongodb from './images/skill-icons/mongodb.svg';

import gulp from './images/skill-icons/gulp.svg';
import git from './images/skill-icons/git.svg';
import jasmine from './images/skill-icons/jasmine.svg';

import arduino from './images/skill-icons/arduino.svg';
import c from './images/skill-icons/c.svg';
import cpp from './images/skill-icons/cpp.svg';





class Skills extends Component {
  render() {
    return (
      <div className="skills" id="Skills">
        <h1>Skills & Stack</h1>
        <p>While I'm a full stack developer, my emphasis is in elegant front end design.</p>
        <div className="deck">
          <div className="card">
            <h2>Front-end</h2>
            <p>My experience is primarily with the MEAN stack.</p>
            <div className="deck-icons">
              <div className="card-icons">
                <object type="image/svg+xml" data={html5} aria-label="HTML5"></object>
                <p id="html5-caption">HTML5</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={css3} aria-label="CSS3"></object>
                <p id="css3-caption">CSS3</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={javascript} aria-label="Javascript ES7"></object>
                <p id="javascript-caption">Javascript ES7</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={bootstrap} aria-label="bootstrap"></object>
                <p id="bootstrap-caption">Bootstrap</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={sass} aria-label="SASS"></object>
                <p id="sass-caption">SASS</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={jquery} aria-label="jQuery"></object>
                <p id="jquery-caption">jQuery</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={react} aria-label="react"></object>
                <p id="react-caption">React</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={redux} aria-label="redux"></object>
                <p id="redux-caption">Redux</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Design & Prototyping</h2>
            <p>Adobe Illustrator, Photoshop, & XD</p>
            <div className="deck-icons">
              <div className="card-icons">
                <object type="image/svg+xml" data={illustrator} aria-label="redux"></object>
                <p id="illustrator-caption">Illustrator</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={photoshop} aria-label="photoshop"></object>
                <p id="photoshop-caption">Photoshop</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={xd} aria-label="xd"></object>
                <p id="xd-caption">XD</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Back-end</h2>
            <p>Node.js, Express & MongoDB</p>
            <div className="deck-icons">
              <div className="card-icons">
                <object type="image/svg+xml" data={nodejs} aria-label="NodeJS"></object>
                <p id="nodejs-caption">NodeJS</p>
              </div>
              <div className="card-icons">
              <object type="image/svg+xml" data={expressjs} aria-label="ExpressJS"></object>
                <p id="expressjs-caption">ExpressJS</p>
              </div>
              <div className="card-icons">
              <object type="image/svg+xml" data={mongodb} aria-label="mongodb"></object>
                <p id="mongodb-caption">MongoDB</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Tooling & Testing</h2>
            <p>Gulp, Git, & Jasmine</p>
            <div className="deck-icons">
              <div className="card-icons">
                <object type="image/svg+xml" data={gulp} aria-label="gulp"></object>
                <p id="gulp-caption">Gulp</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={git} aria-label="git"></object>
                <p id="git-caption">git</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={jasmine} aria-label="jasmine"></object>
                <p id="jasmine-caption">Jasmine</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Embedded Systems</h2>
            <p>C, C++, & Arduino</p>
            <div className="deck-icons">
              <div className="card-icons">
              <object type="image/svg+xml" data={c} aria-label="c"></object>
                <p id="c-caption">C</p>
              </div>
              <div className="card-icons">
              <object type="image/svg+xml" data={cpp} aria-label="cpp"></object>
                <p id="cpp-caption">C++</p>
              </div>
              <div className="card-icons">
              <object type="image/svg+xml" data={arduino} aria-label="arduino"></object>
                <p id="arduino-caption">Arduino</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;