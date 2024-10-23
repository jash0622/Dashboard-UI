/* eslint-disable no-unused-vars */
// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navigationItems = [
    { icon: "📊", text: "Home", path: "/" },
    { icon: "👥", text: "Leads", path: "/leads" },
    { icon: "📈", text: "Analytics", path: "/analytics" },
    { icon: "📄", text: "Reports", path: "/reports" },
    { icon: "📋", text: "Surveys", path: "/surveys" }
  ];

  const teams = [
    { icon: "💡", text: "Marketing" },
    { icon: "✏️", text: "Design" },
    { icon: "🛡️", text: "Security" },
    { icon: "⚙️", text: "Operations" }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      
      <nav className="sidebar-nav">
        {navigationItems.map((item, index) => (
          <Link to={item.path} key={index} className="nav-item">
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.text}</span>
          </Link>
        ))}
      </nav>

      <div className="teams-section">
        <h3>TEAMS</h3>
        {teams.map((team, index) => (
          <div key={index} className="team-item">
            <span className="team-icon">{team.icon}</span>
            <span className="team-text">{team.text}</span>
          </div>
        ))}
      </div>

      <div className="user-profile">
        <div className="profile-image">JS</div>
        <div className="profile-info">
          <div className="profile-name">John Smith</div>
          <div className="profile-email">jsmith@email.abc</div>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Settings</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
