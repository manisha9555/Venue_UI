import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatisticsCard from './components/StatisticsCard';
import CarAvailabilityCard from './components/CarAvailabilityCard';
import LiveCarStatusCard from './components/LiveCarStatusCard';
import HireVsCancelCard from './components/HireVsCancelCard';
import EarningSummaryCard from './components/EarningSummaryCard';

function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className="app">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main-content">
        <Header />
        <div className="dashboard-grid">
          <StatisticsCard />
          <CarAvailabilityCard />
          <LiveCarStatusCard />
          <HireVsCancelCard />
          <EarningSummaryCard />
        </div>
      </div>
    </div>
  );
}

export default App;
