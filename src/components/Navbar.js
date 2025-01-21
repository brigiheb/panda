import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/images/panda-logo.png'; // Correct path for the logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Panda IPTV Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#channels">Channels</a></li>
        <li><Link to="/reseller">IPTV Reseller</Link></li>
      </ul>
      <button className="contact-button">Contact us</button>
    </nav>
  );
};

export default Navbar;
