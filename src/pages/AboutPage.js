import React from "react";
import "../App.css"; 
import "../pages/About.css";  // ✅ Correct path
import Footer from "../components/Footer";
// import { motion } from "framer-motion";



const AboutPage = () => {
  const hero = {
    title: "About Us",
    subtitle:
      "We believe travel should be inspiring, seamless, and unforgettable. Discover our story and values.",
    
  };
  return (
    <div>
<header className="about-hero">
      <div className="hero-content">
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
      </div>
    </header>

      <section className="company-overview">
      <h2 className="company-heading">Company Overview</h2>

      <p className="company-paragraph">
        At Wanderlust Travels, we specialize in crafting unforgettable journeys across the globe. Whether you're
        looking for a luxury escape, a cultural adventure, or a family getaway, we tailor every trip to meet your
        unique preferences.
      </p>
</section>


<section className="company-section">
 
  <div className="company-subsection">
    <h3 className="company-subheading">Mission Statement</h3>
    <p className="company-paragraph">
      Our mission is to provide personalized travel experiences that create lifelong memories, while promoting
      responsible tourism.
    </p>
  </div>

  <div className="company-subsection">
    <h3 className="company-subheading">Vision Statement</h3>
    <p className="company-paragraph">
      To be the world’s first and foremost transport provide that ensures customers utmost safety through integration of technology and operations, sustain ability, commitment and much more.
    </p>
  </div>

  <div className="company-subsection">
    <h3 className="company-subheading">Core Values</h3>
    <ul className="company-list">
      <li>🌍 Customer Focus – Every traveler’s need is our priority.</li>
      <li>♻️ Sustainability – We support eco-conscious tourism practices.</li>
      <li>🧭 Adventure – We encourage curiosity and exploration.</li>
      <li>🤝 Integrity – We value transparency and honest communication.</li>
    </ul>
  </div>
</section>



{/* history */}

<section className="agency-history">
      <h2 className="history-heading">Our Story</h2>

      <p className="history-intro">
        Wanderlust Travels was founded in 2012 out of a passion for exploration and a desire to make global travel
        more accessible, personal, and unforgettable. What started as a small home-based operation is now a trusted
        travel agency serving adventurers around the world.
      </p>

      <div className="milestones">
        <h3 className="milestones-heading">Milestones & Growth</h3>
        <ul className="timeline">
          <li>
            <span className="timeline-year">2012</span>
            <p>Agency founded by travel enthusiast Aisha Khan in her living room.</p>
          </li>
          <li>
            <span className="timeline-year">2015</span>
            <p>Expanded to Southeast Asia and Europe tours; crossed 1,000 happy customers.</p>
          </li>
          <li>
            <span className="timeline-year">2018</span>
            <p>Opened our first physical office and launched 24/7 customer support.</p>
          </li>
          <li>
            <span className="timeline-year">2021</span>
            <p>Recognized as a Top 10 Eco-Friendly Travel Agency in Asia.</p>
          </li>
        </ul>
      </div>
    </section>
  
      {/* ✅ Founder / Owner Section */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Founder Image */}
    <div className="flex justify-center md:justify-start">
      <img
        src="/images/3.jpg"
        alt="Founder"
        className="rounded-2xl shadow-xl w-80 h-96 object-cover border-4 border-pink-200 hover:scale-105 transform transition duration-300"
      />
    </div>

    {/* Founder Information */}
    <div>
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        Meet Our Founder
      </h2>
      <h3 className="text-2xl font-semibold text-pink-600 mb-6">
        Mr. Deelip Dora &amp; Pradeep Dora
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6 text-justify">
        With over <strong>10 years of expertise</strong> in the travel industry, 
        Mr. Deelip and Pradeep established{" "}
        <span className="text-pink-600 font-semibold">Ranadeep Travels</span>.  
        Started in 2001, Ranadeep Travels has become a trusted name in Visakhapatnam, 
        offering passenger transport solutions ranging from cars to corporate 
        travel services. <br /><br />
        Today, we proudly serve 25+ corporates, operate 60+ buses and 25 cars, 
        and deliver premium hospitality experiences. Our services include 
        corporate travel, group tours, packaged trips, and student industrial tours.
      </p>

      {/* Achievements / Highlights */}
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>MoU with Andhra Pradesh Tourism (2017) for tourist bus services.</li>
        <li>Expertise in large group bookings (200+ travelers).</li>
        <li>Trusted by Indian Railways, Indian Navy, SBI, HPCL, IBM, Asian Paints & more.</li>
      </ul>

      {/* Contact / Social Links */}
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="mailto:ranadeeptravels@example.com"
          className="px-5 py-2 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition"
        >
          📧 Email
        </a>
        <a
          href="tel:+917702911673"
          className="px-5 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          📞 Call
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-900 transition"
        >
          🔗 LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>



      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
