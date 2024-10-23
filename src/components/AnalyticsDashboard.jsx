/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown, Users, Target, TrendingUp } from 'lucide-react';
import '../styles/analytics.css'

const data = [
  { name: 'Jan', leads: 400, conversions: 240 },
  { name: 'Feb', leads: 300, conversions: 139 },
  { name: 'Mar', leads: 500, conversions: 380 },
  { name: 'Apr', leads: 280, conversions: 190 },
  { name: 'May', leads: 590, conversions: 390 },
  { name: 'Jun', leads: 350, conversions: 300 },
];

const AnalyticsDashboard = () => {
    return (
      <div className="analytics-dashboard">
        <h1 className="dashboard-title">Analytics Dashboard</h1>
        
        <div className="metrics-grid">
          {/* Total Leads Card */}
          <div className="metric-card">
            <div className="metric-header">
              <h2 className="metric-title">Total Leads</h2>
              <Users className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <div className="metric-value">2,420</div>
              <div className="metric-change change-positive">
                <ArrowUp className="h-4 w-4 mr-1" />
                +12.5% from last month
              </div>
            </div>
          </div>
  
          {/* Conversion Rate Card */}
          <div className="metric-card">
            <div className="metric-header">
              <h2 className="metric-title">Conversion Rate</h2>
              <Target className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <div className="metric-value">68.4%</div>
              <div className="metric-change change-negative">
                <ArrowDown className="h-4 w-4 mr-1" />
                -4.3% from last month
              </div>
            </div>
          </div>
  
          {/* Revenue Card */}
          <div className="metric-card">
            <div className="metric-header">
              <h2 className="metric-title">Revenue</h2>
              <TrendingUp className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <div className="metric-value">$48,762</div>
              <div className="metric-change change-positive">
                <ArrowUp className="h-4 w-4 mr-1" />
                +8.2% from last month
              </div>
            </div>
          </div>
        </div>
  
        {/* Lead Performance Chart */}
        <div className="chart-container">
          <div className="chart-header">
            <h2 className="chart-title">Lead Performance</h2>
          </div>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="leads" 
                  stroke="#2563eb" 
                  strokeWidth={2} 
                />
                <Line 
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="#16a34a" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

export default AnalyticsDashboard;
