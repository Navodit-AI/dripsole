// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Step Into Style</h1>
          <p className="hero-subtitle">Discover the freshest kicks and boldest looks. Shop shoes that speak your vibe.</p>
          <a href="#explore" className="hero-button">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
