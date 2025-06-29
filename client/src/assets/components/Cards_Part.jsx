// import React from 'react'
// import './Cards_Parts.css'
// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import { Link } from 'react-router-dom'; 

// function Cards_Part() {
//   const sections = [
//     {
//       title: 'Men Section',
//       cards: [
//         { id: 1, title: 'Men Shirt', text: 'Casual cotton shirt', img: '/images/Img1.jpeg' },
//         { id: 2, title: 'Men T-shirt', text: 'Graphic tee for summer', img: '/images/Img2.jpg' },
//         { id: 3, title: 'Men Blazer', text: 'Formal wear', img: '/images/Img2.jpg' },
//         { id: 4, title: 'Men Jeans', text: 'Comfortable fit', img: '/images/Img1.jpeg' },
//       ],
//     },
//     {
//       title: 'Women Section',
//       cards: [
//         { id: 5, title: 'Women Dress', text: 'Elegant evening wear', img: '/images/Img1.jpeg' },
//         { id: 6, title: 'Women Kurti', text: 'Traditional style', img: '/images/Img2.jpg' },
//         { id: 7, title: 'Women Jeans', text: 'Trendy denim', img: '/images/Img3.jpg' },
//         { id: 8, title: 'Women Top', text: 'Summer collection', img: '/images/Img1.jpeg' },
//       ],
//     },
//     {
//       title: 'Kids Section',
//       cards: [
//         { id: 9, title: 'Kids Shirt', text: 'For boys aged 5-10', img: '/images/Img2.jpg' },
//         { id: 10, title: 'Kids Dress', text: 'For girls aged 5-10', img: '/images/Img2.jpg' },
//         { id: 11, title: 'Kids Shorts', text: 'Casual wear', img: '/images/Img2.jpg' },
//         { id: 12, title: 'Kids T-shirt', text: 'Cartoon print', img: '/images/Img2.jpg' },
//       ],
//     },
//     {
//       title: 'Jewelry Section',
//       cards: [
//         { id: 13, title: 'Gold Earrings', text: 'Elegant and stylish', img: '/images/Img2.jpg' },
//         { id: 14, title: 'Necklace Set', text: 'Party wear', img: '/images/Img2.jpg' },
//         { id: 15, title: 'Bracelet', text: 'Trendy and sleek', img: '/images/Img2.jpg' },
//         { id: 16, title: 'Anklet', text: 'Minimalist design', img: '/images/Img2.jpg' },
//       ],
//     },
//     {
//       title: 'Beauty Section',
//       cards: [
//         { id: 17, title: 'Lipstick', text: 'Long lasting matte', img: '/images/Img2.jpg' },
//         { id: 18, title: 'Face Cream', text: 'Glowing skin formula', img: '/images/Img2.jpg' },
//         { id: 19, title: 'Perfume', text: 'Fresh scent', img: '/images/Img2.jpg' },
//         { id: 20, title: 'Nail Polish', text: 'Glossy finish', img: '/images/Img2.jpg' },
//       ],
//     },
//   ]

