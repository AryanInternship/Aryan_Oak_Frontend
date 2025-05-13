// src/components/AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const customers = [
  { name: 'Emily Johnson', email: 'emily.johnson@example.com', stage: 'Application' },
  { name: 'Michael Smith', email: 'michael.smith@example.com', stage: 'In Review' },
  { name: 'Sarah Williams', email: 'sarah.williams@example.com', stage: 'Completed' },
  { name: 'David Brown', email: 'david.brown@example.com', stage: 'Lead' },
];

function AdminDashboard() {
  const [filters, setFilters] = useState({ stage: '', service: '', status: '' });

  const handleFilterChange = (e) => {
    setFilters(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <div className="admin-dash-container">
      <header className="admin-header">
        <h1>CRM Dashboard</h1>
        <Link to="/admin/login" className="staff-login">Staff Login</Link>
      </header>

      <section className="admin-filters">
        <select name="stage" onChange={handleFilterChange}>
          <option value="">Stage</option>
          <option>Application</option>
          <option>In Review</option>
          <option>Completed</option>
          <option>Lead</option>
        </select>
        <select name="service" onChange={handleFilterChange}>
          <option value="">Service</option>
          <option>Aadhaar</option>
          <option>PAN</option>
          <option>License</option>
        </select>
        <select name="status" onChange={handleFilterChange}>
          <option value="">Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <button className="update-stage">Update Stage</button>
      </section>

      <section className="customer-cards">
        {customers.map((c, i) => (
          <div key={i} className="customer-card">
            <h3>{c.name}</h3>
            <p className="email">{c.email}</p>
            <div className="stage-line">
              <span className="label">Stage</span>
              <span className="value">{c.stage}</span>
              <button className="request-btn">Request documents</button>
            </div>
          </div>
        ))}
      </section>

      <section className="admin-actions">
        <div className="action-card">
          <i className="fas fa-pen"></i>
          <span>Add / Edit Services</span>
        </div>
        <div className="action-card">
          <i className="fas fa-dollar-sign"></i>
          <span>Manage Pricing</span>
        </div>
        <div className="action-card">
          <i className="fas fa-tag"></i>
          <span>Add Offers/Discounts</span>
        </div>
      </section>

      <button className="view-payments">View Payment History →</button>
    </div>
  );
}

export default AdminDashboard;
