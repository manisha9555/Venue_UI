import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const StatisticsCard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="card statistics-card">
      <div className="card-header">
        <div>
          <h3 className="card-title">Todays Statistics</h3>
          <p className="card-subtitle">{currentDate}, {currentTime}</p>
        </div>
      </div>
      
      <div className="statistics-content">
        <div className="stat-section">
          <div className="stat-header">
            <span className="stat-label">Income</span>
            <span className="stat-timeframe">Today</span>
          </div>
          <div className="stat-main">
            <span className="stat-value">$ 9460.00</span>
            <div className="stat-change negative">
              <TrendingDown size={16} />
              <span>1.5%</span>
            </div>
          </div>
          <p className="stat-comparison">Compared to $9940 yesterday</p>
          <div className="stat-week">
            <span>Last week Income</span>
            <span className="week-value">$25658.00</span>
          </div>
        </div>

        <div className="stat-section">
          <div className="stat-header">
            <span className="stat-label">Expences</span>
            <span className="stat-timeframe">Today</span>
          </div>
          <div className="stat-main">
            <span className="stat-value">$ 5660.00</span>
            <div className="stat-change positive">
              <TrendingUp size={16} />
              <span>2.5%</span>
            </div>
          </div>
          <p className="stat-comparison">Compared to $5240 yesterday</p>
          <div className="stat-week">
            <span>Last week expences</span>
            <span className="week-value">$22658.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