//   return (
//     <div className="cards-wrapper">
//       {sections.map((section, idx) => (
//         <div key={idx} className="section-group">
//           <h2 className="section-title">{section.title}</h2>
//           <Row xs={1} md={4} className="g-4">
//             {section.cards.map((card) => (
//               <Col key={card.id}>
//                 <Link to={`/product/${card.id}`} className="text-decoration-none text-dark">
//                   {/* Using Link to navigate to product details */}
//                 <Card className="custom-card">
//                   <Card.Img variant="top" src={card.img} alt={card.title} />
//                   <Card.Body>
//                     <Card.Title>{card.title}</Card.Title>
//                     <Card.Text>{card.text}</Card.Text>
//                   </Card.Body>
//                 </Card>
//                 </Link>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Cards_Part
import React from 'react';
import './Cards_Parts.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Cards_Part() {
  const sections = [
    {
      title: 'Festive Season sale',
      cards: [
        { id: 104, title: 'Bridal Lehenga', text: 'Limited time offer', img: '/images/Bridallehenga.jpg', price: 19.99 },
        { id: 105, title: '50% Off Saree', text: 'Festive season sale', img: '/images/Saree2.jpg', price: 24.99 },
        { id: 106, title: 'Kids lehenga', text: 'Save up to 50%', img: '/images/Kidslehenga1.jpg', price: 29.99 },
        { id: 107, title: 'Mens Purse', text: 'Flat 40% off', img: '/images/Menspurse.jpg', price: 25.99 },
        { id: 108, title: 'Engagement ring', text: 'Flat 30% off', img: 'images/Ring1.jpg', price: 29.99 },
        { id: 109, title: 'Designer Sherwani', text: 'Save up to 40%', img: '/images/Sherwani.jpg', price: 34.99 },
        { id: 110, title: 'Soft indoor sleeper', text: 'under $16', img: '/images/Homesleeper.jpg', price: 15.99 },
        { id: 111, title: 'Womens shirt', text: 'Special weekend offer', img: '/images/Womensshirt.jpg', price: 21.99 },
     ],
  },
    {
      title: 'Men Section',
      cards: [
        { id: 84, title: 'Check shirt', text: 'Trending check shirt', img: '/images/Checkshirt.jpg', price: 29.99 },
        { id: 85, title: 'Men T-shirt', text: 'dual pocket denim jacket', img: '/images/Denimjacket.jpg', price: 19.99 },
        { id: 86, title: 'Cargo pant', text: 'Loose fit cargo pant', img: '/images/Cargopant.jpg', price: 59.99 },
        { id: 87, title: 'Mens Kurta', text: 'Comfortable fit', img: '/images/Menskurta.jpg', price: 39.99 },
      ],
    },
    {
      title: 'Women Section',
      cards: [
        { id: 88, title: 'saree', text: 'Draped in Tradition', img: '/images/Saree.jpg', price: 49.99 },
        { id: 89, title: 'Womens blazer', text: 'Stylish Trendy Blazer', img: '/images/Wblazer.jpg', price: 34.99 },
        { id: 90, title: 'Summer dress', text: 'pure cotton dress', img: '/images/Summerdress.jpg', price: 44.99 },
        { id: 91, title: 'Kurta set', text: 'Summer collection', img: '/images/Kurtaset.jpg', price: 24.99 },
      ],
    },
    {
      title: 'Kids Section',
      cards: [
        { id: 92, title: 'Kids kurta', text: 'For boys aged 5-10', img: '/images/Kidkurta.jpg', price: 15.99 },
        { id: 93, title: 'Kids Dress', text: 'For girls aged 5-10', img: '/images/Kidslehenga.jpg', price: 19.99 },
        { id: 94, title: 'Tshirt and pant set', text: 'Casual wear', img: '/images/Kidboytshirt1.jpg', price: 12.99 },
        { id: 95, title: 'Baby frock', text: 'Cotton frock', img: '/images/Kidfrock.jpg', price: 9.99 },
      ],
    },
    {
      title: 'Jewelry Section',
      cards: [
        { id: 96, title: 'Earrings', text: 'Elegant and stylish', img: '/images/Earing2.jpg', price: 199.99 },
        { id: 97, title: 'Necklace Set', text: 'Party wear', img: '/images/Necklace2.jpg', price: 149.99 },
        { id: 98, title: 'Fancy goggles', text: 'cool fancy goggles', img: '/images/fancygoggles.jpg', price: 89.99 },
        { id: 99, title: 'Hairclips', text: 'Bow design', img: '/images/Hairclip1.jpg', price: 59.99 },
      ],
    },
    {
      title: 'Beauty Section',
      cards: [
        { id: 100, title: 'Lip gloss', text: 'Glossy lip', img: '/images/Lipgloss.jpg', price: 14.99 },
        { id: 101, title: 'Foundation', text: 'Glowing skin formula', img: '/images/Foundation.jpg', price: 24.99 },
        { id: 102, title: 'Makeup Brushes', text: 'Soft touch', img: '/images/Makeupbrushes.jpg', price: 39.99 },
        { id: 103, title: 'Makeup Kit', text: 'vibrant colors', img: '/images/Makeupkit.jpg', price: 7.99 },
      ],
    },
  ];

  return (
    <div className="cards-wrapper container py-5">
      {sections.map((section, idx) => (
        <div key={idx} className={`section-group mb-5 ${section.title === 'Festive Season sale' ? 'festive-section' : ''}`}>
          <h2 className="section-title text-center mb-4">{section.title}</h2>
          <Row xs={1} sm={2} md={4} className="g-4">
            {section.cards.map((card) => (
              <Col key={card.id}>
                <Link to={`/product/${card.id}`} className="text-decoration-none text-dark">
                  <Card className={`custom-card h-100 shadow-sm ${section.title === 'Festive Season sale' ? 'sale-card' : ''}`}>
                    {section.title === 'Festive Season sale' && (
                      <div className="sale-badge">SALE</div>
               )}
                    <Card.Img variant="top" src={card.img} alt={card.title} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="fw-bold">${card.price.toFixed(2)}</span>
                        <button className="btn btn-outline-dark btn-sm">Shop Now</button>
                      </div>
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

export default Cards_Part;