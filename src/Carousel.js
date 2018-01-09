import React, { Component } from 'react'
import Slider from '../node_modules/react-slick/lib/slider'
import './Carousel.css';
import logo1_300 from './images/carousel/SnakeySeason-300.png';
import logo2_300 from './images/carousel/Jersey-300.png';
import logo3_300 from './images/carousel/Packelodeon-300.png';
import logo4_300 from './images/carousel/DiceOrDie-300.png';
import logo5_300 from './images/carousel/Jersey-300.png';
import logo6_300 from './images/carousel/Packelodeon-300.png';
import logo7_300 from './images/carousel/DiceOrDie-300.png';
import logo8_300 from './images/carousel/Jersey-300.png';
import logo9_300 from './images/carousel/Packelodeon-300.png';

export default class Carousel extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '40px',
      slidesToShow: 1,
      speed: 500,
      dots: true
    };
    return (
      <div className="carousel">
        <h1>Graphic Design</h1>
        <p>A collection of my favorite projects.</p>
        <Slider {...settings}>
          <div><img src={logo1_300} alt="logo1"/></div>
          <div><img src={logo2_300} alt="logo2"/></div>
          <div><img src={logo3_300} alt="logo3"/></div>
          <div><img src={logo4_300} alt="logo4"/></div>
          <div><img src={logo5_300} alt="logo5"/></div>
          <div><img src={logo6_300} alt="logo6"/></div>
          <div><img src={logo7_300} alt="logo7"/></div>
          <div><img src={logo8_300} alt="logo8"/></div>
          <div><img src={logo9_300} alt="logo9"/></div>
        </Slider>
      </div>
    );
  }
}