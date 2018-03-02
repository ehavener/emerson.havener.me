import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './styles/Navbar.css';

const { Link } = Scroll;
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
    this.handleScroll = this.handleScroll.bind(this,);
    this.handleClick = this.handleClick.bind(this,);
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      this.handleScroll,
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'scroll',
      this.handleScroll,
    );
  }

  handleClick() {
    // console.log("handling");
    document.getElementById('menu-btn',).checked = false;
  }

  handleScroll(e) {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      if (this.state.theme === 'dark') {
        this.setState({
          theme: 'light',
        });
      }
    } else if (this.state.theme === 'light') {
      this.setState({
        theme: 'dark',
      });
    }
    // console.log(this.state.theme);
  }

  render() {
    return (
      <header
        className={`header ${this.state.theme}`}
        onScroll={this.handleScroll}
      >
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
        />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
        >
          <span className="navicon" />
        </label>
        <div className="logo" />
        <ul className="menu">
          <li>
            <Link
              id="home-link"
              activeClass="active"
              to="home"
              spy
              duration={250}
              onClick={this.handleClick}
              href=" "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy
              smooth
              duration={250}
              onClick={this.handleClick}
              href=" "
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy
              smooth
              duration={250}
              onClick={this.handleClick}
              href=" "
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="about"
              spy
              smooth
              duration={250}
              onClick={this.handleClick}
              href=" "
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy
              smooth
              duration={250}
              onClick={this.handleClick}
              href=" "
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Navbar;

// add smooth anchor scrolling
