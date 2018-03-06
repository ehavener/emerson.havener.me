import React from 'react';
import OnVisible, {
  setDefaultProps,
} from 'react-on-visible';
import '../styles/Portfolio.scss';

import html from '../images/skills/html.svg';
import css from '../images/skills/css.svg';
import javascript from '../images/skills/javascript.svg';
// import bootstrap from '../images/skills/bootstrap.svg';
import sass from '../images/skills/sass.svg';
import jquery from '../images/skills/jquery.svg';
import react from '../images/skills/react.svg';
// import redux from '../images/skills/redux.svg';

// import photoshop from '../images/skills/photoshop.svg';
// import illustrator from '../images/skills/illustrator.svg';
// import xd from '../images/skills/xd.svg';

// import laravel from '../images/skills/laravel.svg';
import wordpress from '../images/skills/wordpress.svg';
import mysql from '../images/skills/mysql.svg';

import webpack from '../images/skills/webpack.svg';
import git from '../images/skills/git.svg';
import docker from '../images/skills/docker.svg';

// import arduino from '../images/skills/arduino.svg';
import c from '../images/skills/c.svg';
// import cpp from '../images/skills/cpp.svg';

// import gulp from '../images/skills/gulp.svg';
import lumen from '../images/skills/lumen.svg';
import csharp from '../images/skills/csharp.svg';
import unity from '../images/skills/unity.svg';
import python from '../images/skills/python.svg';

import fadeawayPreview from '../images/portfolio/fadeaway-preview.png';
import wi2cPreview from '../images/portfolio/wi2c-preview.png';
import handelPreview from '../images/portfolio/handel-preview.png';
import chauffeurPreview from '../images/portfolio/chauffeur-preview.png';
import happyhourPreview from '../images/portfolio/happyhour-preview.jpg';

setDefaultProps({
  bounce: true,
  visibleClassName: 'visible',
  percent: 100,
});

const Portfolio = () => (
  <section className="portfolio" id="Portfolio">
    <h2 className="title">Projects</h2>
    <div className="deck">
      <a
        href="https://github.com/ehavener/dontdrive"
        target="_blank"
      >
        <OnVisible
          id="chauffeur"
          className="card red chauffeur"
        >
          <img
            className="bg"
            src={chauffeurPreview}
            alt="a web dev project"
          />

          <div className="overlay">
            <h2>Don't Drive</h2>
            <p>
              ​A promotional webpage for a ride
              sharing startup.
            </p>
            <ul className="techList">
              <div className="object-wrap">
                <object
                  type="image/svg+xml"
                  height="50"
                  width="50"
                  data={wordpress}
                  aria-label="wordpress"
                />
              </div>
              <div className="object-wrap">
                <object
                  type="image/svg+xml"
                  height="50"
                  width="50"
                  data={jquery}
                  aria-label="javascript"
                />
              </div>
              <div className="object-wrap">
                <object
                  type="image/svg+xml"
                  height="50"
                  width="50"
                  data={lumen}
                  aria-label="lumen"
                />
              </div>
              <div className="object-wrap">
                <object
                  type="image/svg+xml"
                  height="50"
                  width="50"
                  data={mysql}
                  aria-label="mysql"
                />
              </div>
              <div className="object-wrap">
                <object
                  type="image/svg+xml"
                  height="50"
                  width="50"
                  data={docker}
                  aria-label="docker"
                />
              </div>
            </ul>
          </div>
        </OnVisible>
      </a>
      <OnVisible
        id="happy-hour"
        className="card green happyHour"
      >
        <img
          className="bg"
          src={happyhourPreview}
          alt="a web dev project"
        />
        <div className="overlay">
          <h2>Happy Hour</h2>
          <p>
            ​A single page web application that
            displays nearby happy hour specials.
          </p>
          <ul className="techList">
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={react}
                aria-label="react"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={sass}
                aria-label="sass"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={mysql}
                aria-label="mysql"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={webpack}
                aria-label="webpack"
              />
            </div>
          </ul>
        </div>
      </OnVisible>
      <OnVisible
        id="handel"
        className="card purple handel"
      >
        <img
          className="bg"
          src={handelPreview}
          style={{ backgroundColor: '#535c68' }}
          alt="a web dev project"
        />
        <div className="overlay">
          <h2>Handel</h2>
          <p>
            ​A prototype of a leap motion
            application for piano tutoring.
          </p>
          <ul className="techList">
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={unity}
                aria-label="html"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={csharp}
                aria-label="git"
              />
            </div>
          </ul>
        </div>
      </OnVisible>
      <OnVisible
        id="arduino-i2c-drivers"
        className="card turquoise i2c"
      >
        <img
          className="bg"
          src={wi2cPreview}
          alt="a web dev project"
        />
        <div className="overlay">
          <h2>I2C Drivers</h2>
          <p>
            ​A minimal re-implementation of the
            Arduino I2C Wire library for learning
            purposes.
          </p>
          <ul className="techList">
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={c}
                aria-label="c"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={git}
                aria-label="git"
              />
            </div>
          </ul>
        </div>
      </OnVisible>
      <OnVisible
        id="fadeaway-hardcount"
        className="card black fadeaway"
      >
        <img
          className="bg"
          src={fadeawayPreview}
          alt="a web dev project"
          style={{ backgroundColor: 'white' }}
        />
        <div className="overlay">
          <h2>Fadeaway</h2>
          <p>
            ​A python/selenium web scraper that
            pushes live NBA scores to a browser
            extension.
          </p>
          <ul className="techList">
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={python}
                aria-label="python"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={html}
                aria-label="html"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={css}
                aria-label="css"
              />
            </div>
            <div className="object-wrap">
              <object
                type="image/svg+xml"
                height="50"
                width="50"
                data={javascript}
                aria-label="javascript"
              />
            </div>
          </ul>
        </div>
      </OnVisible>
    </div>
  </section>
);

export default Portfolio;
