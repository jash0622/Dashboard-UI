/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Results.css';

const Results = () => {
  const questions = [
    'Opportunity to grow within your team?',
    'Effectiveness of the leadership team towards its goals?',
    'Is the organization prepared for future leadership needs?'
  ];

  return (
    <div className="results-section">
      <h2>Results</h2>
      <div className="questions-list">
        {questions.map((question, index) => (
          <div key={index} className="question-item">
            <h3>{question}</h3>
            <div className="response-bar">
              <div className="progress-bar"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;