import React, { useState } from 'react';
import { Car, Calendar, Clock, Search } from 'lucide-react';

const CarAvailabilityCard = () => {
  const [carNumber, setCarNumber] = useState('Car number');
  const [selectedDate, setSelectedDate] = useState('2022-11-20');
  const [selectedTime, setSelectedTime] = useState('10 AM');

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">Car Availability</h3>
          <p className="card-subtitle"></p>
        </div>
      </div>
      
      <div className="availability-filters">
        
        {/* Car Number */}
        <div className="filter-group">
          <Car size={20} className="filter-icon" />
          <select 
            value={carNumber} 
            onChange={(e) => setCarNumber(e.target.value)}
            className="filter-select"
          >
            <option value="Car number">Car number</option>
            <option value="6465">6465</option>
            <option value="5665">5665</option>
            <option value="1755">1755</option>
          </select>
        </div>

        {/* Date */}
        <div className="filter-group">
          <Calendar size={20} className="filter-icon" />
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="filter-input"
          />
        </div>

        {/* Time */}
        <div className="filter-group">
          <Clock size={20} className="filter-icon" />
          <select 
            value={selectedTime} 
            onChange={(e) => setSelectedTime(e.target.value)}
            className="filter-select"
          >
            <option value="10 AM">10 AM</option>
            <option value="11 AM">11 AM</option>
            <option value="12 PM">12 PM</option>
            <option value="1 PM">1 PM</option>
            <option value="2 PM">2 PM</option>
          </select>
        </div>

        {/* Check Button */}
        <button className="check-btn">
          <Search size={16} />
          Check
        </button>
      </div>
    </div>
  );
};

export default CarAvailabilityCard;
