import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  { icon: 'fas fa-fingerprint', title: 'Aadhaar Card Update', desc: 'Update your Aadhaar card details' },
  { icon: 'fas fa-id-card', title: 'Make Your PAN Card', desc: 'Apply for a new PAN card online' },
  { icon: 'fas fa-car', title: 'Apply for a Driving License', desc: 'Submit an application for a driving license' },
  { icon: 'fas fa-passport', title: 'Voter ID (Epic)', desc: 'Apply for Voter ID' },
  { icon: 'fas fa-heart-pulse', title: 'Ayushaman Bharat Card', desc: 'Apply For Ayushaman Bharat Card' },
  { icon: 'fas fa-money-check-dollar', title: 'GST Registration', desc: 'Register With Your GST Credentials' },
  { icon: 'fas fa-building-shield', title: 'Police Verification Certificate', desc: 'Apply for Police Verification' },
  { icon: 'fas fa-barcode', title: 'MSME Registration', desc: 'Apply for MSME Registration' },
  { icon: 'fas fa-clipboard', title: 'Duplicate RC', desc: 'Apply for RC' },
  { icon: 'fas fa-note-sticky', title: 'Ownership Transfer', desc: 'Apply for Transfer Of Ownership' },
  { icon: 'fas fa-car', title: 'Vehicle Fitness', desc: 'Apply for Vehicle Fitness' },
  { icon: 'fas fa-truck', title: 'Vehicle Insurance', desc: 'Apply for Vehicle Insurance' },
  { icon: 'fas fa-stamp', title: 'PUC Certificate', desc: 'Apply for PUC Certificate' },
];

function Services() {
  // index of the first visible card (0–3)
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => Math.min(i + 1, servicesData.length - 3));

  return (
    <section className="services-section">
      <h2>Core Services</h2>

      <div className="services-container">
        <button
          className="arrow left"
          onClick={prev}
          disabled={index === 0}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className="cards-wrapper"
          style={{ transform: `translateX(-${index * 33.3333}%)` }}
        >
          {servicesData.map((s, i) => (
            <div key={i} className="service-card">
              <i className={`${s.icon} fa-3x`}></i>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <button
          className="arrow right"
          onClick={next}
          disabled={index === servicesData.length - 3}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Services;
