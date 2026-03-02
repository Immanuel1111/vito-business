import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import aboutHero from "./images/1.webp";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about-hero">
        <img src={aboutHero} alt="About Hero" className="about-hero-bg" />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Subra Metals: Your trusted partner for premium scrap metal recycling and eco-friendly solutions.</p>
        </div>
      </div>
    </>
  );
};

export default About;