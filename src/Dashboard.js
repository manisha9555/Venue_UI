import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatisticsCard from './StatisticsCard';
import HireVsCancelCard from './HireVsCancelCard';
import CarAvailabilityCard from './CarAvailabilityCard';
import LiveCarStatusCard from './LiveCarStatusCard';
import EarningSummaryCard from './EarningSummaryCard';
import './Dashboard.css';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className="dashboard">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="main-content">
        <Header />
        
        <div className="dashboard-content">
          <div className="content-left">
            <StatisticsCard />
            <HireVsCancelCard />
          </div>
          
          <div className="content-right">
            <CarAvailabilityCard />
            <LiveCarStatusCard />
            <EarningSummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
