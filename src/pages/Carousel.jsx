import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.scss';
import logo1300 from '../images/design/design01.png';
import logo2300 from '../images/design/design02.png';
import logo3300 from '../images/design/design03.png';
import logo4300 from '../images/design/design04.png';
import logo5300 from '../images/design/design05.png';
import logo6300 from '../images/design/design06.png';
import logo7300 from '../images/design/design07.png';

const images = [
  logo1300,
  logo2300,
  logo3300,
  logo4300,
  logo5300,
  logo6300,
  logo7300,
];

const settings = {
  customPaging(i) {
    return (
      <img src={images[i]} alt="Gallery Page" />
    );
  },
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  dotsClass: 'slick-dots slick-thumb',
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  className: 'innerSliderDiv',
  pauseOnDotsHover: true,
};

const Carousel = () => (
  <section className="carousel">
    <h2>Designs</h2>
    <Slider {...settings}>
      <div className="march">
        <img src={logo1300} alt="logo1" />
      </div>
      <div className="ute">
        <img src={logo2300} alt="logo2" />
      </div>
      <div className="snake">
        <img src={logo3300} alt="logo3" />
      </div>
      <div className="bernie">
        <img src={logo4300} alt="logo4" />
      </div>
      <div className="unlimited">
        <img src={logo5300} alt="logo5" />
      </div>
      <div className="mtv">
        <img src={logo6300} alt="logo6" />
      </div>
      <div className="kehoe">
        <img src={logo7300} alt="logo7" />
      </div>
    </Slider>
  </section>
);

export default Carousel;
