import React, { Component } from 'react';
import './Navbar.css';




class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      if(this.state.theme = "dark"){
        this.setState({
          theme: "light"
        });
      }
    } else {
      if(this.state.theme = "light"){
        this.setState({
          theme: "dark"
        });
      }
    }
    console.log(this.state.theme);
  }

  render() {
    var dark = {

    }
    return (
        <header className={`header ${this.state.theme}`} onScroll={this.handleScroll}>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Skills</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
          </ul>
        </header>
    );
  }
}

export default Navbar;