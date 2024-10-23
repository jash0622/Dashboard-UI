/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar /> 
      <MainContent />
      
    </div>
  );
};

export default Dashboard;