import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Boot.scss';
import Daegu from '../img/Daegu.jpg';
import daejon from '../img/daejon.jpg';
import seoul from '../img/seoul.jpg';
import busanmarincity from '../img/busanmarincity.jpg';
import Title from './Title';
function Boot() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={Daegu} alt="First slide" />
          <Carousel.Caption>
            <h3 className="labelColor">Daegu Cultural Heritage</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={daejon} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="labelColor">Daejeon LOTTE City Hotel</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={seoul} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="labelColor">Seoul Sky view</h3>
            {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={busanmarincity}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="labelColor">Busan MarinCity</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Title />
    </>
  );
}

// render(<Boot />);
export default Boot;
