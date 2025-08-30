import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        {/* Left side - empty for now */}
        <div className="header-left"></div>
        
        {/* Right side - Bell Icon and Search Bar */}
        <div className="header-right">
          {/* Bell Icon */}
          <div className="notification-bell">
            <Bell size={24} />
            <div className="notification-dot"></div>
          </div>
          
          {/* Search Bar */}
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search here" 
              className="search-input"
            />
            <Search size={20} className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
