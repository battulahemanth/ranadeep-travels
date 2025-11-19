import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-modern">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Ranadeep Travels" />
      </div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/home">Home</a></li>
        <li>
          <button onClick={toggleDropdown} className="link-button">
           <a>Vehicle Listing</a>
          </button>
          <ul className={`dropdown ${dropdownOpen ? "show" : ""}`}>
            <li><a href="/car-rental">Car Rental</a></li>
            <li><a href="/bus-rental">Bus Booking</a></li>
          </ul>
        </li>
        <li><a href="/AboutPage">About Us</a></li>
        {/* <li><a href="/blog">Blog</a></li> */}
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
