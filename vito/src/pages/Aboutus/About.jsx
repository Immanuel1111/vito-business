import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import aboutHero from "./images/1.webp";
import partnerImg from "./images/2.avif";


const About = () => {
  return (
    <>
      <Navbar />

      {/* ── Hero Banner ── */}
      <div className="about-hero">
        <img src={aboutHero} alt="About Hero" className="about-hero-bg" />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Subra Metals: Your trusted partner for premium scrap metal recycling and eco-friendly solutions.</p>
        </div>
      </div>

      {/* ── Trusted Partner ── */}
      <section className="about-partner">
        <div className="about-partner-container">

          <div className="about-partner-text">
            <h2><strong>Your Trusted Partner</strong> in Scrap Metal</h2>
            <p>
              At Subra Metals, we specialise in providing high quality scrap metals along
              with comprehensive maintenance services to foster a sustainable future. Our
              dedication to excellence ensures that we supply only the finest materials,
              sourced responsibly through eco-friendly practices.
            </p>
            <p>
              As your trusted partner, we prioritise understanding your unique needs,
              enabling us to deliver tailored solutions that maximise value and efficiency.
              Whether you're in construction, manufacturing, or another industry, we are
              committed to being a reliable resource for all your scrap metal and maintenance
              requirements. Our mission is to create lasting relationships with our valued
              clients by consistently exceeding expectations and promoting sustainable
              practices in every project we undertake.
            </p>
          </div>

          <div className="about-partner-image">
            <img src={partnerImg} alt="Trusted Partner" />
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;