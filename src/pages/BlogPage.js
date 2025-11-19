import React from "react";
import "../pages/BlogPage.css"; 
import Footer from "../components/Footer";
const hero = {
    title: "Blog",
    subtitle:
      "We believe travel should be inspiring, seamless, and unforgettable. Discover our story and values.",
    
  };
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hill Stations to Visit in India",
    date: "August 28, 2025",
    author: "Travel Expert",
    image: "https://source.unsplash.com/800x500/?mountains,travel",
    excerpt:
      "Escape the summer heat with these breathtaking hill stations that offer peace, adventure, and scenic beauty...",
  },
  {
    id: 2,
    title: "Best Bus Routes for a Comfortable Journey",
    date: "August 20, 2025",
    author: "Team Wanderlust",
    image: "https://source.unsplash.com/800x500/?bus,journey",
    excerpt:
      "From Mumbai to Goa, or Delhi to Manali — discover India’s most popular and comfortable bus routes with tips...",
  },
  {
    id: 3,
    title: "Cultural Festivals You Shouldn’t Miss",
    date: "August 10, 2025",
    author: "Globetrotter",
    image: "https://source.unsplash.com/800x500/?festival,india",
    excerpt:
      "India’s cultural diversity shines through its vibrant festivals. Here’s a list of the most exciting ones to plan your trip...",
  },
];

function BlogPage() {
  return (
    
<div>


            <header className="about-hero">
      <div className="hero-content">
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
      </div>
    </header>

    <section className="blog-section">

      <div className="blog-header">
        <h2>Travel Stories & Guides</h2>
        <p>
          Discover travel tips, hidden gems, and inspiring stories from across
          the world.
        </p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-meta">
                {post.date} • By {post.author}
              </p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default BlogPage;
