import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Boot.scss';
import clothes1 from '../img/clothes1.jpg';
import clothes2 from '../img/clothes2.jpg';
import clothes3 from '../img/clothes3.jpg';

function Boot() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={clothes1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="labelColor">First slide label</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={clothes2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="labelColor">Second slide label</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={clothes3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="labelColor">Third slide label</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<Boot />);
export default Boot;
