import React, { useState } from "react";
import Footer from "../components/Footer";
import "../pages/ContactPage.css";
// ❌ Remove this line (not needed): import { div } from "framer-motion/client";

const hero = {
  title: "Contact Us",
  subtitle:
    "We believe travel should be inspiring, seamless, and unforgettable. Discover our story and values.",
};

function ContactPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsAppMessage = () => {
    const cleanPhone = phoneNumber.replace(/\D/g, ""); // digits only
    if (!cleanPhone) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!message) {
      alert("Please enter a message.");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="about-hero">
        <div className="hero-content">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-description">
              We’re here to help! Reach out to us for bookings, support, or any
              travel-related queries.
            </p>

            <ul className="contact-details">
              <li>
                📍 <strong>Address:</strong> 123 Travel Street, Hyderabad, India
              </li>
              <li>
                📞 <strong>Phone:</strong> +91 7288900770
              </li>
              <li>
                ✉️ <strong>Email:</strong> support@yourtravel.com
              </li>
            </ul>

            <div className="support-hours">
              <p>
                <strong>Customer Support Hours:</strong>
              </p>
              <p>Mon – Sun : 8:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Right Side: Contact + WhatsApp Form */}
          <div className="contact-form">
            <h3 className="form-heading">Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Submit</button>
            </form>

            {/* WhatsApp Sender Section */}
            <div style={{ marginTop: "30px" }}>
              <h3 className="form-heading">Or Contact via WhatsApp</h3>
              <input
                type="tel"
                placeholder="Enter phone number 7288900770"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <textarea
                placeholder="Enter your WhatsApp message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="button"
                onClick={sendWhatsAppMessage}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#25D366",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send via WhatsApp
              </button>
              <p style={{ fontSize: "12px", marginTop: "10px", color: "#666" }}>
                Note: This will open WhatsApp Web or the app with a pre-filled
                message. You must manually send it.
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d165325.90317580334!2d83.34439446141509!3d17.75884471849389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756792558260!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Travel Agency Location"
          ></iframe>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default ContactPage;
