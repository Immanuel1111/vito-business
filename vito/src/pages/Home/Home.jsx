import React from "react";
import "./Home.css";
import bgVideo from "./Assets/Video/video1.mp4";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      {/* Navbar on top */}
      <Navbar />

      <div className="hero-container">
        {/* Background Video */}
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

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>

        {/* Front Content */}
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
      
    </>
  );
}

export default Home;