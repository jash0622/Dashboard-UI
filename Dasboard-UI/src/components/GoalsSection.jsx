/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/GoalsSection.css';

const GoalsSection = () => {
  const goals = [
    {
      team: 'Marketing team',
      progress: 'made progress towards their goal',
      icon: '💡'
    },
    {
      team: 'Operations team',
      progress: 'added new items to their goal',
      icon: '⚙️'
    },
    {
      team: 'EzyMetrics',
      progress: 'Data analytics-focused company based in Thane',
      icon: '📊'
    }
  ];

  return (
    <div className="goals-section">
      <h2>Goals</h2>
      <div className="goals-list">
        {goals.map((goal, index) => (
          <div key={index} className="goal-item">
            <div className="goal-icon">{goal.icon}</div>
            <div className="goal-content">
              <div className="goal-team">{goal.team}</div>
              <div className="goal-progress">{goal.progress}</div>
            </div>
            <button className="view-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsSection;