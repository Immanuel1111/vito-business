import React, { useRef, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import aboutHero from "./images/1.webp";
import locateIcon from "./images/locate.webp";
import hoursIcon from "./images/hours.webp";
import mailIcon from "./images/mail.webp";
import emailjs from '@emailjs/browser';
import r1Image from "./images/r1.jpeg";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_uxb0qeq', // Replace with your Service ID
      'template_r7kv5gp', // Replace with your Template ID
      form.current,
      'TpYrNuiJ6SqyCIu5A' // Replace with your Public Key
    )
      .then((result) => {
        setStatus({ type: 'success', message: 'Your enquiry has been sent successfully!' });
        form.current.reset();
      }, (error) => {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        console.error('EmailJS Error:', error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
      <div className="person-details">
        <div className="person-details-left">
          <h1>Sahaya Antony Monish (CEO)</h1>
          <p>
            “Business should uplift people, not just build profit. True success lies in impact <br />— when others rise with you.”
            <br />
            <a href="https://www.sahayaantonymonish.com" target="_blank" rel="noopener noreferrer">
              sahayaantonymonish.com
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            Contact No: +61 467 412 775

          </p>
        </div>
        <div className="person-details-right">
          <img src={r1Image} alt="Sahaya Antony Monish" />
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
            Our team at Vito Business Solutions Pty Ltd is here to provide expert assistance and ensure you receive the
            best solutions tailored to your needs.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <img src={locateIcon} alt="Locate" className="contact-icon" />
              <div className="contact-info-text">
                <h3>Locate Us @</h3>
                <a href="https://www.google.com/maps/place/56+Forrest+St,+Northam+WA+6401,+Australia/@-31.6508807,116.6650713,17z/data=!3m1!4b1!4m6!3m5!1s0x2a33317d64f3e04f:0x8f221a717350f609!8m2!3d-31.6508807!4d116.6650713!16s%2Fg%2F11q2n8gpz0?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D">56 Forrest street
                  Northam 6401 WA</a>
              </div>
            </div>

            <div className="contact-info-item">
              <img src={hoursIcon} alt="Working Hours" className="contact-icon" />
              <div className="contact-info-text">
                <h3>Working Hours</h3>
                <p>Mon-Fri 9am to 6pm</p>
              </div>
            </div>

            <div className="contact-info-item">
              <img src={mailIcon} alt="Mail" className="contact-icon" />
              <div className="contact-info-text">
                <h3>Mail Us @</h3>
                <a href="mailto:info@vitobusiness.com.au">info@vitobusiness.com.au</a>              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Your First Name*</label>
              <input type="text" name="first_name" placeholder="Enter your first name" required />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <label>Phone Number*</label>
              <input type="tel" name="phone_number" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <label>Your Email Address*</label>
              <input type="email" name="user_email" placeholder="Enter your email address" required />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" placeholder="Describe your needs here" rows={4}></textarea>
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Submit Your Enquiry'}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;