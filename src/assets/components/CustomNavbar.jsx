// import React from 'react';
// import './Navbar.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';

// function CustomNavbar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container className="d-flex justify-content-between align-items-center">
//         {/* Left side: brand and nav */}
//         <div className="d-flex align-items-center w-100">
//           <Navbar.Brand href="#home">GlamNGo</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#men">MEN</Nav.Link>
//               <Nav.Link href="#women">WOMEN</Nav.Link>
//               <Nav.Link href="#child">KIDS</Nav.Link>
//               <Nav.Link href="#beauty">BEAUTY</Nav.Link>
//               <Nav.Link href="#jewelry">JEWELRY</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </div>

//         {/* Right side: Search + Icons */}
//         <div className="d-flex align-items-center gap-4">
//           {/* Search bar */}
//           <Form className="search-form">
//             <div className="search-wrapper">
//               <i className="fas fa-search search-icon"></i>
//               <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 className="search-input"
//               />
//             </div>
//           </Form>

//           {/* Sign In */}
//           <div className="icon-stack">
//             <i className="fas fa-user icon-image"></i>
//             <span className="icon-label">Profile</span>
//           </div>

//           {/* Wishlist */}
//           <div className="icon-stack">
//             <i className="fas fa-heart icon-image"></i>
//             <span className="icon-label">Wishlist</span>
//           </div>
//         </div>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;

// import React from 'react';
import React, { useContext, useState } from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function CustomNavbar() {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left side: brand and nav */}
        <div className="d-flex align-items-center w-100">
          <Navbar.Brand as={NavLink} to="/">GlamNGo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/men">MEN</Nav.Link>
              <Nav.Link as={NavLink} to="/women">WOMEN</Nav.Link>
              <Nav.Link as={NavLink} to="/kids">KIDS</Nav.Link>
              <Nav.Link as={NavLink} to="/beauty">BEAUTY</Nav.Link>
              <Nav.Link as={NavLink} to="/jewelry">JEWELRY</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        {/* Right side: Search + Icons */}
        <div className="d-flex align-items-center gap-4">
          {/* Search bar */}
          <Form className="search-form" onSubmit={handleSearchSubmit}>
      <div className="search-wrapper">
        <i className="fas fa-search search-icon"></i>
        <Form.Control
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </Form>

          {/* <Form className="search-form">
            <div className="search-wrapper">
              <i className="fas fa-search search-icon"></i>
              <Form.Control
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </Form> */}

          { /* Profile Icon */ }
          {/* <Nav.Link as ={NavLink} to="/profile" className="icon-stack text-decoration-none" onClick={()=>navigate('/Profile')}>
            <i className="fas fa-user icon-image"></i>
            <span className="icon-label">Profile</span>
          </Nav.Link> */}
   
   <div className="icon-stack position-relative profile-container"
     onMouseEnter={() => setShowProfileMenu(true)}
     onMouseLeave={() => setShowProfileMenu(false)}
>
  <i className="fas fa-user icon-image"></i>
  <span className="icon-label">Profile</span>

  {showProfileMenu && (
    <div className="profile-popup-menu">
      <div className="profile-popup-header">Welcome</div>
      <NavLink to="/login" className="profile-popup-link">Login / Signup</NavLink>
      <NavLink to="/profile" className="profile-popup-link">My Account</NavLink>
      <NavLink to="/orders" className="profile-popup-link">Orders</NavLink>
      <NavLink to="/wishlist" className="profile-popup-link">Wishlist</NavLink>
      <NavLink to="/giftcards" className="profile-popup-link">Gift Cards</NavLink>
      <hr className="popup-divider" />
      <NavLink to="/logout" className="profile-popup-link">Logout</NavLink>
    </div>
  )}
</div>

          {/* Wishlist Icon */}
          <Nav.Link as ={NavLink} to="/wishlist" className="icon-stack text-decoration-none" onClick={()=>navigate('/Wishlist')}>
            <i className="fas fa-heart icon-image"></i>
            <span className="icon-label">Wishlist</span>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart" className="icon-stack text-decoration-none position-relative">
           <i className="fas fa-shopping-cart icon-image"></i>
           <span className="icon-label">Cart</span>
           {cartItems.length > 0 && (
           <span className="cart-badge">{cartItems.length}</span>
)}
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
