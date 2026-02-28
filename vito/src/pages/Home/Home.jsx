import React from "react";
import "./Home.css";
import bgVideo from "./Assets/Video/video1.mp4";
import aboutImg from "./Assets/Video/video2.gif"; // add your image
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      {/* Navbar on top */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Your Sustainable Scrap Metal <br /> Recycling Partner
          </h1>

          <p className="hero-subtitle">
            We specialise in premium scrap metal recycling, including the supply
            of high quality scrap steel, and comprehensive maintenance services.
            Providing eco-friendly solutions for both individuals and businesses.
          </p>

          <button className="hero-btn">Learn More</button>
        </div>
      </div>

      {/* NEXT DIV - About Section */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>
              About <span>VITO</span>Business Solutions Pty Ltd
            </h2>

            <p>
              Vito Business Solutions pty Ltd is a leading provider of sustainable scrap metal
              recycling, including the supply of scrap steel, and industrial
              maintenance services. Our dedicated team ensures that every
              project, whether small or large, receives the highest level of
              professionalism, efficiency, and environmental care.
            </p>

            <button className="about-btn">Learn more</button>
          </div>

          <div className="about-image">
            <img src={aboutImg} alt="Subra Metals" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;