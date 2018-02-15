import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';
import Certs from './Certs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      footerVisible: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
}





  handleScroll() {
    var winHeight = window.innerHeight;

    // Annoying to compute doc height due to browser inconsistency
    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

    var value = window.innerHeight + window.pageYOffset;

    console.log(docHeight);
    console.log(value);
    if (value >= (docHeight - (.5 * window.innerHeight))) {
      if (!this.state.footerVisible) {
        this.setState({
          footerVisible: !this.state.footerVisible
        })
      }
    } else if (this.state.footerVisible) {
      this.setState({
        footerVisible: !this.state.footerVisible
      })
    }
  }






  render() {
    return (
      <div className="app">
        <Home />
        <Navbar />
        <Portfolio />
        <Carousel />
        <Skills />
        <Certs />
        <About />
        <Contact />
        <Footer visible={this.state.footerVisible} />
      </div>
    );
  }
}

export default App;
