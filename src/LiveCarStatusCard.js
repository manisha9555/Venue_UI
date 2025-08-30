import React from 'react';
import { Filter, User } from 'lucide-react';

const LiveCarStatusCard = () => {
  const carStatusData = [
    {
      id: 1,
      carNo: '6465',
      driver: 'Alex Noman',
      status: 'Completed',
      earning: '$ 35.44',
      statusColor: 'green'
    },
    {
      id: 2,
      carNo: '5665',
      driver: 'Razib Rahman',
      status: 'Pending',
      earning: '$ 0.00',
      statusColor: 'blue'
    },
    {
      id: 3,
      carNo: '1755',
      driver: 'Luke Norton',
      status: 'In route',
      earning: '$ 23.50',
      statusColor: 'red'
    }
  ];

  const getStatusColor = (color) => {
    const colors = {
      green: '#10B981',
      blue: '#3B82F6',
      red: '#EF4444'
    };
    return colors[color] || '#6B7280';
  };

  return (
    <div className="card live-car-status-card">
      <div className="card-header">
        <h3 className="card-title">Live Car Status</h3>
        <button className="filter-btn">
          <Filter size={20} />
        </button>
      </div>
      
      <div className="status-table">
        <div className="table-header">
          <div className="header-cell">No.</div>
          <div className="header-cell">Car no.</div>
          <div className="header-cell">Driver</div>
          <div className="header-cell">Status</div>
          <div className="header-cell">Earning</div>
          <div className="header-cell">Action</div>
        </div>
        
        {carStatusData.map((car) => (
          <div key={car.id} className="table-row">
            <div className="table-cell">{String(car.id).padStart(2, '0')}</div>
            <div className="table-cell">{car.carNo}</div>
            <div className="table-cell driver-cell">
              <div className="driver-avatar">
                <User size={16} />
              </div>
              <span>{car.driver}</span>
            </div>
            <div className="table-cell status-cell">
              <div 
                className="status-dot" 
                style={{ backgroundColor: getStatusColor(car.statusColor) }}
              ></div>
              <span>{car.status}</span>
            </div>
            <div className="table-cell">{car.earning}</div>
            <div className="table-cell">
              <button className="details-btn">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveCarStatusCard;
