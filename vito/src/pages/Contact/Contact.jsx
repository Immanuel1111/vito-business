import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import aboutHero from "./images/1.webp";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="about-hero">
        <img src={aboutHero} alt="About Hero" className="about-hero-bg" />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>Contact Us</h1>
          <p>Connect with us for personalised support and expert advice.</p>
        </div>
      </div>
      <div className="contact-section">
        {/* Left Side */}
        <div className="contact-left">
          <h1 className="contact-heading">Get in Touch <br /> with us</h1>
          <p className="contact-desc">
            Ready to recycle your scrap metal, supply scrap steel, or enquire about our maintenance services?
            Contact us today for a free consultation or to request a quote.
          </p>
          <p className="contact-desc">
            Our team at Subra Metals is here to provide expert assistance and ensure you receive the
            best solutions tailored to your needs.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Locate Us @</h3>
                <a href="#">Perth, Western Australia</a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">🕐</span>
              <div>
                <h3>Working Hours</h3>
                <p>Mon-Fri 9am to 6pm</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">✉</span>
              <div>
                <h3>Mail Us @</h3>
                <a href="mailto:info@subrametals.com.au">info@subrametals.com.au</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <div className="form-group">
              <label>Your First Name*</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label>Phone Number*</label>
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <label>Your Email Address*</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Describe your needs here" rows={4}></textarea>
            </div>
            <button className="submit-btn">Submit Your Enquiry</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact
