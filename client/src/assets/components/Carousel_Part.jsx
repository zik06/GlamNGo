

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousal_Part.css';
import { Link } from 'react-router-dom';

function Carousel_Part() {
  const carouselItems = [
    {
      title: 'Big Summer Sale!',
      text: 'Save up to 50% on clothing, beauty, and accessories. Dont miss out!',
      img: '/images/Homepage.jpg',
      productId: 112,
    },
    {
      title: 'New Arrivals',
      text: 'Discover the latest trends in mens and womens fashion now.',
      img: '/images/Homepage1.jpg',
      productId: 113,
    },
    {
      title: 'Festive Collection',
      text: 'Celebrate the season in style with our exclusive ethnic wear.',
      img: '/images/Homepage2.jpg',
      productId: 114,
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel interval={4000} pause={false} controls={false} indicators={false}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-slide d-flex align-items-center">
              <div className="carousel-text w-50 position-relative">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className="shop-now-sticker"><Link to={`/product/${item.productId}`}>Shop Now</Link></div>
              </div>
              <div className="carousel-img w-50">
                <img className="d-block w-100 transparent-img" src={item.img} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousel_Part;
