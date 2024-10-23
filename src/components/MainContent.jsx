/* eslint-disable no-unused-vars */
import React from 'react';
import FeedbackSection from './FeedbackSection';
import GoalsSection from './GoalsSection';
import NavigationMetrics from './NavigationMetrics';
import ReportingTool from './ReportingTool';
import Results from './Results';
import '../styles/MainContent.css';

// Example images for the widgets
import addWidgetImg from '../assets/addWidget.png'; 
import dummyLeadImg from '../assets/download.jpeg';
import leadDataImg from '../assets/images.jpeg';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-grid">
        <div className="grid-item feedback">
          <FeedbackSection />
        </div>
        <div className="grid-item goals">
          <GoalsSection />
        </div>
        <div className="grid-item navigation">
          <NavigationMetrics />
        </div>
        
        {/* Customizable Widgets Section */}
        <div className="grid-item widgets">
          <div className="customizable-widgets">
            <h2>Customizable Widgets</h2>
            <div className="widget-list">

              {/* Widget 1 - Add Widget */}
              <div className="widget-item">
                <div className="widget-image">
                  <img src={addWidgetImg} alt="Add Widget" />
                </div>
                <div className="widget-content">
                  <p>Add Widget</p>
                </div>
                <div className="widget-actions">
                  <button className="view-btn">View</button>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>

              {/* Widget 2 - Dummy Lead */}
              <div className="widget-item">
                <div className="widget-image">
                  <img src={dummyLeadImg} alt="Dummy Lead" />
                </div>
                <div className="widget-content">
                  <p>Dummy Lead</p>
                </div>
                <div className="widget-actions">
                  <button className="view-btn">View</button>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>

              {/* Widget 3 - Lead Data */}
              <div className="widget-item">
                <div className="widget-image">
                  <img src={leadDataImg} alt="Lead Data" />
                </div>
                <div className="widget-content">
                  <p>Lead Data</p>
                </div>
                <div className="widget-actions">
                  <button className="generate-btn">Generate PDF</button>
                  <button className="generate-btn">Generate CSV</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid-item reporting">
          <ReportingTool />
        </div>
        <div className="grid-item results">
          <Results />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
