import React from 'react'
import './Cards_Parts.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Cards_Part() {
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
      title: 'Women Section',
      cards: [
        { title: 'Women Dress', text: 'Elegant evening wear', img: '/images/Img1.jpeg' },
        { title: 'Women Kurti', text: 'Traditional style', img: '/images/Img2.jpg' },
        { title: 'Women Jeans', text: 'Trendy denim', img: '/images/Img3.jpg' },
        { title: 'Women Top', text: 'Summer collection', img: '/images/Img1.jpeg' },
      ],
    },
    {
      title: 'Kids Section',
      cards: [
        { title: 'Kids Shirt', text: 'For boys aged 5-10', img: '/images/Img2.jpg' },
        { title: 'Kids Dress', text: 'For girls aged 5-10', img: '/images/Img2.jpg' },
        { title: 'Kids Shorts', text: 'Casual wear', img: '/images/Img2.jpg' },
        { title: 'Kids T-shirt', text: 'Cartoon print', img: '/images/Img2.jpg' },
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
                <Card className="custom-card">
                  <Card.Img variant="top" src={card.img} alt={card.title} />
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

export default Cards_Part
