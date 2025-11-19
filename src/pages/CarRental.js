import React, { useState } from "react";
import "../pages/CarRental.css";
import Footer from "../components/Footer";

export const CarRental = () => {
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Searching cars from ${form.pickup} to ${form.drop} on ${form.date} for ${form.passengers} passengers`
    );
  };

  // ✅ Updated Function to send booking details to WhatsApp
  const sendWhatsAppBooking = (carName, price) => {
    if (!form.pickup || !form.drop || !form.date) {
      alert("Please fill pickup, drop, and date before booking!");
      return;
    }

    const message = `🚗 *Car Booking Request*
- Car: ${carName}
- Price: ${price}
- Pickup: ${form.pickup}
- Drop: ${form.drop}
- Date: ${form.date}
- Passengers: ${form.passengers}`;

    // Replace with your WhatsApp number (country code + number, no +)
    const phoneNumber = "9247152469";

    // ✅ Clean number (remove spaces/symbols) and validate
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    if (cleanNumber.length < 10 || cleanNumber.length > 15) {
      alert("Invalid WhatsApp number! Please check the number again.");
      return;
    }

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    // ✅ Open WhatsApp safely
    const win = window.open(url, "_blank");
    if (!win) {
      alert(
        "Unable to open WhatsApp. Please check if this number is active on WhatsApp."
      );
    }
  };

  return (
    <div className="car-rental">
      {/* Hero Booking Section */}
      <section className="car-hero">
        <h1>🚗 Car Rentals</h1>
        <p>Book your car easily — Affordable, Safe & Comfortable</p>

        <form className="car-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            value={form.pickup}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            value={form.drop}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="passengers"
            min="1"
            value={form.passengers}
            onChange={handleChange}
            required
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Car Options Section */}
      <section className="car-options">
        <h2>Available Cars</h2>
        <div className="car-grid">
          <div className="car-card">
            <img src="/images/tayota.webp" alt="tayota" />
            <div className="car-info">
              <h3>tayota</h3>
              <p>Comfortable sedan for city travel and business trips.</p>
             
              <button
                type="button"
                onClick={() => sendWhatsAppBooking("Sedan")}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="car-card">
            <img src="/images/swift.webp" alt="SUV" />
            <div className="car-info">
              <h3>swift</h3>
              <p>Spacious SUV, perfect for family trips and long drives.</p>

              <button
                type="button"
                onClick={() => sendWhatsAppBooking("SUV")}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="car-card">
            <img src="/images/maruti.jpg" alt="Luxury Car" />
            <div className="car-info">
              <h3>maruti</h3>
              <p>Premium comfort and style for special occasions.</p>

              <button
                type="button"
                onClick={() =>
                  sendWhatsAppBooking("Luxury Car")
                }
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="car-card">
            <img src="/images/Benz E250.jpg" alt="Luxury Car" />
            <div className="car-info">
              <h3>Benz E250</h3>
              <p>Premium comfort and style for special occasions.</p>

              <button
                type="button"
                onClick={() =>
                  sendWhatsAppBooking("Luxury Car")
                }
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="car-card">
            <img src="/images/Audi A6.webp" alt="Luxury Car" />
            <div className="car-info">
              <h3>Audi A6</h3>
              <p>Premium comfort and style for special occasions.</p>

              <button
                type="button"
                onClick={() =>
                  sendWhatsAppBooking("Luxury Car")
                }
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="car-card">
            <img src="/images/BMD 520d.webp" alt="Luxury Car" />
            <div className="car-info">
              <h3>BMD 520</h3>
              <p>Premium comfort and style for special occasions.</p>

              <button
                type="button"
                onClick={() =>
                  sendWhatsAppBooking("Luxury Car")
                }
              >
                Book Now
              </button>
            </div>
          </div>
          
                    <div className="car-card">
            <img src="/images/innova-crysta.png" alt="Luxury Car" />
            <div className="car-info">
              <h3>innova-crysta</h3>
              <p>Premium comfort and style for special occasions.</p>

              <button
                type="button"
                onClick={() =>
                  sendWhatsAppBooking("Luxury Car")
                }
              >
                Book Now
              </button>
            </div>
          </div>

            <div className="car-card">
            <img src="/images/kia carnival.jpg" alt="Luxury Car" />
            <div className="car-info">
              <h3>kia</h3>
              <p>Premium comfort and style for special occasions.</p>

              <button
                type="button"
                onClick={() =>
                  sendWhatsAppBooking("Luxury Car")
                }
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="car-card">
            <img src="/images/Honda Amaze.webp" alt="Van" />
            <div className="car-info">
              <h3>Honda Amaze</h3>
              <p>Perfect for group travel, events, and family outings.</p>
              
              <button
                type="button"
                onClick={() => sendWhatsAppBooking("Van")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
       <Footer />
    </div>
  );
};

