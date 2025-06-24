import React from 'react'
import { Link } from 'react-router-dom';
import './Jewelry_card.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Jewelry_card = () => {
  const sections = [
    {
      title: 'Womens section',
      cards: [
        { id: 57, title: 'Earrings', text: 'Elegant and stylish', img: '/images/Earing1.jpg' },
        { id: 58, title: 'Necklace Set', text: 'Party wear', img: '/images/Necklace1.jpg' },
        { id: 59, title: 'Bracelet', text: 'Trendy and sleek', img: '/images/Gbracelet.jpg' },
        { id: 60, title: 'Watch', text: 'Minimalist design', img: '/images/Wwatch.jpg' },
      ],
    },
    {
      title: 'Mens section',
      cards: [
        { id: 61, title: 'Chains', text: 'Elegant and stylish', img: '/images/Chain.jpg' },
        { id: 62, title: 'Brooch', text: 'Party wear', img: '/images/Brooch.jpg' },
        { id: 63, title: 'Bracelet', text: 'Trendy and sleek', img: '/images/Bbracelet.jpg' },
        { id: 64, title: 'watches', text: 'Minimalist design', img: '/images/Menwatch.jpg' },
      ],
    },
    {
      title: 'kids section',
      cards: [
        { id: 65, title: 'Hair clip', text: 'Fancy and colourful', img: '/images/Hairclip.jpg' },
        { id: 66, title: 'hairbands', text: 'Multi-colour fancy', img: '/images/Hairband.jpg' },
        { id: 67, title: 'Kids Necklace', text: 'Elegant and beautiful', img: '/images/Kidnecklace.jpg' },
        { id: 68, title: 'headbands', text: 'fully stretchable ', img: '/images/Headband.jpg' },
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

export default Jewelry_card
