import React from 'react';
import './Footer.css'; // Create this file for styling
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>ONLINE SHOPPING</h4>
          <ul className="nav_part">
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/beauty">Beauty</Link></li>
            <li><Link to="/jewelry">Jewelry</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Contact Us</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>KEEP IN TOUCH</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 GlamNGo by You. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
