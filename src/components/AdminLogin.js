import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  return (
    <div className="admin-auth-container">
      <div className="admin-auth-form">
        <h1>VisionCraft</h1>
        <div className="auth-box">
          <h2>Admin Login</h2>
          <p>Enter your admin credentials to sign in.</p>
          <input type="text" placeholder="Admin Username" />
          <input type="password" placeholder="Password" />
          <button className="auth-btn">Login</button>
          <p>
            Don’t have an admin account?{' '}
            <Link to="/admin/signup">Sign up as Admin</Link>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default AdminLogin;
