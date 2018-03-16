import React from 'react';

import '../styles/App.scss';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';
import Certs from './Certs';

const App = () => (
  <div id="app" className="app">
    <Home name="home" className="section" />
    <Navbar name="navbar" className="section" />
    <Portfolio name="portfolio" className="section" />
    <Carousel name="carousel" className="section" />
    <Skills name="skills" className="section" />
    <Certs name="certs" className="section" />
    <About name="about" className="section" />
    <Contact name="contact" className="section" />
    <Footer name="footer" className="section" />
  </div>
);

export default App;
