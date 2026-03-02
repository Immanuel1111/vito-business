import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Service.css";
import aboutHero from "./images/1.webp";
import maintenanceImg from "./images/2.avif";
import scrapImg from "./images/3.avif";
import scrapServiceImg from "./images/4.avif";
import industriesBg from "./images/5.webp";
import industriesVideo from "./images/video.gif";

const Service = () => {
  return (
    <div className="service-page">
      <Navbar />

      {/* Hero Banner */}
      <div className="about-hero">
        <img src={aboutHero} alt="About Hero" className="about-hero-bg" />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>Our Services</h1>
          <p>Transforming Scrap into Sustainable Value through Customised Recycling Solutions and Environmental Stewardship</p>
        </div>
      </div>

      {/* Maintenance Services */}
      <section className="maintenance-section">
        <div className="maintenance-container">
          <div className="maintenance-text">
            <h2>Maintenance <span>Services</span></h2>
            <p>
              At Subra Metals, a range of essential maintenance tasks is undertaken to
              ensure that equipment, facilities, and systems operate at peak
              performance. Our services include both preventative and corrective
              measures designed to minimise downtime and extend the lifespan of your assets.
            </p>
            <p>
              We pride ourselves on our commitment to quality and safety, ensuring that
              all services are performed by skilled professionals. Here's how we achieve
              excellence in our maintenance offerings:
            </p>
            <div className="maintenance-features">
              <div className="feature-box"><span>Skilled Professionals</span></div>
              <div className="feature-box"><span>Safety and Reliability</span></div>
              <div className="feature-box"><span>Comprehensive Solutions</span></div>
            </div>
          </div>
          <div className="maintenance-image">
            <img src={maintenanceImg} alt="Maintenance Services" />
          </div>
        </div>
      </section>

      {/* Scrap Metal Supply */}
      <section className="scrap-section">
        <div className="scrap-container">
          <div className="scrap-image">
            <img src={scrapImg} alt="Scrap Metal Supply" />
          </div>
          <div className="scrap-text">
            <h2>Scrap <span>Metal Supply</span></h2>
            <p>
              At Subra Metals, we provide an extensive selection of scrap metals
              tailored for various industrial applications and projects. Our inventory
              includes a diverse range of both ferrous and non-ferrous metals,
              ensuring that you have access to high-quality materials essential for your operations.
            </p>
            <p>
              Our commitment to customer satisfaction drives us to provide not only
              top-notch materials but also exceptional service. Here's how we support your projects:
            </p>
            <div className="scrap-features">
              <div className="feature-box"><span>Custom Solutions</span></div>
              <div className="feature-box"><span>Quality Assurance</span></div>
              <div className="feature-box"><span>Timely Delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrap Metal Services */}
      <section className="scrap-services-section">
        <div className="scrap-services-container">
          <div className="scrap-services-text">
            <h2>Scrap <span>Metal</span><br /><span>Services</span></h2>
            <p>
              Our scrap metal services include a full range of offerings designed
              to make recycling easy and efficient for businesses and individuals
              alike. Sustainable recycling options for scrap metals, promoting
              environmental responsibility and resource conservation.
            </p>
            <p>
              We offer a range of solutions designed to meet the diverse needs of
              our clients. Here's how we can assist you:
            </p>
            <div className="scrap-services-features">
              <div className="feature-box"><span>Collection and Bin Services</span></div>
              <div className="feature-box"><span>Processing and Sorting</span></div>
              <div className="feature-box"><span>Competitive Pricing</span></div>
            </div>
          </div>
          <div className="scrap-services-image">
            <img src={scrapServiceImg} alt="Scrap Metal Services" />
            <div className="scrap-stats-box">
              <div className="stat-item">
                <h3>150+</h3>
                <p>Happy clients</p>
              </div>
              <div className="stat-item">
                <h3>15</h3>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section">
        <img src={industriesBg} alt="bg" className="industries-bg-img" />
        <div className="industries-overlay"></div>
        <div className="industries-content">
          <h2 className="industries-title">
            Industries <span>We Serve</span>
          </h2>
          <div className="industries-video-wrapper">
            <img
              src={industriesVideo}
              alt="Industries"
              className="industries-front-video"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;