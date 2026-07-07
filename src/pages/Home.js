import React from "react";
import "../App.css";    // ✅ Correct path
import Hero from "../components/Hero"; // ✅ Correct path
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section comes first */}
      <Hero />  
     

      {/* Other Home page content can go here */}
     <section className="welcome-section">
        <div className="welcome-content">
          <img src="/images/1.png" alt="Car" className="side-img" />
    

        <div className="text-content">
          <h2>Welcome to Ranadeep Travels</h2>
          <p>Explore our services and book your trips easily.</p>
        </div>
    
          <img src="/images/8.jpg" alt="Car" className="side-img" />
        </div>
        
        <div>
          <button className="explore-button">Explore More</button>
        </div>
      
        <div>
          <img src="/images/groupcars.png" alt="Car" className="combine" />
        </div>

        <div className="section">
          <h2 className="brand-heading">BRANDS</h2>
        </div>

  <div >
    <img src="/images/kia.png" alt="Car" className="brand" />    
    <img src="/images/nissan.png" alt="Car" className="brand" />
    <img src="/images/innova.png" alt="Car" className="brand" />
    <img src="/images/honda.png" alt="Car" className="brand" />
    <img src="/images/renault.png" alt="Car" className="brand" />
    <img src="/images/suzuki.png" alt="Car" className="brand" />

  </div>

  {/* <div className="section">
    <h2 className="brand-heading">OUR SERVICES</h2>
  </div> */}


</section>
{/* travel services */}
<section className="services">
      <div className="services-container">
        <h2 className="services-title">
          Our <span>Travel Services</span>
        </h2>

        <div className="services-grid">
          {/* Service 1 */}
          
        <div className="service-card">
          <div className="service-icon">🤝</div>
            <h3>VIP Delegation</h3>
            <p>
              Exclusive travel arrangements for dignitaries and corporate leaders.  
              Enjoy priority booking, premium vehicles, and personalized assistance  
              ensuring comfort, safety, and world-class hospitality.
           </p>
        </div>




          {/* Service 2 */}
          <div className="service-card">
  <div className="service-icon">🚌</div>
  <h3>Employee Transport</h3>
  <p>
    Reliable and comfortable transportation solutions for employees.  
    From daily shuttles to corporate trips, we ensure safe, punctual,  
    and hassle-free travel with modern buses and vehicles.
  </p>
</div>

          {/* Service 3 */}
          
<div className="service-card">
  <div className="service-icon">💍</div>
  <h3>Wedding & Special Events</h3>
  <p>
    Seamless transportation for weddings, parties, and special events.  
    From luxury buses to coordinated shuttles, we ensure timely, safe,  
    and stylish travel for all your guests.
  </p>
</div>


          {/* Service 4 */}
          <div className="service-card">
          <div className="service-icon">🛠️</div>
            <h3>Custom Solutions</h3>
              <p>
                Tailored transportation services for every need — corporate trips, group travel,  
                VIP transfers, or unique itineraries. Flexible, reliable, and crafted to suit your requirements.
              </p>
          </div>
        </div>
      </div>
    </section>



{/* cusomer reviews */}
<section className="services">
  <div className="services-container">

    <h2 className="services-title">Our Travel Customers Reviews</h2>

    <div className="services-grid">

      
      <div className="service-card">
        <img src="/images/3.jpg" alt="Flight" className="service-icon" />
        <h3>🤝 VIP Delegation</h3>
<p>
  Premium travel arrangements for corporate leaders and dignitaries.  
  Enjoy priority bookings, luxury transport, personalized itineraries,  
  and world-class service for domestic and international trips.
</p>

        <div className="review">
          <p><strong>Ramesh Kumar:</strong> "Smooth booking and cheapest fares!"</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
      </div>

      
      <div className="service-card">
        <img src="/images/3.jpg" alt="Hotel" className="service-icon" />
        <h3>🚌 Employee Transport</h3>
        <p>
         Reliable and comfortable transportation for employees.  
         Daily shuttles, corporate trips, and group travel are managed with modern vehicles,  
         punctual schedules, and a focus on safety and convenience.
        </p>

        <div className="review">
          <p><strong>Priya Sharma:</strong> "Hotel was clean and in a great location."</p>
          <div className="rating">⭐⭐⭐⭐</div>
        </div>
      </div>

      
      <div className="service-card">
        <img src="/images/3.jpg" alt="Tours" className="service-icon" />
        <h3>🚌 Tour Packages</h3>
        <p>
          Explore our curated holiday packages, including city tours, adventure trips, and honeymoon specials.
        </p>
        <div className="review">
          <p><strong>Anil Verma:</strong> "Our family trip was well organized!"</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
      </div>

  
      <div className="service-card">
        <img src="/images/3.jpg" alt="Transport" className="service-icon" />
        <h3>🚖 Transport & Rentals</h3>
        <p>
          Reliable cab, bus, and car rental services to make your journey smooth and enjoyable.
        </p>
        <div className="review">
          <p><strong>Sneha Patil:</strong> "Cab was on time, driver was polite."</p>
          <div className="rating">⭐⭐⭐⭐</div>
        </div>
      </div>

    </div>
  </div>
</section>


    

 <Footer />
    </div>
  );
};

export default Home;
