import React from 'react';
import './Navbar.css';
import logo from "./images/logo.jpg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Subra Metals Logo" />
            </div>
            <ul className="navbar-links">
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/Service">Our Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
