import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="container hero-section">
      <div className="hero-content">
        <h1>Discover the art of cooking</h1>
        <p>Simple, healthy recipes made for everyday joy.</p>
        <a href="#recipes" className="btn-primary">Explore Recipes</a>
      </div>
      <div className="hero-image">
        {/* Placeholder image for pasta dish */}
        <img 
          src="https://i.pinimg.com/736x/1b/dc/09/1bdc09ea5a714a29493d039f5e130533.jpg" 
          alt="Spaghetti with cherry tomatoes and basil"
        />
      </div>
    </section>
  );
};

export default Hero;