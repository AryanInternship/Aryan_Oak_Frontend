import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3><i className="fas fa-info-circle"></i> ABOUT</h3>
        <ul>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#news">News & Updates</a></li>
          <li><a href="#corporate">Corporate Information</a></li>
          <li><a href="#press">Press</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3><i className="fas fa-building"></i> GROUP COMPANIES</h3>
        <ul>
          <li><a href="#partner">Partner With Us</a></li>
          <li><a href="#download">Download App</a></li>
          <li><a href="#trust">Trust Badges / Certifications</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3><i className="fas fa-life-ring"></i> HELP</h3>
        <ul>
          <li><a href="#help-center">Help Center</a></li>
          <li><a href="#payments">Payments</a></li>
          <li><a href="#shipping">Shipping</a></li>
          <li><a href="#cancellation">Cancellation & Returns</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#track">Track Application</a></li>
          <li><a href="#callback">Request a Callback</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3><i className="fas fa-shield-alt"></i> CONSUMER POLICY</h3>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#refund">Refund & Cancellation Policy</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#sitemap">Sitemap</a></li>
          <li><a href="#grievance">Grievance Redressal</a></li>
          <li><a href="#epr">EPR Compliance</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
