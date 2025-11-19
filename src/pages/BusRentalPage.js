import React, { useState } from "react";
import "../pages/BusRentalPage.css"; 
import Footer from "../components/Footer";

const BusRentalPage = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching buses from ${form.from} to ${form.to} on ${form.date}`);
  };
    
  return (
    <div className="bus-rental">
      {/* Hero Section */}
      <section className="bus-hero">
        <h1>🚌 Bus Rentals</h1>
        <p>Book affordable and comfortable buses for your journeys</p>

        <form className="bus-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from"
            placeholder="From"
            value={form.from}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="to"
            placeholder="To"
            value={form.to}
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
          <button type="submit">Search Buses</button>
        </form>
      </section>

      {/* Bus Options */}
      <section className="bus-options">
        <h2>Available Buses</h2>
        <div className="bus-grid">
          <div className="bus-card">
            <img src="/images/7.jpg" alt="AC Sleeper Bus" />
            <h3>AC Sleeper Bus</h3>
            <p>Comfortable sleeper seats with AC, charging points, and blankets.</p>
            <span className="price">₹1200 / seat</span>
            <button>Book Now</button>
          </div>

          <div className="bus-card">
            <img src="/images/" alt="Non-AC Seater" />
            <h3>Non-AC Seater</h3>
            <p>Affordable and reliable bus service for budget-friendly travel.</p>
            <span className="price">₹700 / seat</span>
            <button>Book Now</button>
          </div>

          <div className="bus-card">
            <img src="/images/bus3.jpg" alt="Luxury Coach" />
            <h3>Luxury Coach</h3>
            <p>Spacious seating, Wi-Fi, refreshments, and premium experience.</p>
            <span className="price">₹2000 / seat</span>
            <button>Book Now</button>
          </div>

          <div className="bus-card">
            <img src="/images/bus4.jpg" alt="Mini Bus Rental" />
            <h3>Mini Bus Rental</h3>
            <p>Perfect for group trips, weddings, and family outings.</p>
            <span className="price">₹5000 / day</span>
            <button>Book Now</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BusRentalPage;
