// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="auth-container">
      <h1>VisionCraft</h1>
      <div className="auth-box">
        <h2>Login</h2>
        <p>Enter your email and password to sign in.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="auth-btn">Login</button>
        <Link to="/forgot" className="auth-link">Forgot password?</Link>

        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>

        {/* New admin login link */}
        <p>
          Are you an admin? <Link to="/admin/login">Admin Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
