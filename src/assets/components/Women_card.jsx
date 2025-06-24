import React from 'react'
import { Link } from 'react-router-dom';
import './Women_card.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Women_card = () => {
  const sections = [
    {
      title: 'Women Clothing',
      cards: [
        { id: 17, title: 'casual wear', text: 'regular wear', img: '/images/Hoodie.jpg' },
        { id: 18, title: 'Dresses', text: 'elegant and beautiful', img: '/images/Gown.jpg' },
        { id: 19, title: 'Sarees', text: 'Soft and Comfortable', img: '/images/Saree1.jpg' },
        { id: 20, title: 'Lehenga', text: 'Designer fit', img: '/images/Lehenga.jpg' },
      ],
    },
    {
      title: 'Accessories',
      cards: [
        { id: 21, title: 'Earrings', text: 'Elegant and stylish', img: '/images/Earing.jpg' },
        { id: 22, title: 'Necklace Set', text: 'Party wear', img: '/images/Necklace.jpg' },
        { id: 23, title: 'Bangles', text: 'Trendy and sleek', img: '/images/Bangle.jpg' },
        { id: 24, title: 'Ring', text: 'Minimalist design', img: '/images/Ring.jpg' },
      ],
    },
    {
      title: 'Footwear',
      cards: [
        { id: 25, title: 'Flats', text: 'Long lasting matte', img: '/images/WomenFlats.jpg' },
        { id: 26, title: 'Heels', text: 'Glowing skin formula', img: '/images/Heels.jpg' },
        { id: 27, title: 'Sandals', text: 'Fresh scent', img: '/images/Sandals.jpg' },
        { id: 28, title: 'Juti', text: 'Glossy finish', img: '/images/Juti.jpg' },
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

export default Women_card
