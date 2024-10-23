/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/ReportingTool.css';

const ReportingTool = () => {
  const tools = [
    {
      title: 'Basic Reporting Tool',
      description: 'Generate PDF/CSV Reports',
      icon: '📄'
    },
    {
      title: 'Simplify Data Management',
      description: 'Data Analysis',
      icon: '📊'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Accessible Data Analytics Platform',
      icon: '📈'
    }
  ];

  return (
    <div className="reporting-tool">
      <h2>Reporting Tool</h2>
      <div className="tools-list">
        {tools.map((tool, index) => (
          <div key={index} className="tool-item">
            <span className="tool-icon">{tool.icon}</span>
            <div className="tool-content">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportingTool;