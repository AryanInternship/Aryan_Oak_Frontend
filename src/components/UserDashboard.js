// src/components/UserDashboard.js
import React from 'react';
import './UserDashboard.css';

function UserDashboard() {
  const actions = [
    { icon: 'fas fa-headset', title: 'Service Status', button: 'In Review' },
    { icon: 'fas fa-file-upload', title: 'Upload Documents', button: 'Upload' },
    { icon: 'fas fa-file-invoice', title: 'Invoices', button: 'Download' },
    { icon: 'fas fa-rocket', title: 'Application Tracker', custom: true },
    { icon: 'fas fa-phone', title: 'Request a Callback', button: 'Request Now' },
    { icon: 'fas fa-bell', title: 'Notifications', button: 'View' },
  ];

  return (
    <div className="user-dash-container">
      <header className="user-header">
        <h1>CRM Dashboard</h1>
        <h2>“Welcome, User”</h2>
        <div className="user-icon">
          <i className="fas fa-user-circle"></i>
        </div>
      </header>

      <section className="user-actions">
        {actions.map((a, i) => (
          <div key={i} className="user-card">
            <i className={a.icon}></i>
            <h3>{a.title}</h3>
            {a.custom ? (
              <div className="tracker">
                <span className="dot done"></span>
                <span className="line"></span>
                <span className="dot done"></span>
                <span className="line"></span>
                <span className="dot pending"></span>
              </div>
            ) : (
              <button className="action-btn">{a.button}</button>
            )}
          </div>
        ))}
      </section>

      <button className="payment-history">Payment History</button>
    </div>
  );
}

export default UserDashboard;
