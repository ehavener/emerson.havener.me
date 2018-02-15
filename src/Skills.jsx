import React from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';
import './styles/Skills.css';

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

setDefaultProps({
  bounce: true,
  visibleClassName: 'visible',
  percent: 100,
});

const Skills = () => (
  <section className="skills" id="Skills">
    <h1>Skills & Tools</h1>
    <div className="deck">
      <OnVisible className="card front-end">
        <h2>Front-end</h2>
        <div className="deck-icons">
          <div className="card-icons">
            <object type="image/svg+xml" data={html} aria-label="html" />
            <p id="html-caption">HTML</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={css} aria-label="css" />
            <p id="css-caption">CSS</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={javascript} aria-label="Javascript ES7" />
            <p id="javascript-caption">Javascript ES6</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={bootstrap} aria-label="bootstrap" />
            <p id="bootstrap-caption">Bootstrap</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={sass} aria-label="SASS" />
            <p id="sass-caption">SASS</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={jquery} aria-label="jQuery" />
            <p id="jquery-caption">jQuery</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={react} aria-label="react" />
            <p id="react-caption">React</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={redux} aria-label="redux" />
            <p id="redux-caption">Redux</p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card design">
        <h2>Design & UX</h2>
        <div className="deck-icons">
          <div className="card-icons">
            <object type="image/svg+xml" data={illustrator} aria-label="redux" />
            <p id="illustrator-caption">Illustrator</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={photoshop} aria-label="photoshop" />
            <p id="photoshop-caption">Photoshop</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={xd} aria-label="xd" />
            <p id="xd-caption">XD</p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card back-end">
        <h2>Back-end</h2>
        <div className="deck-icons">
          <div className="card-icons">
            <object type="image/svg+xml" data={laravel} aria-label="Laravel" />
            <p id="laravel-caption">Laravel</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={wordpress} aria-label="wordpress" />
            <p id="wordpress-caption">Wordpress</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={mysql} aria-label="MySQL" />
            <p id="mysql-caption">MySQL</p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card tooling">
        <h2>Tooling</h2>
        <div className="deck-icons">
          <div className="card-icons">
            <object type="image/svg+xml" data={webpack} aria-label="webpack" />
            <p id="webpack-caption">Webpack</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={git} aria-label="git" />
            <p id="git-caption">git</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={docker} aria-label="docker" />
            <p id="docker-caption">docker</p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card systems">
        <h2>Systems</h2>
        <div className="deck-icons">
          <div className="card-icons">
            <object type="image/svg+xml" data={c} aria-label="c" />
            <p id="c-caption">C</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={cpp} aria-label="cpp" />
            <p id="cpp-caption">C++</p>
          </div>
          <div className="card-icons">
            <object type="image/svg+xml" data={arduino} aria-label="arduino" />
            <p id="arduino-caption">Arduino</p>
          </div>
        </div>
      </OnVisible>
    </div>
  </section>
);


export default Skills;
