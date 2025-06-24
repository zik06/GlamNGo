import React from 'react'
import './Carousal_men.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Carousal_men() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
        <Link to="/product/1">
          <img
            className="d-block w-100"
            src="/images/Shirts.jpg"
            alt="First slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/product/2">
          <img
            className="d-block w-100"
            src="/images/Menbeautyproducts1.jpg"
            alt="Second slide"
          />
          </Link>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/product/3">
          <img
            className="d-block w-100"
            src="/images/Menscloth.jpg"
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
  );
}

export default Carousal_men
