import React, { Component } from 'react';
import './Skills.css';

import html from './images/skill-icons/html.svg';
import css from './images/skill-icons/css.svg';
import javascript from './images/skill-icons/javascript.svg';
import bootstrap from './images/skill-icons/bootstrap.svg';
import sass from './images/skill-icons/sass.svg';
import jquery from './images/skill-icons/jquery.svg';
import react from './images/skill-icons/react.svg';
import redux from './images/skill-icons/redux.svg';

import photoshop from './images/skill-icons/photoshop.svg';
import illustrator from './images/skill-icons/illustrator.svg';
import xd from './images/skill-icons/xd.svg';

import laravel from './images/skill-icons/laravel.svg';
import wordpress from './images/skill-icons/wordpress.svg';
import mysql from './images/skill-icons/mysql.svg';

import webpack from './images/skill-icons/webpack.svg';
import git from './images/skill-icons/git.svg';
import docker from './images/skill-icons/docker.svg';

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
                <object type="image/svg+xml" data={html} aria-label="html"></object>
                <p id="html-caption">html</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={css} aria-label="css"></object>
                <p id="css-caption">css</p>
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
            <p>Node.js, Express & MySQL</p>
            <div className="deck-icons">
              <div className="card-icons">
                <object type="image/svg+xml" data={laravel} aria-label="Laravel"></object>
                <p id="laravel-caption">Laravel</p>
              </div>
              <div className="card-icons">
              <object type="image/svg+xml" data={wordpress} aria-label="wordpress"></object>
                <p id="wordpress-caption">Wordpress</p>
              </div>
              <div className="card-icons">
              <object type="image/svg+xml" data={mysql} aria-label="MySQL"></object>
                <p id="mysql-caption">MySQL</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Tooling & Testing</h2>
            <p>Webpack, Git, & Docker</p>
            <div className="deck-icons">
              <div className="card-icons">
                <object type="image/svg+xml" data={webpack} aria-label="webpack"></object>
                <p id="webpack-caption">Webpack</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={git} aria-label="git"></object>
                <p id="git-caption">git</p>
              </div>
              <div className="card-icons">
                <object type="image/svg+xml" data={docker} aria-label="docker"></object>
                <p id="docker-caption">docker</p>
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