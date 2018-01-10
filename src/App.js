import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';



class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
        <Navbar />
        <About />
        <Skills />
        <Portfolio />
        <Carousel />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
