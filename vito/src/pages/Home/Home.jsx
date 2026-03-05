import React from "react";
import "./Home.css";
import bgVideo from "./Assets/Video/video1.mp4";
import aboutImg from "./Assets/Video/video2.gif"; 
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import service1 from "./Assets/images/1.avif"
import service2 from "./Assets/images/2.avif"
import service3 from "./Assets/images/3.avif"
import bgVideo1 from "./Assets/Video/video3.mp4";
import metals1 from "./Assets/images/5.avif"
import metals2 from "./Assets/images/6.avif"
import metals3 from "./Assets/images/7.avif"
import metals4 from "./Assets/images/8.avif"
import metals5 from "./Assets/images/9.avif"
import metalSupplyImg from "./Assets/images/10.avif"

function Home() {
  return (
    <>
      <Navbar />

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
            Your Sustainable Scrap Metal  Recycling Partner
          </h1>

          <p className="hero-subtitle">
            We specialise in premium scrap metal recycling, including the supply
            of high quality scrap steel, and comprehensive maintenance services.
            Providing eco-friendly solutions for both individuals and businesses.
          </p>

          <button className="hero-btn">Learn More</button>
        </div>
      </div>

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

            <a href="/about"><button className="about-btn">Learn more</button></a>
          </div>

          <div className="about-image">
            <img src={aboutImg} alt="VITO Business Solutions" />
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
                At VITO Business Solutions, a range of essential maintenance tasks is undertaken
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
                At VITO Business Solutions, we provide an extensive selection of scrap metals
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

           <a href="/about"><button className="services-btn">Know More</button></a>
        </div>
      </div >
      {/* NEW SECTION - Why Choose Section */}
      <section className="why-choose-section">
        <div className="why-choose-overlay"></div>
        <div className="why-choose-container">
          <h2 className="why-choose-title">
            Why Choose <span>VITO Business Solutions</span>
          </h2>

          <div className="why-choose-grid">
            {/* Card 1 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Sustainable Practices</h3>
                </div>
                <div className="flip-card-back">
                  <p>We focus on environmentally friendly recycling methods, reducing landfill waste and conserving natural resources.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Competitive Prices</h3>
                </div>
                <div className="flip-card-back">
                  <p>We offer great value for your scrap steel and metals, ensuring you receive the best return for your recyclable materials.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Professional Team</h3>
                </div>
                <div className="flip-card-back">
                  <p>Our skilled professionals are adept in both recycling and industrial maintenance, ensuring high-quality service.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Trusted Partnerships</h3>
                </div>
                <div className="flip-card-back">
                  <p>We have built lasting relationships with businesses and individuals, through our commitment to integrity and quality service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-container1">
        {/* Background Video */}
        <video
          className="hero-video1"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (dark layer) */}
        <div className="overlay1"></div>

        {/* Content */}
        <div className="metals-content">
          <h2 className="metals-title">
            Metals <span>We Accept</span>
          </h2>

          <div className="metals-grid">
            <div className="metal-card">
              <div className="metal-img">
                <img src={metals1} alt="Ferrous Metals" />
              </div>
              <div className="metal-text">
                <h3>Ferrous Metals</h3>
                <p>
                  We specialise in ferrous metals like steel and iron,
                  known for their strength. Our recycling ensures these
                  valuable materials are efficiently repurposed.
                </p>
              </div>
            </div>

            <div className="metal-card">
              <div className="metal-img">
                <img src={metals2} alt="Non-Ferrous Metals" />
              </div>
              <div className="metal-text">
                <h3>Non-Ferrous Metals</h3>
                <p>
                  We accept non-ferrous metals including copper,
                  aluminum, brass, lead and stainless steel.
                </p>
              </div>
            </div>

            <div className="metal-card">
              <div className="metal-img">
                <img src={metals3} alt="Mixed Metals" />
              </div>
              <div className="metal-text">
                <h3>Mixed Metals</h3>
                <p>
                  We offer competitive pricing for all types of metals,
                  ensuring the best value for your scrap.
                </p>
              </div>
            </div>

            <div className="metal-card">
              <div className="metal-img">
                <img src={metals4} alt="Steel & Iron" />
              </div>
              <div className="metal-text">
                <h3>Steel & Iron</h3>
                <p>
                  From household appliances to industrial scrap,
                  we recycle all grades of steel and iron.
                </p>
              </div>
            </div>

            <div className="metal-card">
              <div className="metal-img">
                <img src={metals5} alt="Copper & Brass" />
              </div>
              <div className="metal-text">
                <h3>Copper & Brass</h3>
                <p>
                  High value metals like copper and brass are
                  meticulously processed and recycled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="metal-supply-section">
        <div className="metal-supply-container">

          {/* LEFT - Text */}
          <div className="metal-supply-text">
            <h2>Metal <span>Supply</span></h2>
            <p>
              We provide high-quality scrap metals for various maintenance projects.
              Offering eco-friendly solutions for both individuals and businesses,
              we ensure competitive pricing, efficient services, and environmentally
              responsible practices. Our extensive inventory is carefully curated to
              meet diverse project needs, allowing you to find the perfect materials
              with ease. Committed to exceptional customer satisfaction, we collaborate
              closely with clients to deliver tailored solutions that fit their specific
              requirements.
            </p>
            <p className="metal-supply-bold">
              Choose us as your trusted partner for sustainable practices and reliable
              metal supply solutions!
            </p>
          </div>

          {/* RIGHT - Image with Dots */}
          <div className="metal-supply-image-wrapper">
            <div className="metal-supply-circle">
              <img src={metalSupplyImg} alt="Metal Supply" />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;