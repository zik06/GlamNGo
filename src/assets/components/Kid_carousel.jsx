import React from 'react'
import './Kid_carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Kid_carousel = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
                <Link to="/product/81">
          <img
            className="d-block w-100"
            src="/images/Kidcloth.jpg"
            alt="First slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/product/82">
          <img
            className="d-block w-100"
            src="/images/Kidcloth1.jpg"
            alt="Second slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/product/83">
          <img
            className="d-block w-100"
            src="/images/Kidcloth2.jpg"
            alt="Third slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Kid_carousel
