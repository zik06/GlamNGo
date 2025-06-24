import React from 'react'
import { Link } from 'react-router-dom';
import './Kid_card.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Kid_card = () => {
  const sections = [
    {
      title: 'Boys Clothing',
      cards: [
        { id: 29, title: 'Shirt', text: 'Casual cotton shirt', img: '/images/Kidshirt.jpg' },
        { id: 30, title: 'T-shirt', text: 'Graphic tee for summer', img: '/images/Kidboytshirt.jpg' },
        { id: 31, title: 'Jeans', text: 'comfortable fit', img: '/images/Kidboyjeans.jpg' },
        { id: 32, title: 'Shorts', text: 'Comfortable fit', img: '/images/Shorts.jpg' },
      ],
    },
    {
      title: 'Gils Clothing',
      cards: [
        { id: 33, title: 'Dresses', text: 'Elegant and stylish', img: '/images/babyfrock.jpg' },
        { id: 34, title: 'Tops', text: 'Party wear', img: '/images/Kidtop.jpg' },
        { id: 35, title: 'Jeans', text: 'Trendy and sleek', img: '/images/Girljeans.jpg' },
        { id: 36, title: 'Tshirt', text: 'comfortable fit', img: '/images/Kidtshirt.jpg' },
      ],
    },
    {
      title: 'Toys Section',
      cards: [
        { id: 37, title: 'Soft Toys', text: 'Extra softness', img: '/images/softtoy.jpg' },
        { id: 38, title: 'Building Toys', text: 'Mega Sized Blocked Toys', img: '/images/Buildingtoy.jpg' },
        { id: 39, title: 'Educational Toys', text: 'Play and Learn', img: '/images/Educationaltoy.jpg' },
        { id: 40, title: 'Outdoor Toys', text: 'Quick ride', img: '/images/Outdoortoy.jpg' },
      ],
    },
  ]

  return (
    <div className="cards-wrapper">
      {sections.map((section, idx) => (
        <div key={idx} className="section-group">
          <h2 className="section-title">{section.title}</h2>
          <Row xs={1} md={4} className="g-4">
            {section.cards.map((card, index) => (
              <Col key={index}>
              <Link to={`/product/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="custom-card1">
                  {/* <Card.Img variant="top" src={card.img} alt={card.title} /> */}
                <div className="circle-image-wrapper">
                <img className="circle-img" src={card.img} alt={card.title} />
                </div>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  )
}

export default Kid_card
