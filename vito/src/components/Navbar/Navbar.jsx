import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./images/logo.jpg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Subra Metals Logo" />
                <h3>Vito Buisness Solutions</h3>
            </div>

            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li className="active"><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Our Services</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            </ul>

            <button
                className={`hamburger ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;