// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">Vision Craft</Link>
        </div>

        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search" />
          <i className="fas fa-search search-icon"></i>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link>About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <div className="lang-dropdown" ref={dropdownRef}>
          <button className="lang-btn" onClick={toggleDropdown}>
            {language} <i className="fas fa-chevron-down"></i>
          </button>
          {isOpen && (
            <ul className="lang-menu">
              <li onClick={() => selectLanguage('English')}>English</li>
              <li onClick={() => selectLanguage('Marathi')}>Marathi</li>
              <li onClick={() => selectLanguage('Hindi')}>Hindi</li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
