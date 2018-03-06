import React from 'react';
import OnVisible, {
  setDefaultProps,
} from 'react-on-visible';
import '../styles/Skills.scss';

import html from '../images/skills/html.svg';
import css from '../images/skills/css.svg';
import javascript from '../images/skills/javascript.svg';
import bootstrap from '../images/skills/bootstrap.svg';
import sass from '../images/skills/sass.svg';
import jquery from '../images/skills/jquery.svg';
import react from '../images/skills/react.svg';
import redux from '../images/skills/redux.svg';

import photoshop from '../images/skills/photoshop.svg';
import illustrator from '../images/skills/illustrator.svg';
import xd from '../images/skills/xd.svg';

import laravel from '../images/skills/laravel.svg';
import wordpress from '../images/skills/wordpress.svg';
import mysql from '../images/skills/mysql.svg';

import webpack from '../images/skills/webpack.svg';
import git from '../images/skills/git.svg';
import docker from '../images/skills/docker.svg';

import arduino from '../images/skills/arduino.svg';
import c from '../images/skills/c.svg';
import cpp from '../images/skills/cpp.svg';

setDefaultProps({
  bounce: true,
  visibleClassName: 'visible',
  percent: 100,
});

const Skills = () => (
  <section className="skills" id="Skills">
    <h2>Skills & Toolset</h2>
    <div className="deck">
      <OnVisible className="card front-end">
        <h3>Front-end</h3>
        <div className="deck-icons">
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={html}
              aria-label="html"
            />
            <p className="html caption">HTML</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={css}
              aria-label="css"
            />
            <p className="css caption">CSS</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={javascript}
              aria-label="Javascript ES7"
            />
            <p className="javascript caption">
              ES6
            </p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={bootstrap}
              aria-label="bootstrap"
            />
            <p className="bootstrap caption">
              Bootstrap
            </p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={sass}
              aria-label="SASS"
            />
            <p className="sass caption">SASS</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={jquery}
              aria-label="jQuery"
            />
            <p className="jquery caption">
              jQuery
            </p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={react}
              aria-label="react"
            />
            <p className="react caption">React</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={redux}
              aria-label="redux"
            />
            <p className="redux caption">Redux</p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card design">
        <h3>Design & UX</h3>
        <div className="deck-icons">
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={illustrator}
              aria-label="redux"
            />
            <p className="illustrator caption">
              Illustrator
            </p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={photoshop}
              aria-label="photoshop"
            />
            <p className="photoshop caption">
              Photoshop
            </p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={xd}
              aria-label="xd"
            />
            <p className="xd caption">XD</p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card back-end">
        <h3>Back-end</h3>
        <div className="deck-icons">
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={laravel}
              aria-label="Laravel"
            />
            <p className="laravel caption">
              Laravel
            </p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={mysql}
              aria-label="MySQL"
            />
            <p className="mysql caption">MySQL</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={wordpress}
              aria-label="wordpress"
            />
            <p className="wordpress caption">
              Wordpress
            </p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card tooling">
        <h3>Tooling</h3>
        <div className="deck-icons">
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={webpack}
              aria-label="webpack"
            />
            <p className="webpack caption">
              webpack
            </p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={git}
              aria-label="git"
            />
            <p className="git caption">git</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={docker}
              aria-label="docker"
            />
            <p className="docker caption">
              docker
            </p>
          </div>
        </div>
      </OnVisible>
      <OnVisible className="card systems">
        <h3>Systems</h3>
        <div className="deck-icons">
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={c}
              aria-label="c"
            />
            <p className="c caption">C</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={cpp}
              aria-label="cpp"
            />
            <p className="cpp caption">C++</p>
          </div>
          <div className="card-icons">
            <object
              type="image/svg+xml"
              data={arduino}
              aria-label="arduino"
            />
            <p className="arduino caption">
              Arduino
            </p>
          </div>
        </div>
      </OnVisible>
    </div>
  </section>
);

export default Skills;
