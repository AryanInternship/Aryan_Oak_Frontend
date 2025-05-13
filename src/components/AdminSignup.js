import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSignup.css';

function AdminSignup() {
  return (
    <div className="admin-auth-container">
      <div className="admin-auth-form">
        <h1>VisionCraft</h1>
        <div className="auth-box">
          <h2>Admin Sign Up</h2>
          <p>Create your admin account below.</p>
          <input type="text" placeholder="Admin Username" />
          <input type="email" placeholder="Admin Email" />
          <input type="password" placeholder="Password" />
          <button className="auth-btn">Sign Up</button>
          <p>
            Already an admin?{' '}
            <Link to="/admin/login">Login as Admin</Link>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default AdminSignup;
