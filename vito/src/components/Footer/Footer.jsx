import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./logo.jpg"; // Updated to local logo.jpg

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo & Description */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Subra Metals Logo" />
            <span>VITO BUSINESS SOLUTIONS PTY LTD</span>
          </div>
          <p className="footer-desc">
            Quality scrap metals and maintenance services provided.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/services">OUR SERVICES</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="footer-contact">
          <h4>CONTACT INFO</h4>
          <ul>
            <li>
              <span className="footer-icon">✉</span>
              <a href="mailto:info@vitobusiness.com.au">info@vitobusiness.com.au</a>
            </li>
            <li>
              <span className="footer-icon">📍</span>
              <a href="#">Perth, Western Australia</a>
            </li>
            <li>
              <span className="footer-icon">🕐</span>
              <span>Mon-Fri 9am to 6pm</span>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-newsletter">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p>Enter your email address</p>
          <input
            type="email"
            placeholder="Your email for enquiries"
            className="footer-input"
          />
          <button className="footer-btn">Submit your request now</button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;