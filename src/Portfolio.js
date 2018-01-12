import React, { Component } from 'react';
import './Portfolio.css';

import html5 from './images/skill-icons-sq/html5.svg';
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

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio" id="Portfolio">
        <h1>Web Portfolio</h1>
        <p>Some of my recent projects.</p>
        <div className="deck">
          <a href="" target="">
          <div id="chauffeur" className="card red">
            <img className="bg" src="https://insideevs.com/wp-content/uploads/2016/08/20160821000319_0.jpg" alt="a web dev project"></img>
            <div className="overlay">
              <h2>Chauffeur Reno</h2>
              <p>A promotional single page website for a local startup.</p>
              <ul className="techList">
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={html5} aria-label="HTML5"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={git} aria-label="git"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={gulp} aria-label="gulp"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={sass} aria-label="sass"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={javascript} aria-label="javascript"></object>
                </div>
              </ul>
            </div>
          </div>
          </a>
          <a href="" target="">
          <div id="reno-husky-rescue" className="card green">
            <img className="bg" src="https://i.ytimg.com/vi/fOJwoL6GEbw/maxresdefault.jpg" alt="a web dev project"></img>
            <div className="overlay">
              <h2>Reno Husky Rescue</h2>
              <p>A promotional single page website for a local startup.</p>
              <ul className="techList">
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={html5} aria-label="HTML5"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={git} aria-label="git"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={gulp} aria-label="gulp"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={sass} aria-label="sass"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={javascript} aria-label="javascript"></object>
                </div>
              </ul>
            </div>
          </div>
          </a>
          <a href="" target="">
          <div id="cantina-menu" className="card blue">
            <img className="bg" src="https://blog.resellerclub.com/wp-content/uploads/2017/04/Screenshot_2017-04-03-15-39-50.png" alt="a web dev project"></img>
            <div className="overlay">
              <h2>Cantina Menu</h2>
              <p>A promotional single page website for a local startup.</p>
              <ul className="techList">
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={html5} aria-label="HTML5"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={git} aria-label="git"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={gulp} aria-label="gulp"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={sass} aria-label="sass"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={javascript} aria-label="javascript"></object>
                </div>
              </ul>
            </div>
          </div>
          </a>
          <a href="" target="">
          <div id="fadeaway-hardcount" className="card red">
            <img className="bg" src="https://cdn.thepennyhoarder.com/wp-content/uploads/2015/09/01020826/Screen-Shot-2017-02-01-at-11.13.17-AM.png" alt="a web dev project"></img>
            <div className="overlay">
              <h2>Fadeaway/Hardcount</h2>
              <p>A promotional single page website for a local startup.</p>
              <ul className="techList">
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={html5} aria-label="HTML5"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={git} aria-label="git"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={gulp} aria-label="gulp"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={sass} aria-label="sass"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={javascript} aria-label="javascript"></object>
                </div>
              </ul>
            </div>
          </div>
          </a>
          <a href="" target="">
          <div id="handel" className="card green">
            <img className="bg" src="https://assets.wordpress.envato-static.com/uploads/2016/11/4.png" alt="a web dev project"></img>
            <div className="overlay">
              <h2>Handel</h2>
              <p>A promotional single page website for a local startup.</p>
              <ul className="techList">
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={html5} aria-label="HTML5"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={git} aria-label="git"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={gulp} aria-label="gulp"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={sass} aria-label="sass"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={javascript} aria-label="javascript"></object>
                </div>
              </ul>
            </div>
          </div>
          </a>
          <a href="" target="">
          <div id="wi2c-drivers" className="card blue">
            <img className="bg" src="https://cdn-images-1.medium.com/max/1600/1*FHclYCviQdyoOUg3UgD8Eg.png" alt="a web dev project"></img>
            <div className="overlay">
              <h2>Wireless I2C Drivers</h2>
              <p>A promotional single page website for a local startup.</p>
              <ul className="techList">
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={html5} aria-label="HTML5"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={git} aria-label="git"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={gulp} aria-label="gulp"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={sass} aria-label="sass"></object>
                </div>
                <div class="object-wrap">
                  <object type="image/svg+xml" height="50" width="50" data={javascript} aria-label="javascript"></object>
                </div>
              </ul>
            </div>
          </div>
          </a>
        </div>
      </section>
    );
  }
}

export default Portfolio;