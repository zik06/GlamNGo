import React from 'react'
import './Jewelry_card.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Jewelry_card = () => {
  const sections = [
    {
      title: 'Men Section',
      cards: [
        { title: 'Men Shirt', text: 'Casual cotton shirt', img: '/images/Img1.jpeg' },
        { title: 'Men T-shirt', text: 'Graphic tee for summer', img: '/images/Img2.jpg' },
        { title: 'Men Blazer', text: 'Formal wear', img: '/images/Img2.jpg' },
        { title: 'Men Jeans', text: 'Comfortable fit', img: '/images/Img1.jpeg' },
      ],
    },
    {
      title: 'Jewelry Section',
      cards: [
        { title: 'Gold Earrings', text: 'Elegant and stylish', img: '/images/Img2.jpg' },
        { title: 'Necklace Set', text: 'Party wear', img: '/images/Img2.jpg' },
        { title: 'Bracelet', text: 'Trendy and sleek', img: '/images/Img2.jpg' },
        { title: 'Anklet', text: 'Minimalist design', img: '/images/Img2.jpg' },
      ],
    },
    {
      title: 'Beauty Section',
      cards: [
        { title: 'Lipstick', text: 'Long lasting matte', img: '/images/Img2.jpg' },
        { title: 'Face Cream', text: 'Glowing skin formula', img: '/images/Img2.jpg' },
        { title: 'Perfume', text: 'Fresh scent', img: '/images/Img2.jpg' },
        { title: 'Nail Polish', text: 'Glossy finish', img: '/images/Img2.jpg' },
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
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  )
}

export default Jewelry_card
