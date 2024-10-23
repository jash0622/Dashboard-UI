/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import '../styles/reports.css'

const ReportsGenerator = () => {
  const [selectedReport, setSelectedReport] = useState('leads');
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  const generateReport = (format) => {
    // Implementation for report generation would go here
    console.log(`Generating ${format} report for ${selectedReport}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reports Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Configure Report Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Configure Report</h2>
          
          {/* Report Type Selector */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">Report Type</label>
            <select 
              value={selectedReport} 
              onChange={(e) => setSelectedReport(e.target.value)} 
              className="border rounded-lg w-full p-2"
            >
              <option value="leads">Leads Report</option>
              <option value="conversions">Conversion Report</option>
              <option value="revenue">Revenue Report</option>
            </select>
          </div>

          {/* Date Range Selector */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">Date Range</label>
            <div className="border rounded-lg p-4">
              {/* Date range input - simple implementation (replace with a calendar library if needed) */}
              <input
                type="date"
                className="border rounded-lg p-2 mr-2"
                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
              />
              to
              <input
                type="date"
                className="border rounded-lg p-2 ml-2"
                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
              />
            </div>
          </div>

          {/* Buttons for report generation */}
          <div className="pt-4">
            <button 
              className="w-full bg-blue-600 text-white font-semibold rounded-lg py-2 mb-2 flex items-center justify-center"
              onClick={() => generateReport('pdf')}
            >
              <FileText className="h-4 w-4 mr-2" />
              Generate PDF
            </button>
            <button 
              className="w-full border border-blue-600 text-blue-600 font-semibold rounded-lg py-2 flex items-center justify-center"
              onClick={() => generateReport('csv')}
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Report Preview Card */}
        <div className="bg-white shadow-md rounded-lg p-4 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Report Preview</h2>
          <div className="border rounded-lg p-4 min-h-[400px] flex items-center justify-center text-gray-500">
            Configure options to preview report
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsGenerator;
