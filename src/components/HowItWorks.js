// src/components/HowItWorks.js
import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-section">
      <h2>How It Works</h2>
      <div className="how-content">
        <div className="steps-list">
          <div className="step-item">
            <div className="circle">1</div>
            <span>Choose Template</span>
          </div>
          <div className="step-item">
            <div className="circle">2</div>
            <span>Fill Information</span>
          </div>
          <div className="step-item">
            <div className="circle">3</div>
            <span>Download / Share</span>
          </div>
        </div>
        <div className="steps-graphic">
          <div className="graphic-card">
            <i className="fas fa-file-alt fa-2x"></i>
            <p>Choose Template</p>
          </div>
          <i className="fas fa-arrow-right arrow-between"></i>
          <div className="graphic-card">
            <i className="fas fa-edit fa-2x"></i>
            <p>Fill Information</p>
          </div>
          <i className="fas fa-arrow-right arrow-between"></i>
          <div className="graphic-card">
            <i className="fas fa-download fa-2x"></i>
            <p>Download / Share</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
