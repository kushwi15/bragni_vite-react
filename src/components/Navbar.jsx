import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // Import the logo properly

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="BRAGNI Logo" className="logo" />
        </Link>

        {/* Navbar Toggler */}
        <button 
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/cruises">Cruises</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tours">Tours</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;