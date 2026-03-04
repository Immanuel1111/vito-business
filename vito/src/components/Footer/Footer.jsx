import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./logo.jpg";
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendNewsletter = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_jcww95c',
      'template_eener7u',
      form.current,
      'TpYrNuiJ6SqyCIu5A'
    )
      .then((result) => {
        setStatus({ type: 'success', message: 'Subscribed successfully!' });
        form.current.reset();
      }, (error) => {
        setStatus({ type: 'error', message: 'Failed to subscribe. Try again.' });
        console.error('EmailJS Error:', error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
              <a href="https://www.google.com/maps/place/56+Forrest+St,+Northam+WA+6401,+Australia/@-31.6508807,116.6650713,17z/data=!3m1!4b1!4m6!3m5!1s0x2a33317d64f3e04f:0x8f221a717350f609!8m2!3d-31.6508807!4d116.6650713!16s%2Fg%2F11q2n8gpz0?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D">56 Forrest street
                Northam 6401 WA</a>
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
          <form ref={form} onSubmit={sendNewsletter}>
            <input
              type="email"
              name="user_email"
              placeholder="Your email for enquiries"
              className="footer-input"
              required
            />
            {status.message && (
              <div className={`footer-status ${status.type}`}>
                {status.message}
              </div>
            )}
            <button type="submit" className="footer-btn" disabled={loading}>
              {loading ? 'Subscribing...' : 'Submit your request now'}
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
