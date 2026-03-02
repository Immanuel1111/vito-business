import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import aboutHero from "./images/1.webp";
import partnerImg from "./images/2.avif";
import  img from "./images/3.avif";
import  img1 from "./images/4.avif";




const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="about-hero">
        <img src={aboutHero} alt="About Hero" className="about-hero-bg" />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Subra Metals: Your trusted partner for premium scrap metal recycling and eco-friendly solutions.</p>
        </div>
      </div>

      {/* Trusted Partner */}
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
              requirements.
            </p>
          </div>

          {/* Circular Image with Arc Decoration */}
          <div className="about-partner-image">
            <div className="circle-frame">
              <div className="arc-navy"></div>
              <div className="arc-gold"></div>
              <div className="circle-img">
                <img src={partnerImg} alt="Trusted Partner" />
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Our Projects Section */}
      <section className="projects-section">
        <div className="projects-container">

          <h2 className="projects-title">Our <span>Projects</span></h2>
          <p className="projects-subtitle">
            Showcasing our expertise in scrap metal supply and maintenance. Our dedicated team
            ensures that every project, whether small or large, receives the highest level of
            professionalism, efficiency, and environmental care. Our commitment to reducing waste
            and repurposing valuable materials makes us a trusted partner for businesses and individuals.
          </p>

          <div className="projects-grid">

            {/* Card 1 - Metal Supply */}
            <div className="project-card">
              <div className="project-card-img">
                <img src={img} alt="Metal Supply" />
              </div>
              <div className="project-card-text">
                <h3>Metal Supply</h3>
                <p>
                  Subra Metals is a trusted supplier of high-quality scrap steel and other metals
                  for industrial use. Our reliable network allows us to source, process, and deliver
                  a wide range of metals to meet your project demands. Whether you need steel for
                  construction or other ferrous and non-ferrous metals for manufacturing, we guarantee
                  responsibly sourced metals through eco-friendly recycling processes. Additionally,
                  we offer competitive prices and on-time delivery to ensure your operations run smoothly.
                </p>
              </div>
            </div>

            {/* Card 2 - Maintenance Works */}
            <div className="project-card">
              <div className="project-card-img">
                <img src={img1} alt="Maintenance Works" />
              </div>
              <div className="project-card-text">
                <h3>Maintenance Works</h3>
                <p>
                  We specialise in industrial maintenance contracts that ensure the longevity and
                  efficiency of your equipment. Our services include preventative maintenance with
                  regular inspections and service schedules to prevent breakdowns and extend the
                  life of your machinery. We also provide emergency repairs, delivering quick and
                  efficient solutions to reduce downtime and restore productivity. Additionally,
                  we offer tailored contracts with flexible maintenance solutions designed to fit
                  the specific needs of your business
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;