import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Step Into Style</h1>
          <p className="hero-subtitle">
            Discover the freshest kicks and boldest looks. Shop shoes that speak your vibe.
          </p>
          <Link to="/explore" className="hero-button">Explore</Link> {/* <-- Replaced <a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
