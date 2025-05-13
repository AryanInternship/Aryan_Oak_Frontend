// src/components/Hero.js
import React from 'react';
import './Hero.css';
// (Assuming you have a hero image in src/assets/hero.png)
// import heroImage from '../assets/hero.png';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Create Official Documents Online in Minutes</h1>
        <p>Fast, Secure, and Verified Documentation Services</p>
        <div className="hero-buttons">
          <button className="btn primary-btn">Start Now</button>
          <button className="btn outline-btn">How it Works</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Replace src with actual image path */}
        <img src="/img.jpg" alt="Official Documents Illustration" />
      </div>
    </section>
  );
}

export default Hero;
