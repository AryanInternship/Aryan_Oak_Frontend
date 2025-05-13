// src/components/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="auth-container">
      <h1>VisionCraft</h1>
      <div className="auth-box">
        <h2>Sign Up</h2>
        <p>Create your account by filling the information below.</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="auth-btn">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
export default Signup;