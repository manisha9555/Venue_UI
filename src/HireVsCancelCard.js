import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const HireVsCancelCard = () => {
  const data = [
    { name: 'Total Hired', value: 54, color: '#3B82F6', change: 'up' },
    { name: 'Total Canceled', value: 20, color: '#10B981', change: 'up' },
    { name: 'Total Pending', value: 26, color: '#EF4444', change: 'down' }
  ];

  return (
    <div className="card hire-vs-cancel-card">
      <div className="card-header">
        <h3 className="card-title">Hire vs Cancel</h3>
        <span className="card-timeframe">Today</span>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: item.color }}></div>
            <span className="legend-label">{item.name}</span>
            <span className="legend-value">{item.value}%</span>
            <div className={`legend-change ${item.change}`}>
              {item.change === 'up' ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireVsCancelCard;
