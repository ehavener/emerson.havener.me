import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home" id="Home">
        <div className="content">
          <div className="name">
            <h1>Emerson</h1>
            <h1>Havener</h1>
          </div>
          <h2>Web Developer</h2>
          <div className="social-icons">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-dribbble" aria-hidden="true"></i>
            <i className="fa fa-codepen" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;