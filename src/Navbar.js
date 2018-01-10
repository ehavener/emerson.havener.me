import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick(){
    //console.log("handling");
    document.getElementById("menu-btn").checked = false;
  }

  handleScroll(e) {
    //console.log(window.scrollY);
    if (window.scrollY > 0) {
      if(this.state.theme === "dark"){
        this.setState({
          theme: "light"
        });
      }
    } else {
      if(this.state.theme === "light"){
        this.setState({
          theme: "dark"
        });
      }
    }
    //console.log(this.state.theme);
  }

  render() {
    return (
        <header className={`header ${this.state.theme}`} onScroll={this.handleScroll}>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <div className="logo"></div>
          <ul className="menu">
            <li><a id="home-link" href="#Home" onClick={this.handleClick}>Home</a></li>
            <li><a href="#About" onClick={this.handleClick}>About Me</a></li>
            <li><a href="#Skills" onClick={this.handleClick}>Skills</a></li>
            <li><a href="#Portfolio" onClick={this.handleClick}>Portfolio</a></li>
            <li><a href="#Contact" onClick={this.handleClick}>Contact</a></li>
          </ul>
        </header>
    );
  }
}

export default Navbar;

// add smooth anchor scrolling