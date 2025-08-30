import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const EarningSummaryCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Mar 2022 - Oct 2022');

  const data = [
    { month: 'May', last6Months: 120000, lastYear: 80000 },
    { month: 'Jun', last6Months: 180000, lastYear: 95000 },
    { month: 'Jul', last6Months: 150000, lastYear: 110000 },
    { month: 'Aug', last6Months: 220000, lastYear: 130000 },
    { month: 'Sep', last6Months: 280000, lastYear: 160000 },
    { month: 'Oct', last6Months: 250000, lastYear: 180000 }
  ];

  return (
    <div className="card earning-summary-card">
      <div className="card-header">
        <h3 className="card-title">Earning Summary</h3>
        <select 
          value={selectedPeriod} 
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="period-select"
        >
          <option value="Mar 2022 - Oct 2022">Mar 2022 - Oct 2022</option>
          <option value="Apr 2022 - Nov 2022">Apr 2022 - Nov 2022</option>
          <option value="May 2022 - Dec 2022">May 2022 - Dec 2022</option>
        </select>
        
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-dot blue"></div>
            <span>Last 6 months</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot gray"></div>
            <span>Same period last year</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, '']}
              labelStyle={{ color: '#374151' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="last6Months" 
              stroke="#3B82F6" 
              strokeWidth={3}
              fill="#3B82F6"
              fillOpacity={0.1}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="lastYear" 
              stroke="#9CA3AF" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningSummaryCard;
