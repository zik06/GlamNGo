import React from 'react'
import { Link } from 'react-router-dom';
import './Beauty_card.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Beauty_card = () => {
  const sections = [
    {
      title: 'Makeup Section',
      cards: [
        { id: 41, title: 'Lipstick', text: 'Matte Lipstick', img: '/images/Lipstic.jpg' },
        { id: 42, title: 'Kajal', text: 'Long lasting', img: '/images/Kajal.jpg' },
        { id: 43, title: 'Nail Polish', text: 'Glossy Finish', img: '/images/Nailpaint.jpg' },
        { id: 44, title: 'Eyelinear', text: 'Waterproof longlasting', img: '/images/Eyelinear.jpg' },
      ],
    },
    {
      title: 'Skincare Section',
      cards: [
        { id: 45, title: 'Face wash', text: 'Elegant and stylish', img: '/images/Facewash.jpg' },
        { id: 46, title: 'face cream', text: 'Party wear', img: '/images/Facecream.jpg' },
        { id: 47, title: 'Body wash', text: 'Trendy and sleek', img: '/images/Bodywash.jpg' },
        { id: 48, title: 'Body Lotion', text: 'Minimalist design', img: '/images/Bodylotion.jpg' },
      ],
    },
    {
      title: 'Haircare Section',
      cards: [
        { id: 49, title: 'Shampoo', text: 'Long lasting matte', img: '/images/Shampoo.jpg' },
        { id: 50, title: 'Conditioner', text: 'Glowing skin formula', img: '/images/Conditioner.jpg' },
        { id: 51, title: 'Hair oil', text: 'Fresh scent', img: '/images/Hairoil.jpg' },
        { id: 52, title: 'Hair mask', text: 'Glossy finish', img: '/images/Hairmask.jpg' },
      ], 
    },
    {
      title: 'Mains Grooming',
      cards: [
        { id: 53, title: 'Trimmers', text: 'Long lasting matte', img: '/images/Trimmer.jpg' },
        { id: 54, title: 'Beard oil', text: 'Glowing skin formula', img: '/images/bearedoil.jpg' },
        { id: 55, title: 'Soap', text: 'Fresh scent', img: '/images/Soap.jpg' },
        { id: 56, title: 'Shaving cream', text: 'Glossy finish', img: '/images/Shavingcream.jpg' },
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

export default Beauty_card
