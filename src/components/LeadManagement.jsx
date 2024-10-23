/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Search, Download, UserPlus, Mail, Phone, Filter } from 'lucide-react';
import '../styles/lead-management.css'; // Assuming your CSS file is located here

const LeadManagement = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8900',
      status: 'New',
      source: 'Website',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234-567-8901',
      status: 'Contacted',
      source: 'Referral',
      date: '2024-01-16',
    },
    // Add more dummy data as needed
  ]);

  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="page-container">
      <div className="header">
        <h1 className="page-title">Lead Management</h1>
        <div className="search-section">
          <div className="search-input">
            <input type="text" placeholder="Search leads..." />
            <Search className="search-icon" />
          </div>
          <button className="button button-secondary">
            <Filter className="icon" />
            Filter
          </button>
          <button className="button button-primary">
            <UserPlus className="icon" />
            Add Lead
          </button>
        </div>
      </div>

      <div className="leads-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Source</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>
                  <span
                    className={`status-badge ${
                      lead.status === 'New'
                        ? 'status-new'
                        : lead.status === 'Contacted'
                        ? 'status-contacted'
                        : ''
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td>{lead.source}</td>
                <td>{lead.date}</td>
                <td>
                  <button
                    className="button button-secondary"
                    onClick={() => setSelectedLead(lead)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedLead && (
        <div className={`lead-details-sidebar open`}>
          <div className="sidebar-header">
            <h2>Lead Details</h2>
            <button
              className="close-button"
              onClick={() => setSelectedLead(null)}
            >
              ✖
            </button>
          </div>
          <div className="lead-details">
            <h3>{selectedLead.name}</h3>
            <div className="lead-info">
              <div>
                <Mail className="icon" />
                {selectedLead.email}
              </div>
              <div>
                <Phone className="icon" />
                {selectedLead.phone}
              </div>
              {/* Add more lead details as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadManagement;
