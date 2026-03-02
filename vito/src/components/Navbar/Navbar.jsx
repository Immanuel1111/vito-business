import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./images/logo.jpg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Subra Metals Logo" />
            </div>
            <ul className="navbar-links">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
