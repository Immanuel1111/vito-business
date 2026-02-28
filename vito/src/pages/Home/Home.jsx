import React from "react";
import "./Home.css";
import bgVideo from "./Assets/Video/video1.mp4";
import aboutImg from "./Assets/Video/video2.gif"; // add your image
import Navbar from "../../components/Navbar/Navbar";
import service1 from "./Assets/images/1.avif"
import service2 from "./Assets/images/2.avif"
import service3 from "./Assets/images/3.avif"
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
      {/* NEXT DIV - Services Section */}
      <div className="services-section">
        <div className="services-container">

          <h2 className="services-title">
            Our <span>Services</span>
          </h2>

          <p className="services-subtitle">
            We supply high quality scrap steel for various industrial applications,
            ensuring responsible sourcing and processing. Our extensive network allows
            us to offer competitive pricing and reliable delivery to meet your project needs.
          </p>

          <div className="services-grid">

            {/* Service 1 */}
            <div className="service-card">
              <div className="service-circle">
                <img src={service1} alt="Maintenance services" />              </div>
              <h3>Maintenance services</h3>
              <p>
                At Subra Metals, a range of essential maintenance tasks is undertaken
                to ensure that equipment, facilities, and systems operate at peak performance.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-circle">
                <img src={service2} alt="Scrap Metal Supply" />
              </div>
              <h3>Scrap Metal Supply</h3>
              <p>
                At Subra Metals, we provide an extensive selection of scrap metals
                tailored for various industrial applications and projects.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-circle">
                <img src={service3} alt="scrap Metal Services" />
              </div>
              <h3>Scrap Metal Services</h3>
              <p>
                Our scrap metal services include a full range of offerings designed
                to make recycling easy and efficient for businesses and individuals alike.
              </p>
            </div>

          </div>

          <button className="services-btn">Know More</button>
        </div>
      </div >

    </>
  );
}

export default Home;