import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container about-section">
      <h2>About</h2>
      <div className="about-content">
        <p>
          At CraveCorner, we believe cooking is more than food — it’s self-care. 
          Our recipes are designed to be accessible, nourishing, and a source of everyday joy. 
          We focus on simple ingredients and straightforward steps so you can spend less 
          time prepping and more time savoring.
        </p>
        {/* Simple visual decoration (could be an SVG of a pot/plant) */}
        <div className="about-decoration">
            <span style={{ color: 'var(--color-secondary)' }}>&#9787;</span> 
            <span style={{ color: 'var(--color-accent)' }}>&#9773;</span>
            <span style={{ color: 'var(--color-secondary)' }}>&#9835;</span> 
        </div>
      </div>
    </section>
  );
};

export default About;