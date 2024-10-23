/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LeadManagement from './components/LeadManagement'; // Import your Lead Management component
import './App.css';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ReportsGenerator from './components/ReportsGenerator';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<LeadManagement />} />
            <Route path="/analytics" element={<AnalyticsDashboard/>} />
            <Route path="/reports" element={<ReportsGenerator/>} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
