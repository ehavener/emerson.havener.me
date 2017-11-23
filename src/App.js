import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
        <Navbar />
        <Skills />
      </div>
    );
  }
}

export default App;
