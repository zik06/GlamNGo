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

import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
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
          <Form className="search-form">
            <div className="search-wrapper">
              <i className="fas fa-search search-icon"></i>
              <Form.Control
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </Form>

          {/* Profile Icon */}
          <NavLink to="/profile" className="icon-stack text-decoration-none">
            <i className="fas fa-user icon-image"></i>
            <span className="icon-label">Profile</span>
          </NavLink>

          {/* Wishlist Icon */}
          <NavLink to="/wishlist" className="icon-stack text-decoration-none">
            <i className="fas fa-heart icon-image"></i>
            <span className="icon-label">Wishlist</span>
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
