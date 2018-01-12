import React, { Component } from 'react';
import Slider from '../node_modules/react-slick/lib/slider';
import './Carousel.css';
import logo1_300 from './images/design/design01.png';
import logo2_300 from './images/design/design02.png';
import logo3_300 from './images/design/design03.png';
import logo4_300 from './images/design/design04.png';
import logo5_300 from './images/design/design05.png';
import logo6_300 from './images/design/design06.png';
import logo7_300 from './images/design/design07.png';
import logo8_300 from './images/design/design08.png';
import logo9_300 from './images/design/design09.png';
import logo10_300 from './images/design/design10.png';


export default class Carousel extends Component {



  render() {

    const images = [
      logo1_300, logo2_300, logo3_300, logo4_300, logo5_300, logo6_300, logo7_300,
      logo8_300, logo9_300, logo10_300
    ];
    const baseUrl = './images/carousel';
    const settings = {
      customPaging: function(i) {
        return <a><img src={images[i]} width="50px" /></a>
      },
      arrows: false,
      dots: true,
      className: 'center',
      centerMode: true,
      centerPadding: '20px',
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className="carousel">
        <h1>Graphic Design Portfolio</h1>
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
          <div><img src={logo10_300} alt="logo9"/></div>
        </Slider>
      </div>
    )
  }
}

/*
export default class Carousel extends Component {
  render() {
    const settings = {
      arrows: true,
      autoplay: true,
      dotsClass: 'slick-dots slick-thumb',
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
        <h1>Graphic Design Portfolio</h1>
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
*/