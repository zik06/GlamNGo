import React from 'react'
import { Link } from 'react-router-dom';
import './Card_men.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function Card_men() {
  const sections = [
    {
      title: 'Men Clothing',
      cards: [
        { id: 1, title: 'Men Shirt', text: 'Casual cotton shirt', img: '/images/Shirt.jpg' },
        { id: 2, title: 'Men T-shirt', text: 'Graphic tee for summer', img: '/images/Mentshirt1.jpg' },
        { id: 3, title: 'Men Blazer', text: 'Formal wear', img: '/images/Menblazer.jpg' },
        { id: 4, title: 'Men Jeans', text: 'Comfortable fit', img: '/images/Mensjeans.jpg' },
      ],
    },
    {
      title: 'Men Accessories',
      cards: [
        { id: 5, title: 'Watch', text: 'Elegant and stylish', img: '/images/Menwatch.jpg' },
        { id: 6, title: 'Sunglasses', text: 'Party wear', img: '/images/Mensunglasses.jpg' },
        { id: 7, title: 'Caps', text: 'Trendy and sleek', img: '/images/Cap.jpg' },
        { id: 8, title: 'Belts', text: 'Leather Belt', img: '/images/Belt.jpg' },
      ],
    },
    {
      title: 'Men Beauty',
      cards: [
        { id: 9, title: 'Shaving creams', text: 'clean shave', img: '/images/Shavingcream.jpg' },
        { id: 10, title: 'Oil', text: 'Glowing skin formula', img: '/images/bearedoil.jpg' },
        { id: 11, title: 'Perfume', text: 'Fresh scent', img: '/images/Perfume.jpg' },
        { id: 12, title: 'Soap', text: 'Glossy finish', img: '/images/Soap.jpg' },
      ],
    },
     {
      title: 'Men Footwear',
      cards: [
        { id: 13, title: 'Sleeper', text: 'regular wear', img: '/images/Sleepers.jpg' },
        { id: 14, title: 'sports shoes', text: 'Comfortable', img: '/images/Shoes.jpg' },
        { id: 15, title: 'Boots', text: 'Fancy shoes', img: '/images/Boots.jpg' },
        { id: 16, title: 'shoes', text: 'party wear', img: '/images/Casualshoes.jpg' },
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
  );
}

export default Card_men
