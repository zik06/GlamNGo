import React from 'react'
import './Cards_Parts.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'; 

function Cards_Part() {
  const sections = [
    {
      title: 'Men Section',
      cards: [
        { id: 1, title: 'Men Shirt', text: 'Casual cotton shirt', img: '/images/Img1.jpeg' },
        { id: 2, title: 'Men T-shirt', text: 'Graphic tee for summer', img: '/images/Img2.jpg' },
        { id: 3, title: 'Men Blazer', text: 'Formal wear', img: '/images/Img2.jpg' },
        { id: 4, title: 'Men Jeans', text: 'Comfortable fit', img: '/images/Img1.jpeg' },
      ],
    },
    {
      title: 'Women Section',
      cards: [
        { id: 5, title: 'Women Dress', text: 'Elegant evening wear', img: '/images/Img1.jpeg' },
        { id: 6, title: 'Women Kurti', text: 'Traditional style', img: '/images/Img2.jpg' },
        { id: 7, title: 'Women Jeans', text: 'Trendy denim', img: '/images/Img3.jpg' },
        { id: 8, title: 'Women Top', text: 'Summer collection', img: '/images/Img1.jpeg' },
      ],
    },
    {
      title: 'Kids Section',
      cards: [
        { id: 9, title: 'Kids Shirt', text: 'For boys aged 5-10', img: '/images/Img2.jpg' },
        { id: 10, title: 'Kids Dress', text: 'For girls aged 5-10', img: '/images/Img2.jpg' },
        { id: 11, title: 'Kids Shorts', text: 'Casual wear', img: '/images/Img2.jpg' },
        { id: 12, title: 'Kids T-shirt', text: 'Cartoon print', img: '/images/Img2.jpg' },
      ],
    },
    {
      title: 'Jewelry Section',
      cards: [
        { id: 13, title: 'Gold Earrings', text: 'Elegant and stylish', img: '/images/Img2.jpg' },
        { id: 14, title: 'Necklace Set', text: 'Party wear', img: '/images/Img2.jpg' },
        { id: 15, title: 'Bracelet', text: 'Trendy and sleek', img: '/images/Img2.jpg' },
        { id: 16, title: 'Anklet', text: 'Minimalist design', img: '/images/Img2.jpg' },
      ],
    },
    {
      title: 'Beauty Section',
      cards: [
        { id: 17, title: 'Lipstick', text: 'Long lasting matte', img: '/images/Img2.jpg' },
        { id: 18, title: 'Face Cream', text: 'Glowing skin formula', img: '/images/Img2.jpg' },
        { id: 19, title: 'Perfume', text: 'Fresh scent', img: '/images/Img2.jpg' },
        { id: 20, title: 'Nail Polish', text: 'Glossy finish', img: '/images/Img2.jpg' },
      ],
    },
  ]

  return (
    <div className="cards-wrapper">
      {sections.map((section, idx) => (
        <div key={idx} className="section-group">
          <h2 className="section-title">{section.title}</h2>
          <Row xs={1} md={4} className="g-4">
            {section.cards.map((card) => (
              <Col key={card.id}>
                <Link to={`/product/${card.id}`} className="text-decoration-none text-dark">
                  {/* Using Link to navigate to product details */}
                <Card className="custom-card">
                  <Card.Img variant="top" src={card.img} alt={card.title} />
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

export default Cards_Part
