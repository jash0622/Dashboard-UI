/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/NavigationMetrics.css';

const NavigationMetrics = () => {
  const metrics = [
    { label: 'Leads', value: '7.4', trend: 'up', icon: '🔲' },
    { label: 'Reports', value: '6.8', trend: 'up', icon: '📊' },
    { label: 'Data', value: '6.3', trend: 'down', icon: '🔍' },
    { label: 'Data', value: '8.3', trend: 'down', icon: '📉' },
    { label: 'Analysis', value: '8.1', trend: 'up', icon: '📊' },
    { label: 'Decision', value: '9.1', trend: 'neutral', icon: '💡' }
  ];

  return (
    <div className="navigation-metrics">
      <h2>Navigation</h2>
      <div className="metrics-wrapper">
        <div className="main-score">
          <div className="score-circle">
            <span className="score-value">8.2</span>
            <span className="score-max">/10</span>
          </div>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-info">
                <div className="metric-value">
                  {metric.value}
                  <span className={`trend-indicator ${metric.trend}`}></span>
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationMetrics;
