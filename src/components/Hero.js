import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="/images/ranadeep-1.avif"
            className="d-block w-100 hero-img"
            alt="Travel 1"
          />
          <div className="carousel-caption">
            <h2>“Jobs fill your pockets, but adventures fill your soul.”</h2>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="/images/ranadeep-2.webp"
            className="d-block w-100 hero-img"
            alt="Travel 2"
          />
          <div className="carousel-caption">
            <h2>“Travel makes one modest. You see what a tiny place you occupy in the world.”</h2>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="/images/ranadeep-3.webp"
            className="d-block w-100 hero-img"
            alt="Travel 3"
          />
          <div className="carousel-caption">
            <h2>“The world is a book, and those who do not travel read only one page.”</h2>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
