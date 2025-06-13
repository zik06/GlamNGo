import React from 'react';
import './Footer.css'; // Create this file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Online Shopping */}
        <div className="footer-column">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Beauty</li>
            <li>Jewelry</li>
          </ul>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Contact Us</li>
            {/* <li>FAQ</li> */}
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            {/* <li>Whitehat</li> */}
            {/* <li>Site Map</li> */}
          </ul>
        </div>

        {/* Column 3: Customer Policies */}
        <div className="footer-column">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            {/* <li>Sitemap</li> */}
            {/* <li>Grievance Officer</li> */}
          </ul>
        </div>

        {/* Column 4: App & Social Media */}
        <div className="footer-column">
          {/* <h4>EXPERIENCE MYNTRA APP</h4>
          <div className="app-links">
            <img src="/images/google-play.png" alt="Google Play" />
            <img src="/images/app-store.png" alt="App Store" />
          </div> */}
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
        © 2025 React Clone by You. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
