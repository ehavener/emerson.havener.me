import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="Portfolio">
        <h1>Web Portfolio</h1>
        <p>Some of my recent projects.</p>
        <div className="deck">
          <div className="card blue">
            <img src="https://insideevs.com/wp-content/uploads/2016/08/20160821000319_0.jpg" alt="a web dev project"></img>
            <i className="fa fa-hand-grab-o" aria-hidden="true"></i>
          </div>
          <div className="card red">
            <img src="https://cdn1.freshdesignweb.com/wp-content/uploads/2017/02/tech-news-free-blogger-template.jpg" alt="a web dev project"></img>
            <i className="fa fa-hand-grab-o" aria-hidden="true"></i>
          </div>
          <div className="card green">
            <img src="https://i.ytimg.com/vi/fOJwoL6GEbw/maxresdefault.jpg" alt="a web dev project"></img>
            <i className="fa fa-hand-grab-o" aria-hidden="true"></i>
          </div>
          <div className="card blue">
            <img src="https://blog.resellerclub.com/wp-content/uploads/2017/04/Screenshot_2017-04-03-15-39-50.png" alt="a web dev project"></img>
            <i className="fa fa-hand-grab-o" aria-hidden="true"></i>
          </div>
          <div className="card red">
            <img src="https://cdn.thepennyhoarder.com/wp-content/uploads/2015/09/01020826/Screen-Shot-2017-02-01-at-11.13.17-AM.png" alt="a web dev project"></img>
            <i className="fa fa-hand-grab-o" aria-hidden="true"></i>
          </div>
          <div className="card green">
            <img src="https://cdn-images-1.medium.com/max/1600/1*FHclYCviQdyoOUg3UgD8Eg.png" alt="a web dev project"></img>
            <i className="fa fa-hand-grab-o" aria-hidden="true"></i>
          </div>
          <div className="card">
            <img src="https://assets.wordpress.envato-static.com/uploads/2016/11/4.png" alt="a web dev project"></img>
            <i className="fa fa-hand-grab-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;