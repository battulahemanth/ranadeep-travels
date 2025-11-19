import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-col">
          <h2 className="footer-logo">Ranadeep Travels</h2>
          <p>
            Your trusted travel partner for unforgettable journeys.  
            Explore the world with comfort, safety, and style.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/packages">Tour Packages</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Vizag, India</p>
          <p>📞 +91 7288900770</p>
          <p>✉️ ranadeeptravels@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        © 2025 Ranadeep Travels. All rights reserved. | Designed with ❤️ for travelers
        <h6 className="deginer">hemanth</h6>
      </div>
    </footer>
  );
}

export default Footer;
