import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import BusRentalPage from "./pages/BusRentalPage";
import { CarRental } from "./pages/CarRental";






function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/bus-rental" element={<BusRentalPage />} />
        <Route path="/car-rental" element={<CarRental />} />

      </Routes>
    </Router>
  );
}

export default App;
