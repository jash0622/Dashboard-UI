/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/FeedbackSection.css';
import { companyCultureImg, teamLeaderImg, benefitsImg } from '../assets';


const FeedbackSection = () => {
  const feedbackItems = [
    {
      id: 1,
      type: 'Company Culture',
      time: '1h ago',
      avatar: companyCultureImg // Replace with the actual image path
    },
    {
      id: 2,
      type: 'Team Leader',
      time: '2h ago',
      avatar: teamLeaderImg // Replace with the actual image path
    },
    {
      id: 3,
      type: 'Benefits',
      time: '1d ago',
      avatar: benefitsImg // Replace with the actual image path
    }
  ];

  return (
    <div className="feedback-section">
      <h2>New feedback!</h2>
      <div className="feedback-list">
        {feedbackItems.map(item => (
          <div key={item.id} className="feedback-item">
            <div className="feedback-avatar">
              <img src={item.avatar} alt={`${item.type} avatar`} className="avatar-image" />
            </div>
            <div className="feedback-content">
              <p className="feedback-type">{item.type}</p>
              <p className="feedback-time">{item.time}</p>
            </div>
            <div className="feedback-actions">
              <button className="action-button">View</button>
              <button className="action-button">Reply</button>
              <button className="action-button">Archive</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
